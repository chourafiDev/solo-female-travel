import type { BlogPost } from "@/types/metadata";
import type { Metadata } from "next";
import { siteConfig } from "./site-config";

/**
 * Generate base metadata for all pages
 */
export function generateBaseMetadata(): Metadata {
	return {
		metadataBase: new URL(siteConfig.url),
		title: {
			default: siteConfig.title,
			template: `%s | ${siteConfig.name}`,
		},
		description: siteConfig.description,
		keywords: [...siteConfig.keywords],
		authors: [{ name: siteConfig.creator.name, url: siteConfig.url }],
		creator: siteConfig.creator.name,
		publisher: siteConfig.name,
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
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: siteConfig.name,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: siteConfig.title,
			description: siteConfig.description,
			creator: siteConfig.creator.twitter,
			images: [siteConfig.twitterImage],
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
			icon: "/favicon.ico",
			shortcut: "/favicon-16x16.png",
			apple: "/apple-touch-icon.png",
		},
		manifest: "/site.webmanifest",
	};
}

/**
 * Generate metadata for homepage
 */
export function generateHomeMetadata(): Metadata {
	return {
		title: siteConfig.title,
		description: siteConfig.description,
		alternates: {
			canonical: siteConfig.url,
		},
		openGraph: {
			title: siteConfig.title,
			description: siteConfig.description,
			url: siteConfig.url,
			images: [
				{
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: `${siteConfig.name} homepage`,
				},
			],
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
					url: `/og-${category.slug}.jpg`,
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
			images: [`/twitter-${category.slug}.jpg`],
		},
	};
}

/**
 * Generate metadata for blog post pages
 */
export function generateBlogPostMetadata(post: BlogPost): Metadata {
	const url = `${siteConfig.url}/blog/${post.slug}`;
	const imageUrl = post.image.startsWith("http")
		? post.image
		: `${siteConfig.url}${post.image}`;

	return {
		title: post.title,
		description: post.description,
		keywords: [...siteConfig.keywords, ...post.tags],
		authors: [{ name: post.author }],
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: post.title,
			description: post.description,
			type: "article",
			publishedTime: post.publishedDate,
			modifiedTime: post.modifiedDate || post.publishedDate,
			authors: [post.author],
			url: url,
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: post.imageAlt || post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [imageUrl],
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
		title: `About ${siteConfig.name}`,
		description: `Learn about ${siteConfig.name} and our mission to help women travel solo safely and confidently around the world.`,
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: `About ${siteConfig.name}`,
			description: `Learn about ${siteConfig.name} and our mission to help women travel solo safely.`,
			url: url,
			type: "website",
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
		description: `Get in touch with ${siteConfig.name}. We'd love to hear from you!`,
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: `Contact ${siteConfig.name}`,
			description: `Get in touch with ${siteConfig.name}. We'd love to hear from you!`,
			url: url,
		},
	};
}
