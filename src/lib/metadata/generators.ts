import type { Metadata } from "next";
import type { POST_QUERYResult } from "@/sanity/types";
import type { ExtendedPost } from "@/types/extended-sanity";
import { siteConfig } from "./site-config";

/**
 * Generate base metadata for all pages
 */
export function generateBaseMetadata(): Metadata {
	return {
		metadataBase: new URL(siteConfig.url),
		title: {
			default: siteConfig.title,
			template: `%s | ${siteConfig.shortName}`,
		},
		description: siteConfig.description,
		keywords: [...siteConfig.keywords],
		authors: [{ name: siteConfig.creator.name, url: siteConfig.url }],
		creator: siteConfig.creator.name,
		publisher: siteConfig.name,
		applicationName: siteConfig.name,
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		openGraph: {
			type: "website",
			locale: "en_US",
			url: siteConfig.url,
			title: siteConfig.title,
			description: siteConfig.description,
			siteName: siteConfig.name,
			images: [
				{
					url: `${siteConfig.url}${siteConfig.ogImage}`,
					width: 1200,
					height: 630,
					alt: `${siteConfig.name} - ${siteConfig.branding.tagline}`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: siteConfig.title,
			description: siteConfig.description,
			site: siteConfig.creator.twitter,
			creator: siteConfig.creator.twitter,
			images: [`${siteConfig.url}${siteConfig.twitterImage}`],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		icons: {
			icon: [
				{ url: "/favicon.ico" },
				{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
				{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			],
			shortcut: "/favicon-16x16.png",
			apple: [
				{ url: "/apple-touch-icon.png" },
				{
					url: "/apple-touch-icon-180x180.png",
					sizes: "180x180",
					type: "image/png",
				},
			],
		},
		manifest: "/site.webmanifest",
		alternates: {
			canonical: siteConfig.url,
			types: {
				"application/rss+xml": `${siteConfig.url}/feed.xml`,
			},
		},
		category: "travel",
	};
}

/**
 * Generate metadata for homepage
 */
export function generateHomeMetadata(): Metadata {
	return {
		title: siteConfig.title,
		description: siteConfig.description,
		keywords: [
			...siteConfig.keywords,
			"solo female travel blog",
			"women travel alone",
			"safe travel destinations women",
		],
		alternates: {
			canonical: siteConfig.url,
		},
		openGraph: {
			title: siteConfig.title,
			description: siteConfig.description,
			url: siteConfig.url,
			type: "website",
			images: [
				{
					url: `${siteConfig.url}${siteConfig.ogImage}`,
					width: 1200,
					height: 630,
					alt: `${siteConfig.name} - Homepage`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: siteConfig.title,
			description: siteConfig.description,
			images: [`${siteConfig.url}${siteConfig.twitterImage}`],
		},
	};
}

/**
 * Generate metadata for category pages
 */
export function generateCategoryMetadata(categorySlug: string): Metadata {
	const category =
		siteConfig.categories[categorySlug as keyof typeof siteConfig.categories];

	if (!category) {
		return generateBaseMetadata();
	}

	const url = `${siteConfig.url}/${category.slug}`;

	return {
		title: category.title,
		description: category.description,
		keywords: [...siteConfig.keywords, ...category.keywords],
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: category.title,
			description: category.description,
			url: url,
			type: "website",
			images: [
				{
					url: `${siteConfig.url}/og-${category.slug}.jpg`,
					width: 1200,
					height: 630,
					alt: category.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: category.title,
			description: category.description,
			images: [`${siteConfig.url}/twitter-${category.slug}.jpg`],
		},
	};
}

/**
 * Generate metadata for blog post pages
 */
export function generateBlogPostMetadata(
	post: POST_QUERYResult | ExtendedPost | null,
): Metadata {
	if (!post) return {};

	const url = `${siteConfig.url}/blog/${post.slug}`;
	const imageUrl = post.mainImage?.asset?.url
		? post.mainImage.asset.url.startsWith("http")
			? post.mainImage.asset.url
			: `${siteConfig.url}${post.mainImage.asset.url}`
		: `${siteConfig.url}/default-og-image.jpg`;

	return {
		title: post.title || "Blog Post",
		description: post.excerpt || siteConfig.description,
		keywords: post.category?.title
			? [
					...siteConfig.keywords,
					post.category.title.toLowerCase(),
					"travel blog",
					"solo female travel",
				]
			: [...siteConfig.keywords],
		authors: post.author?.name ? [{ name: post.author.name }] : [],
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: post.title || "Blog Post",
			description: post.excerpt || siteConfig.description,
			type: "article",
			publishedTime: post.publishedAt || undefined,
			modifiedTime: post._updatedAt,
			authors: post.author?.name ? [post.author.name] : [],
			url: url,
			siteName: siteConfig.name,
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: post.mainImage?.alt || post.title || "Blog post image",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title || "Blog Post",
			description: post.excerpt || siteConfig.description,
			images: [imageUrl],
			site: siteConfig.creator.twitter,
			creator: siteConfig.creator.twitter,
		},
	};
}

/**
 * Generate metadata for about page
 */
export function generateAboutMetadata(): Metadata {
	const url = `${siteConfig.url}/about`;

	return {
		title: `About ${siteConfig.shortName}`,
		description: `Learn about ${siteConfig.name} and our mission to empower women to travel solo safely, confidently, and authentically around the world.`,
		keywords: [
			...siteConfig.keywords,
			"about Solo Female Voyage",
			"solo female travel community",
			"women travel bloggers",
			"travel for women",
		],
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: `About ${siteConfig.name}`,
			description: `${siteConfig.branding.mission}`,
			url: url,
			type: "website",
			images: [
				{
					url: `${siteConfig.url}/og-about.jpg`,
					width: 1200,
					height: 630,
					alt: `About ${siteConfig.name}`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `About ${siteConfig.name}`,
			description: `Learn about our mission to empower women to travel solo safely and confidently.`,
			images: [`${siteConfig.url}/twitter-about.jpg`],
			site: siteConfig.creator.twitter,
			creator: siteConfig.creator.twitter,
		},
	};
}

/**
 * Generate metadata for contact page
 */
export function generateContactMetadata(): Metadata {
	const url = `${siteConfig.url}/contact`;

	return {
		title: "Contact Us",
		description: `Get in touch with ${siteConfig.name}. We're here to answer your solo female travel questions, provide destination advice, and help you plan your next adventure safely.`,
		keywords: [
			...siteConfig.keywords,
			"contact Solo Female Voyage",
			"solo travel advice",
			"travel questions",
			"female travel support",
		],
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: `Contact ${siteConfig.name}`,
			description: `Have questions about solo female travel? Reach out to the ${siteConfig.name} team for expert advice and support.`,
			url: url,
			type: "website",
			images: [
				{
					url: `${siteConfig.url}/og-contact.jpg`,
					width: 1200,
					height: 630,
					alt: `Contact ${siteConfig.name}`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `Contact ${siteConfig.name}`,
			description:
				"Get in touch with us for solo female travel advice and support.",
			images: [`${siteConfig.url}/twitter-contact.jpg`],
		},
	};
}

/**
 * Generate metadata for author pages
 */
export function generateAuthorMetadata(
	authorName: string,
	authorBio: string,
	authorSlug: string,
): Metadata {
	const url = `${siteConfig.url}/author/${authorSlug}`;

	return {
		title: `${authorName} - Travel Writer at ${siteConfig.shortName}`,
		description: authorBio,
		keywords: [
			...siteConfig.keywords,
			authorName.toLowerCase(),
			"travel writer",
			"travel blogger",
			"solo female travel expert",
		],
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: `${authorName} - ${siteConfig.shortName}`,
			description: authorBio,
			url: url,
			type: "profile",
			images: [
				{
					url: `${siteConfig.url}/og-author-${authorSlug}.jpg`,
					width: 1200,
					height: 630,
					alt: `${authorName} - Travel Writer`,
				},
			],
		},
		twitter: {
			card: "summary",
			title: `${authorName} - Travel Writer`,
			description: authorBio,
		},
	};
}

/**
 * Generate metadata for search pages
 */
export function generateSearchMetadata(
	query?: string,
	category?: string,
): Metadata {
	const url = `${siteConfig.url}/search`;

	let title: string;
	let description: string;

	if (query && category) {
		const categoryData =
			siteConfig.categories[category as keyof typeof siteConfig.categories];
		title = `Search: "${query}" in ${categoryData?.title || category}`;
		description = `Search results for "${query}" in ${categoryData?.title || category}. Find solo female travel guides, safety tips, and destination information.`;
	} else if (query) {
		title = `Search Results: "${query}"`;
		description = `Search results for "${query}". Discover solo female travel guides, destination tips, and travel inspiration for women traveling alone.`;
	} else if (category) {
		const categoryData =
			siteConfig.categories[category as keyof typeof siteConfig.categories];
		title = `Search ${categoryData?.title || category}`;
		description =
			categoryData?.description ||
			`Browse ${category} articles for solo female travelers`;
	} else {
		title = "Search Travel Guides";
		description = `Search ${siteConfig.name} for solo female travel destinations, safety tips, budget guides, packing lists, and travel inspiration for women traveling alone.`;
	}

	return {
		title,
		description,
		keywords: [
			...siteConfig.keywords,
			"search travel guides",
			"find destinations",
			"travel search",
		],
		alternates: {
			canonical: url,
		},
		robots: {
			index: false,
			follow: true,
		},
		openGraph: {
			title,
			description,
			url: url,
			type: "website",
		},
		twitter: {
			card: "summary",
			title,
			description,
		},
	};
}
