import { JsonLd } from "@/components/JsonLd";
import { Separator } from "@/components/ui/separator";
import Categories from "@/features/category/components/categories";
import RelatesPosts from "@/features/category/components/relates-posts";
import Search from "@/features/category/components/search";
import {
	generateBreadcrumbSchema,
	generateCategoryMetadata,
	generateCollectionPageSchema,
	generateItemListSchema,
	siteConfig,
} from "@/lib/metadata";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateMetadata({ params }: PageProps) {
	const { slug } = await params;

	return generateCategoryMetadata(slug);
}

const CategoryPage = async ({ params }: PageProps) => {
	const { slug } = await params;

	const category =
		siteConfig.categories[slug as keyof typeof siteConfig.categories];

	if (!category) {
		return (
			<main className="custom-container my-10">
				<div className="py-44 bg-soft-linen rounded-xl flex justify-center items-center">
					<h1 className="text-foreground font-semibold text-lg">
						Category not found
					</h1>
				</div>
			</main>
		);
	}

	const collectionSchema = generateCollectionPageSchema(
		category.title,
		category.description,
	);

	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: "Home", url: "/" },
		{ name: category.title, url: `/${category.slug}` },
	]);

	const posts = [
		{
			id: 1,
			category: "FASHION",
			image:
				"https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
			date: "2025-02-19T10:00:00Z",
			author: "JANE COOPER",
			authorSlug: "jane-cooper",
			title: "10 How To Start Your Own Online Magazine",
			slug: "how-to-start-your-own-online-magazine",
			excerpt:
				"Learn the essential steps to launch your digital magazine successfully.",
		},
		{
			id: 2,
			category: "TRAVEL",
			image:
				"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
			date: "2025-03-25T10:00:00Z",
			author: "RALPH EDWARDS",
			authorSlug: "ralph-edwards",
			title: "Exploring Europe On A Budget: 7 Must-Visit Cities",
			slug: "exploring-europe-on-a-budget",
			excerpt:
				"Discover affordable European destinations without breaking the bank.",
		},
		{
			id: 3,
			category: "FOOD",
			image:
				"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
			date: "2025-04-15T10:00:00Z",
			author: "THERESA WEBB",
			authorSlug: "theresa-webb",
			title: "Easy One-Pot Dinners For Busy Weeknights",
			slug: "easy-one-pot-dinners-busy-weeknights",
			excerpt: "Quick and delicious meals that require minimal cleanup.",
		},
		{
			id: 4,
			category: "MINDFULNESS",
			image:
				"https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
			date: "2025-01-10T10:00:00Z",
			author: "WADE WARREN",
			authorSlug: "wade-warren",
			title: "Finding Focus: How To Stay Centered In The Age Of Distraction",
			slug: "finding-focus-stay-centered",
			excerpt: "Practical techniques to maintain focus in a distracted world.",
		},
		{
			id: 5,
			category: "MINDFULNESS",
			image:
				"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
			date: "2025-02-06T10:00:00Z",
			author: "DARRELL STEWARD",
			authorSlug: "darrell-steward",
			title: "How To Start Journaling For Mental Clarity",
			slug: "start-journaling-mental-clarity",
			excerpt: "Begin your journaling practice with these simple tips.",
		},
		{
			id: 6,
			category: "FITNESS",
			image:
				"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
			date: "2025-01-10T10:00:00Z",
			author: "RALPH EDWARDS",
			authorSlug: "ralph-edwards",
			title: "Home Workouts That Actually Work For Busy People Daily",
			slug: "home-workouts-busy-people",
			excerpt: "Effective home workout routines you can do anywhere.",
		},
	];

	const itemListSchema = generateItemListSchema(
		posts.map((post) => ({
			name: post.title,
			url: `/blog/${post.slug}`,
			description: post.excerpt,
		})),
		`${category.title} Posts`,
	);

	return (
		<>
			<JsonLd data={collectionSchema} id="collection-schema" />
			<JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
			<JsonLd data={itemListSchema} id="itemlist-schema" />

			{/* Breadcrumbs */}
			<nav aria-label="Breadcrumb" className="bg-soft-linen py-3 border-b">
				<div className="custom-container">
					<ol
						itemScope
						itemType="https://schema.org/BreadcrumbList"
						className="flex items-center gap-1.5 font-medium text-foreground text-xs"
					>
						<li
							itemProp="itemListElement"
							itemScope
							itemType="https://schema.org/ListItem"
						>
							<Link href="/" itemProp="item">
								<span itemProp="name">Home</span>
							</Link>
							<meta itemProp="position" content="1" />
						</li>
						<li>
							<IoChevronForwardOutline
								className="size-3.5"
								aria-hidden="true"
							/>
						</li>
						<li
							itemProp="itemListElement"
							itemScope
							itemType="https://schema.org/ListItem"
						>
							<span itemProp="name">{category.title}</span>
							<meta itemProp="position" content="2" />
						</li>
					</ol>
				</div>
			</nav>

			<main className="custom-container">
				{/* Category Header */}
				<section className="mt-10 mb-16 lg:w-[60%]">
					<div className="flex items-center gap-3">
						<h1 className="text-foreground font-marcellus text-4xl font-semibold capitalize">
							{category.slug}
						</h1>
						<div className="px-3 py-1 bg-foreground rounded-full">
							<p className="text-xs font-medium text-background">
								{posts.length} articles
							</p>
						</div>
					</div>
					<p className="text-muted-foreground text-[15px] font-normal mt-4">
						{category.description}
					</p>
				</section>

				{/* Posts Section */}
				<section
					aria-labelledby="posts-heading"
					className="mb-10 grid grid-cols-[75%_1px_1fr] gap-5 items-start"
				>
					<h2 id="posts-heading" className="sr-only">
						{category.title} Posts
					</h2>

					{/* Posts List */}
					<div className="space-y-6 mb-10">
						{posts.map((post, index) => (
							<React.Fragment key={post.id}>
								<BlogCard {...post} />
								{index < posts.length - 1 && <Separator />}
							</React.Fragment>
						))}

						{posts.length > 5 && (
							<nav
								aria-label="Pagination"
								className="flex justify-center gap-2 mt-10"
							>
								<Link
									href={`/${category.slug}?page=1`}
									rel="prev"
									className="px-4 py-2 border rounded hover:bg-foreground hover:text-background"
								>
									Previous
								</Link>
								<span className="px-4 py-2 bg-foreground text-background rounded">
									1
								</span>
								<Link
									href={`/${category.slug}?page=2`}
									rel="next"
									className="px-4 py-2 border rounded hover:bg-foreground hover:text-background"
								>
									Next
								</Link>
							</nav>
						)}
					</div>

					<Separator orientation="vertical" aria-hidden="true" />

					{/* Sidebar */}
					<aside aria-label="Sidebar">
						<div className="space-y-8">
							<Search />
							<Categories />
							<Separator aria-hidden="true" />
							<RelatesPosts />
						</div>
					</aside>
				</section>
			</main>
		</>
	);
};

export default CategoryPage;

// Fixed BlogCard Component
const BlogCard = ({
	image,
	date,
	author,
	authorSlug,
	title,
	slug,
	category,
	excerpt,
}: {
	image: string;
	date: string;
	author: string;
	authorSlug: string;
	title: string;
	slug: string;
	category: string;
	excerpt: string;
}) => {
	return (
		<article
			itemScope
			itemType="https://schema.org/BlogPosting"
			className="group flex items-center gap-10"
		>
			{/* Image */}
			<Link href={`/blog/${slug}`} itemProp="url" className="flex-1 h-full">
				<figure
					itemProp="image"
					itemScope
					itemType="https://schema.org/ImageObject"
					className="relative w-full h-[250px] rounded-lg overflow-hidden"
				>
					<Image
						src={image}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="absolute object-cover transition-all duration-300 group-hover:scale-110"
						itemProp="url"
						loading="lazy"
					/>

					{/* Category badge */}
					<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 pt-0.5 pb-1 rounded-full z-20">
						<Link
							href={`/${category.toLowerCase()}`}
							rel="category tag"
							className="text-[11px] text-white font-semibold uppercase"
						>
							{category}
						</Link>
					</div>
				</figure>
			</Link>

			{/* Content */}
			<div className="flex-1">
				{/* Meta */}
				<div className="flex items-center gap-0 mb-4">
					<time
						dateTime={date}
						itemProp="datePublished"
						className="text-xs font-bold text-foreground"
					>
						{format(new Date(date), "MMMM d, yyyy").toUpperCase()}
					</time>
					<RxDividerVertical
						className="text-foreground font-bold rotate-12"
						aria-hidden="true"
					/>
					<div itemProp="author" itemScope itemType="https://schema.org/Person">
						<Link
							href={`/author/${authorSlug}`}
							className="text-xs text-foreground font-bold"
						>
							<span className="text-muted-foreground">POST BY</span>{" "}
							<span itemProp="name">{author}</span>
						</Link>
					</div>
				</div>

				{/* Title & Excerpt */}
				<div className="mb-8">
					<h2
						itemProp="headline"
						className="post-title group-hover:underline text-2xl mb-3"
					>
						<Link href={`/blog/${slug}`}>{title}</Link>
					</h2>

					<p itemProp="description" className="text-muted-foreground text-sm">
						{excerpt}
					</p>
				</div>

				{/* Read More */}
				<Link
					href={`/blog/${slug}`}
					className="text-sm font-bold underline hover:no-underline"
					aria-label={`Read more about ${title}`}
				>
					Read More
				</Link>
			</div>
		</article>
	);
};
