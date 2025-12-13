import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { IoChevronForwardOutline } from "react-icons/io5";
import Breadcrumbs from "@/components/breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { portableTextComponents } from "@/components/portable-text-components";
import Subscribe from "@/components/subscribe";
import SubscribeVertical from "@/components/subscribe-vertical";
import TableOfContent from "@/components/table-of-content";
import ArticleHeader from "@/features/blog/components/article-header";
import AuthorBio from "@/features/blog/components/author-bio";
import PostNavigation from "@/features/blog/components/post-navigation";
import RelatedPosts from "@/features/blog/components/related-posts";
import SocialShareButtons from "@/features/blog/components/social-share-buttons";
import { extractHeadings } from "@/lib/extract-headings";
import {
	generateBlogPostingSchema,
	generateBlogPostMetadata,
	generateBreadcrumbSchema,
	generateFAQSchema,
} from "@/lib/metadata";
import { getPost } from "@/sanity/queries";
import type { ExtendedPost } from "@/types/extended-sanity";
import { isFAQBlock } from "@/types/type-guards";

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata({ params }: PageProps) {
	const { slug } = await params;
	const post = await getPost(slug);

	if (!post) return {};

	return generateBlogPostMetadata(post);
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params;
	const post = (await getPost(slug)) as ExtendedPost | null;

	if (!post) return notFound();

	// ✅ Type-safe FAQ extraction
	const faqBlock = post.body?.find(isFAQBlock);
	const hasFAQ = faqBlock !== undefined && faqBlock.faqs.length > 0;

	// ✅ Generate schemas
	const faqSchema = hasFAQ
		? generateFAQSchema(
				faqBlock.faqs.map((faq) => ({
					question: faq.question,
					answer: faq.answer,
				})),
			)
		: null;

	const blogPostSchema = generateBlogPostingSchema(post);
	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: "Home", url: "/" },
		{ name: "Blog", url: "/blog" },
		{ name: post.title || "Post", url: `/blog/${post.slug}` },
	]);

	// ✅ Safe data extraction
	const categoryTitle = post.category?.title || "Blog";
	const categorySlug = post.category?.slug || "blog";
	const imageUrl = post.mainImage?.asset?.url || "/default-image.jpg";
	const imageAlt = post.mainImage?.alt || post.title || "Blog post image";
	const imageWidth = post.mainImage?.asset?.metadata?.dimensions?.width || 1200;
	const imageHeight =
		post.mainImage?.asset?.metadata?.dimensions?.height || 630;

	// ✅ Extract headings for TOC
	const headings = extractHeadings(post.body);

	return (
		<>
			{/* JSON-LD Schemas */}
			<JsonLd data={blogPostSchema} id="blog-post-schema" />
			<JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
			{hasFAQ && faqSchema && <JsonLd data={faqSchema} id="faq-schema" />}

			{/* Breadcrumbs */}
			<Breadcrumbs>
				<>
					<li
						itemProp="itemListElement"
						itemScope
						itemType="https://schema.org/ListItem"
					>
						<Link
							href={`/category/${categorySlug}`}
							className="font-bold"
							itemProp="item"
						>
							<span itemProp="name">{categoryTitle}</span>
						</Link>
						<meta itemProp="position" content="2" />
					</li>
					<li>
						<IoChevronForwardOutline className="size-3.5" aria-hidden="true" />
					</li>
					<li
						itemProp="itemListElement"
						itemScope
						itemType="https://schema.org/ListItem"
						className="text-foreground"
					>
						<span itemProp="name">{post.title}</span>
						<meta itemProp="position" content="3" />
					</li>
				</>
			</Breadcrumbs>

			<main className="custom-container">
				<article
					itemScope
					itemType="https://schema.org/BlogPosting"
					className="mb-16 mt-10"
				>
					{/* Article Header */}
					<ArticleHeader post={post} />

					{/* Featured Image */}
					{post.mainImage?.asset?.url && (
						<figure
							itemProp="image"
							itemScope
							itemType="https://schema.org/ImageObject"
							className="my-8"
						>
							<Image
								src={imageUrl}
								alt={imageAlt}
								width={imageWidth}
								height={imageHeight}
								itemProp="url"
								priority
								className="object-cover rounded-xl"
							/>
							<meta itemProp="width" content={imageWidth.toString()} />
							<meta itemProp="height" content={imageHeight.toString()} />
						</figure>
					)}

					<div className="flex items-start gap-5 w-[90%] mx-auto">
						{/* Social Share Buttons */}
						<aside className="w-[25%] sticky top-24 space-y-5">
							<TableOfContent
								headings={headings}
								title={post.tableOfContents?.title}
							/>
							<SocialShareButtons post={post} />
							<SubscribeVertical />
						</aside>

						{/* Article body */}
						<div className="flex-1">
							{/* Affiliate Disclosure */}
							<div className="bg-soft-linen rounded-md p-4 mb-4">
								<p className="text-foreground text-[13px] leading-6">
									<strong>Disclosure:</strong> This post may contain affiliate
									links, which means I earn a small commission at no extra cost
									to you if you book through my links. I only recommend services
									I&apos;ve personally used and trust.
								</p>
							</div>

							{/* Portable Text Content */}
							{post.body && (
								<PortableText
									value={post.body}
									components={portableTextComponents}
								/>
							)}
						</div>
					</div>

					{/* Article Footer Metadata */}
					<footer className="hidden">
						{post.publishedAt && (
							<meta itemProp="datePublished" content={post.publishedAt} />
						)}
						<meta itemProp="dateModified" content={post._updatedAt} />
						{post.wordCount && (
							<meta itemProp="wordCount" content={post.wordCount.toString()} />
						)}
						<div
							itemProp="publisher"
							itemScope
							itemType="https://schema.org/Organization"
						>
							<meta itemProp="name" content="Solo Female Voyage" />
							<div
								itemProp="logo"
								itemScope
								itemType="https://schema.org/ImageObject"
							>
								<meta
									itemProp="url"
									content="https://solofemalevoyage.com/logo.png"
								/>
							</div>
						</div>
						{post.author?.name && (
							<div
								itemProp="author"
								itemScope
								itemType="https://schema.org/Person"
							>
								<meta itemProp="name" content={post.author.name} />
							</div>
						)}
					</footer>
				</article>

				{/* AUTHOR BIO */}
				{post.author && <AuthorBio author={post.author} />}

				{/* POST NAVIGATION */}
				{post.slug && <PostNavigation currentSlug={post.slug} />}

				{/* RELATED POSTS */}
				{post.slug && post.category?.slug && (
					<RelatedPosts
						currentSlug={post.slug}
						categorySlug={post.category.slug}
					/>
				)}

				{/* NEWSLETTER SUBSCRIBE */}
				<Subscribe />
			</main>
		</>
	);
}
