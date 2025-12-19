export const siteConfig = {
	name: "Solo Female Voyage Travel",
	shortName: "Solo Female Voyage",
	title: "Solo Female Voyage Travel: Solo Female Travel Guide & Safety Tips",
	description:
		"Your trusted solo female travel companion. Discover safe destinations, expert travel tips, budget guides, and inspiring stories for women traveling alone around the world.",
	url: "https://solofemalevoyage.com",
	ogImage: "/og-image.png",
	twitterImage: "/og-image.png",
	links: {
		instagram: "https://instagram.com/solofemalevoyage",
		pinterest: "https://pinterest.com/solofemalevoyage",
		tiktok: "https://tiktok.com/@solofemalevoyage",
	},
	creator: {
		name: "Solo Female Voyage Travel",
		email: "support@solofemalevoyage.com",
		twitter: "@solofemalevoyage",
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
		"Solo Female Voyage",
		"Solo Female Voyage travel",
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
		"budget-costs": {
			title: "Budget Solo Female Travel: Affordable Destinations & Money Tips",
			description:
				"Travel solo on a budget! Discover affordable destinations, money-saving tips, best travel credit cards, and budget hacks for female travelers.",
			slug: "budget-costs",
			keywords: [
				"budget travel",
				"budget costs",
				"cheap destinations",
				"travel savings",
				"affordable travel",
			],
		},
		accommodation: {
			title: "Solo Female Travel Accommodation: Hotels, Hostels & Safe Stays",
			description:
				"Find the best accommodation for solo female travelers. Reviews of women-friendly hotels, safe hostels, boutique stays, and tips for booking secure lodging worldwide.",
			slug: "accommodation",
			keywords: [
				"solo female accommodation",
				"women-friendly hotels",
				"safe hostels",
				"female-only hostels",
				"accommodation reviews",
				"where to stay solo",
			],
		},
		"comparisons-reviews": {
			title: "Solo Female Travel Gear Reviews & Product Comparisons",
			description:
				"Honest reviews and comparisons of travel gear, luggage, safety products, and essential items for solo female travelers. Make informed decisions with expert recommendations.",
			slug: "comparisons-reviews",
			keywords: [
				"travel gear reviews",
				"product comparisons",
				"best travel products",
				"luggage reviews",
				"travel equipment",
				"gear recommendations",
			],
		},
	},
	social: {
		instagram: {
			handle: "@solofemalevoyage",
			url: "https://instagram.com/solofemalevoyage",
		},
		pinterest: {
			handle: "@solofemalevoyage",
			url: "https://pinterest.com/solofemalevoyage",
		},
		tiktok: {
			handle: "@solofemalevoyage",
			url: "https://tiktok.com/@solofemalevoyage",
		},
	},
	contact: {
		email: "support@solofemalevoyage.com",
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
