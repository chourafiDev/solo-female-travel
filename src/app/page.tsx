import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import StartTheConversation from "@/components/start-the-conversation";
import Subscribe from "@/components/subscribe";
import Banner from "@/features/home/components/banner";
import Categories from "@/features/home/components/categories";
import FeaturedPosts from "@/features/home/components/featured-posts";
import MostPopular from "@/features/home/components/most-popular";
import Trending from "@/features/home/components/trending";
import {
	generateHomeMetadata,
	generateWebsiteSchema,
	siteConfig,
} from "@/lib/metadata";

export const metadata: Metadata = generateHomeMetadata();

export default function Home() {
	const websiteSchema = generateWebsiteSchema();

	return (
		<>
			<JsonLd data={websiteSchema} id="website-schema" />

			<main id="main-content" className="custom-container">
				<h1 className="sr-only">
					{siteConfig.name}: {siteConfig.branding.tagline}
				</h1>

				<Trending />
				<Banner />
				<Categories />
				<FeaturedPosts />
				<Subscribe />
				<MostPopular />
				<StartTheConversation />
			</main>
		</>
	);
}
