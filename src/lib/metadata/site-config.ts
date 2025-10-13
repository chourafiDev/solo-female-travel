export const siteConfig = {
	name: "WanderHer Travel",
	shortName: "WanderHer",
	title: "WanderHer Travel: Solo Female Travel Guide & Safety Tips",
	description:
		"Your trusted solo female travel companion. Discover safe destinations, expert travel tips, budget guides, and inspiring stories for women traveling alone around the world.",
	url: process.env.NEXT_PUBLIC_SITE_URL || "https://wanderhertravel.com",
	ogImage: "/og-image.jpg",
	twitterImage: "/twitter-image.jpg",
	links: {
		twitter: "https://twitter.com/wanderhertravel",
		instagram: "https://instagram.com/wanderhertravel",
		pinterest: "https://pinterest.com/wanderhertravel",
		facebook: "https://facebook.com/wanderhertravel",
		tiktok: "https://tiktok.com/@wanderhertravel",
	},
	creator: {
		name: "WanderHer Travel",
		email: "hello@wanderhertravel.com",
		twitter: "@wanderhertravel",
	},
	keywords: [
		"solo female travel",
		"women traveling alone",
		"safe travel destinations for women",
		"solo travel tips",
		"female travel safety",
		"budget travel for women",
		"solo travel destinations",
		"women travel guides",
		"wanderher",
		"wanderher travel",
		"solo female travel blog",
		"female travel blogger",
	],
	categories: {
		destinations: {
			title: "Solo Female Travel Destinations: Safe & Inspiring Places",
			description:
				"Discover the best destinations for solo female travelers. Comprehensive country guides, city recommendations, safety tips, and curated itineraries for women traveling alone.",
			slug: "destinations",
			keywords: [
				"travel destinations",
				"solo female destinations",
				"safe countries for women",
				"best places to travel alone",
			],
		},
		"travel-tips": {
			title: "Solo Female Travel Tips: Planning, Packing & Essential Guides",
			description:
				"Expert solo female travel tips covering planning, packing, budgeting, and essential advice for women traveling alone. Learn from experienced travelers.",
			slug: "travel-tips",
			keywords: [
				"travel tips",
				"packing guides",
				"travel planning",
				"solo travel advice",
			],
		},
		safety: {
			title: "Solo Female Travel Safety: Essential Tips & Gear Guide",
			description:
				"Comprehensive solo female travel safety guide with practical tips, product reviews, cultural awareness, and emergency preparation for women traveling alone.",
			slug: "safety",
			keywords: [
				"travel safety",
				"safety tips for women",
				"travel gear",
				"solo travel safety",
			],
		},
		"budget-travel": {
			title: "Budget Solo Female Travel: Affordable Destinations & Money Tips",
			description:
				"Travel solo on a budget! Discover affordable destinations, money-saving tips, best travel credit cards, and budget hacks for female travelers.",
			slug: "budget-travel",
			keywords: [
				"budget travel",
				"cheap destinations",
				"travel savings",
				"affordable travel",
			],
		},
		tours: {
			title: "Solo Female Travel Tours & Packages: Group Tours & Experiences",
			description:
				"Best group tours, all-inclusive packages, and curated experiences for solo female travelers. Reviews of top tour companies and destination recommendations.",
			slug: "tours",
			keywords: [
				"travel tours",
				"group tours",
				"travel packages",
				"solo travel tours",
			],
		},
	},
	social: {
		instagram: {
			handle: "@wanderhertravel",
			url: "https://instagram.com/wanderhertravel",
		},
		twitter: {
			handle: "@wanderhertravel",
			url: "https://twitter.com/wanderhertravel",
		},
		pinterest: {
			handle: "@wanderhertravel",
			url: "https://pinterest.com/wanderhertravel",
		},
		facebook: {
			url: "https://facebook.com/wanderhertravel",
		},
		tiktok: {
			handle: "@wanderhertravel",
			url: "https://tiktok.com/@wanderhertravel",
		},
	},
	contact: {
		email: "support@wanderhertravel.com",
		supportEmail: "support@wanderhertravel.com",
		businessEmail: "partnerships@wanderhertravel.com",
	},
	branding: {
		tagline: "Your Solo Female Travel Companion",
		mission:
			"Empowering women to travel solo safely, confidently, and authentically around the world.",
		colors: {
			primary: "#161616",
			secondary: "#f8f6f7",
		},
	},
} as const;

export type SiteConfig = typeof siteConfig;
