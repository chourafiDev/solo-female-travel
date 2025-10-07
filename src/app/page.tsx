import StartTheConversation from "@/components/start-the-conversation";
import Subscribe from "@/components/subscribe";
import Banner from "@/features/home/components/banner";
import Categories from "@/features/home/components/categories";
import LatestPosts from "@/features/home/components/latest-posts";
import MostPopular from "@/features/home/components/most-popular";
import Trending from "@/features/home/components/trending";

export default function Home() {
	return (
		<main className="custom-container">
			<Trending />
			<Banner />
			<Categories />
			<LatestPosts />
			<Subscribe />
			<MostPopular />
			<StartTheConversation />
		</main>
	);
}
