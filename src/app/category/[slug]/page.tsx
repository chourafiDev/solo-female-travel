import React from "react";
import Breadcrumbs from "@/components/breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Separator } from "@/components/ui/separator";
import BlogCard from "@/features/category/components/blog-card";
import Categories from "@/features/category/components/categories";
import CategoryHeader from "@/features/category/components/category-header";
import PaginationPosts from "@/features/category/components/pagination-posts";
import RelatesPosts from "@/features/category/components/relates-posts";
import Search from "@/features/category/components/search";
import {
	generateBreadcrumbSchema,
	generateCategoryMetadata,
	generateCollectionPageSchema,
	generateItemListSchema,
	siteConfig,
} from "@/lib/metadata";
import { getPostsByCategory } from "@/sanity/queries";

export interface BlogCardProps {
	image: string;
	date: string;
	author: string;
	authorSlug: string;
	title: string;
	slug: string;
	category: string;
	categorySlug: string;
	excerpt: string;
}

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
	searchParams: Promise<{
		page?: string;
	}>;
}

const POSTS_PER_PAGE = 10;

export async function generateMetadata({ params }: PageProps) {
	const { slug } = await params;
	return generateCategoryMetadata(slug);
}

const CategoryPage = async ({ params, searchParams }: PageProps) => {
	const { slug } = await params;
	const { page: pageParam } = await searchParams;

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

	// Get current page number
	const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

	// Fetch all posts from Sanity
	const sanityPosts = await getPostsByCategory(slug);

	// Calculate pagination
	const totalPosts = sanityPosts.length;
	const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
	const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
	const endIndex = startIndex + POSTS_PER_PAGE;

	// Get posts for current page
	const paginatedSanityPosts = sanityPosts.slice(startIndex, endIndex);

	// Transform Sanity posts to match BlogCard props
	const posts: BlogCardProps[] = paginatedSanityPosts.map((post) => ({
		image: post.mainImage?.asset?.url || "",
		date: post.publishedAt || new Date().toISOString(),
		author: post.author?.name || "Unknown Author",
		authorSlug: post.author?.slug || "",
		title: post.title || "Untitled Post",
		slug: post.slug || "",
		category: post.category?.title || category.title,
		categorySlug: post.category?.slug || slug,
		excerpt: post.excerpt || "",
	}));

	// Handle empty state
	if (totalPosts === 0) {
		return (
			<>
				<Breadcrumbs>
					<li
						itemProp="itemListElement"
						itemScope
						itemType="https://schema.org/ListItem"
						className="text-foreground"
					>
						<span itemProp="name">{category.title}</span>
						<meta itemProp="position" content="2" />
					</li>
				</Breadcrumbs>

				<main className="custom-container my-10">
					<CategoryHeader slug={slug} postCount={0} />
					<div className="py-44 bg-soft-linen rounded-xl flex justify-center items-center">
						<h1 className="text-foreground font-semibold text-lg">
							No posts found in this category
						</h1>
					</div>
				</main>
			</>
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
			<Breadcrumbs>
				<li
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
					className="text-foreground"
				>
					<span itemProp="name">{category.title}</span>
					<meta itemProp="position" content="2" />
				</li>
			</Breadcrumbs>

			<main className="custom-container">
				{/* Category Header */}
				<CategoryHeader slug={slug} postCount={totalPosts} />

				{/* Posts Section */}
				<section
					aria-labelledby="posts-heading"
					className="mb-10 flex lg:flex-row flex-col gap-5 items-start"
				>
					<h2 id="posts-heading" className="sr-only">
						{category.title} Posts
					</h2>

					{/* Posts List */}
					<div className="flex-1 space-y-14 mb-10 lg:border-r border-border lg:pr-5">
						<div className="space-y-6">
							{posts.map((post, index) => (
								<React.Fragment key={`${post.slug}-${index}`}>
									<BlogCard
										image={post.image}
										date={post.date}
										author={post.author}
										authorSlug={post.authorSlug}
										title={post.title}
										slug={post.slug}
										category={post.category}
										categorySlug={post.categorySlug}
										excerpt={post.excerpt}
									/>
									{index < posts.length - 1 && <Separator />}
								</React.Fragment>
							))}
						</div>

						{totalPages > 1 && (
							<PaginationPosts
								currentPage={currentPage}
								totalPages={totalPages}
								basePath={`/category/${slug}`}
							/>
						)}
					</div>

					{/* Sidebar */}
					<aside aria-label="Sidebar" className="lg:w-auto w-full">
						<div className="space-y-8 w-full">
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
