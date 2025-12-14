import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { portableTextComponents } from "@/components/portable-text-components";
import Subscribe from "@/components/subscribe";
import { Separator } from "@/components/ui/separator";
import BlogCard from "@/features/category/components/blog-card";
import Categories from "@/features/category/components/categories";
import {
	generateBreadcrumbSchema,
	generateItemListSchema,
	siteConfig,
} from "@/lib/metadata";
import { getAuthorWithPosts } from "@/sanity/queries";

interface AuthorPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata({ params }: AuthorPageProps) {
	const { slug } = await params;
	const authorData = await getAuthorWithPosts({ authorSlug: slug });

	if (!authorData) return {};

	// Extract bio text from PortableText
	const bioText = authorData.bio
		?.map((block) =>
			block._type === "block" && block.children
				? block.children.map((child) => (child.text ? child.text : "")).join("")
				: "",
		)
		.join(" ");

	return {
		title: `${authorData.name || "Author"} - Travel Writer`,
		description: bioText || `Articles by ${authorData.name}`,
	};
}

const AuthorPage = async ({ params }: AuthorPageProps) => {
	const { slug } = await params;
	const authorData = await getAuthorWithPosts({ authorSlug: slug });

	if (!authorData) return notFound();

	// Safe data extraction
	const authorName = authorData.name || "Anonymous";
	const authorSlug = authorData.slug || slug;
	const authorImage = authorData.image?.asset?.url || "/default-avatar.jpg";
	const authorBio = authorData.bio;
	const authorPosts = authorData.posts || [];

	// Extract bio text for schema
	const bioText =
		authorBio
			?.map((block) =>
				block._type === "block" && block.children
					? block.children
							.map((child) => (child.text ? child.text : ""))
							.join("")
					: "",
			)
			.join(" ") || "";

	// Generate schemas
	const authorSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		mainEntity: {
			"@type": "Person",
			name: authorName,
			url: `${siteConfig.url}/author/${authorSlug}`,
			image: authorImage,
			description: bioText,
		},
	};

	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: "Home", url: "/" },
		{ name: authorName, url: `/author/${authorSlug}` },
	]);

	const itemListSchema = generateItemListSchema(
		authorPosts.map((post) => ({
			name: post.title || "Untitled",
			url: `/blog/${post.slug}`,
			description: post.excerpt || "",
		})),
		`Articles by ${authorName}`,
	);

	return (
		<>
			{/* JSON-LD Schemas */}
			<JsonLd data={authorSchema} id="author-schema" />
			<JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
			<JsonLd data={itemListSchema} id="itemlist-schema" />

			{/* Breadcrumbs */}
			<Breadcrumbs>
				<li
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
					className="text-foreground"
				>
					<span itemProp="name">{authorName}</span>
					<meta itemProp="position" content="3" />
				</li>
			</Breadcrumbs>

			<main
				id="main-content"
				className="custom-container py-10"
				itemScope
				itemType="https://schema.org/ProfilePage"
			>
				<section
					aria-labelledby="author-info-heading"
					className="section-bottom flex lg:flex-row flex-col items-start lg:gap-6 gap-12"
				>
					<h2 id="author-info-heading" className="sr-only">
						Author Information
					</h2>

					{/* Sidebar */}
					<aside
						className="lg:w-1/6 w-full sticky top-20"
						aria-label="Author profile sidebar"
					>
						{/* Author Image */}
						<figure
							itemProp="image"
							itemScope
							itemType="https://schema.org/ImageObject"
							className="relative rounded-full size-[120px] mb-5 mx-auto overflow-hidden"
						>
							<Image
								src={authorImage}
								alt={`${authorName} profile picture`}
								itemProp="url"
								priority
								fill
								sizes="120px"
								className="absolute object-cover"
							/>
						</figure>

						{/* Author Info */}
						<div
							className="md:mb-10 mb-5 md:pb-10 pb-5 border-b"
							itemScope
							itemType="https://schema.org/Person"
						>
							<h1
								itemProp="name"
								className="text-foreground font-black text-xl text-center mb-1"
							>
								{authorName}
							</h1>

							<p className="text-foreground text-center text-sm">
								Teaching you to travel longer, cheaper, smarter
							</p>

							{/* Hidden metadata */}
							<meta
								itemProp="url"
								content={`${siteConfig.url}/author/${authorSlug}`}
							/>
						</div>

						<Categories />
					</aside>

					{/* Main Content */}
					<div className="lg:w-5/6 w-full lg:border-l lg:pl-6">
						{/* Author Bio */}
						<header className="mb-10">
							<h2 className="text-3xl text-foreground font-bold mb-4">
								Hi, I&apos;m {authorName}
							</h2>
							{authorBio && authorBio.length > 0 ? (
								<PortableText
									value={authorBio}
									components={portableTextComponents}
								/>
							) : (
								<p className="text-muted-foreground text-base">
									Travel writer and blogger.
								</p>
							)}

							{/* Stats */}
							<div className="flex items-center gap-6 mt-6 text-sm">
								<div>
									<span className="font-bold text-foreground text-3xl">
										{authorPosts.length}
									</span>
									<span className="text-muted-foreground ml-1">Articles</span>
								</div>
							</div>
						</header>

						{/* Articles Section */}
						<section aria-labelledby="author-articles-heading">
							<h3
								id="author-articles-heading"
								className="text-2xl text-foreground font-bold mb-6"
							>
								Articles by {authorName}
							</h3>

							{/* Posts List */}
							{authorPosts.length > 0 ? (
								<div className="flex-1 space-y-14 mb-10">
									<div className="space-y-6">
										{authorPosts.map((post, index) => (
											<React.Fragment key={post.slug || index}>
												<BlogCard
													category={post.category?.title || "BLOG"}
													categorySlug={post.category?.slug || "blog"}
													image={
														post.mainImage?.asset?.url || "/placeholder.jpg"
													}
													date={post.publishedAt || new Date().toISOString()}
													author={authorName}
													authorSlug={authorSlug}
													title={post.title || "Untitled"}
													slug={post.slug || "#"}
													excerpt={post.excerpt || ""}
												/>
												{index < authorPosts.length - 1 && <Separator />}
											</React.Fragment>
										))}
									</div>
								</div>
							) : (
								<p className="text-muted-foreground">No articles yet.</p>
							)}
						</section>
					</div>
				</section>

				<Subscribe />
			</main>
		</>
	);
};

export default AuthorPage;
