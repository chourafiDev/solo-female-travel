export const siteConfig = {
	name: "Your Blog Name",
	title: "Solo Female Travel Blog: Safe Destinations & Expert Tips",
	description:
		"Your trusted solo female travel resource. Discover safe destinations, expert safety tips, budget guides, and inspiring travel stories for women traveling alone.",
	url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
	ogImage: "/og-image.jpg",
	twitterImage: "/twitter-image.jpg",
	links: {
		twitter: "https://twitter.com/yourtwitterhandle",
		instagram: "https://instagram.com/yourinstagram",
		pinterest: "https://pinterest.com/yourpinterest",
	},
	creator: {
		name: "Your Name",
		email: "your@email.com",
		twitter: "@yourtwitterhandle",
	},
	keywords: [
		"solo female travel",
		"women traveling alone",
		"safe travel destinations",
		"solo travel tips",
		"female travel safety",
		"budget travel for women",
		"solo travel destinations",
		"women travel guides",
	],
	categories: {
		destinations: {
			title: "Solo Female Travel Destinations: Safe & Inspiring Places",
			description:
				"Discover the best destinations for solo female travelers. Country guides, city recommendations, safety tips, and itineraries for women traveling alone.",
			slug: "destinations",
			keywords: [
				"travel destinations",
				"solo female destinations",
				"safe countries",
			],
		},
		"travel-tips": {
			title: "Solo Female Travel Tips: Planning, Packing & Safety Guides",
			description:
				"Expert solo female travel tips covering planning, packing, budgeting, and essential advice for women traveling alone around the world.",
			slug: "travel-tips",
			keywords: ["travel tips", "packing guides", "travel planning"],
		},
		safety: {
			title: "Solo Female Travel Safety: Essential Tips & Gear Guide",
			description:
				"Comprehensive solo female travel safety guide with tips, product reviews, cultural awareness, and emergency preparation for women traveling alone.",
			slug: "safety",
			keywords: ["travel safety", "safety tips", "travel gear"],
		},
		"budget-travel": {
			title: "Budget Solo Female Travel: Affordable Destinations & Money Tips",
			description:
				"Travel solo on a budget! Discover affordable destinations, money-saving tips, best travel credit cards, and budget hacks for female travelers.",
			slug: "budget-travel",
			keywords: ["budget travel", "cheap destinations", "travel savings"],
		},
		tours: {
			title: "Solo Female Travel Tours & Packages: Group Tours & Experiences",
			description:
				"Best group tours, all-inclusive packages, and experiences for solo female travelers. Reviews of top tour companies and destination recommendations.",
			slug: "tours",
			keywords: ["travel tours", "group tours", "travel packages"],
		},
	},
} as const;

export type SiteConfig = typeof siteConfig;
