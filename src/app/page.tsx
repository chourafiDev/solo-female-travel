import { JsonLd } from "@/components/JsonLd";
import StartTheConversation from "@/components/start-the-conversation";
import Subscribe from "@/components/subscribe";
import Banner from "@/features/home/components/banner";
import Categories from "@/features/home/components/categories";
import LatestPosts from "@/features/home/components/latest-posts";
import MostPopular from "@/features/home/components/most-popular";
import Trending from "@/features/home/components/trending";
import { generateHomeMetadata, generateWebsiteSchema } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateHomeMetadata();

export default function Home() {
	const websiteSchema = generateWebsiteSchema();

	return (
		<>
			<JsonLd data={websiteSchema} id="website-schema" />

			<main className="custom-container">
				<h1 className="text-foreground text-[22px] font-semibold font-marcellus mb-5 mt-5">
					Solo Female Travel Guide: Safe Destinations, Tips & Inspiration
				</h1>

				<Trending />
				<Banner />
				<Categories />
				<LatestPosts />
				<Subscribe />
				<MostPopular />
				<StartTheConversation />
			</main>
		</>
	);
}
