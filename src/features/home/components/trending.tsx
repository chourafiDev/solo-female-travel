import { touristCarryingLuggage } from "@/lib/assets";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";

interface TrendingPost {
	id: number;
	title: string;
	slug: string;
	image: string;
	date: string;
	author: string;
	authorSlug: string;
}

const Trending = () => {
	const posts: TrendingPost[] = [
		{
			id: 1,
			title: "Best places to travel solo female in us",
			slug: "best-places-travel-solo-female-us",
			image: "https://...",
			date: "2025-02-12T10:00:00Z",
			author: "Maya Pena",
			authorSlug: "maya-pena",
		},
		{
			id: 2,
			title: "Best places to travel solo female in us",
			slug: "best-places-travel-solo-female-us",
			image: "https://...",
			date: "2025-02-12T10:00:00Z",
			author: "Maya Pena",
			authorSlug: "maya-pena",
		},
		{
			id: 3,
			title: "Best places to travel solo female in us",
			slug: "best-places-travel-solo-female-us",
			image: "https://...",
			date: "2025-02-12T10:00:00Z",
			author: "Maya Pena",
			authorSlug: "maya-pena",
		},
		{
			id: 4,
			title: "Best places to travel solo female in us",
			slug: "best-places-travel-solo-female-us",
			image: "https://...",
			date: "2025-02-12T10:00:00Z",
			author: "Maya Pena",
			authorSlug: "maya-pena",
		},
	];

	return (
		<section aria-labelledby="trending-heading" className="mb-8">
			<h2 id="trending-heading" className="sr-only">
				Trending Posts
			</h2>

			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 my-6">
				{posts.map((post, index) => (
					<article
						key={post.id}
						itemScope
						itemType="https://schema.org/BlogPosting"
						className="group w-full flex items-center border-r gap-3"
					>
						<Link href={`/blog/${post.slug}`} itemProp="url">
							<figure
								itemProp="image"
								itemScope
								itemType="https://schema.org/ImageObject"
								className="relative w-[90px] h-[70px] rounded-lg overflow-hidden"
							>
								<Image
									src={touristCarryingLuggage}
									alt={post.title}
									fill
									placeholder="blur"
									sizes="90px"
									className="absolute object-cover transition-all duration-300 group-hover:scale-110"
									itemProp="url"
									loading={index < 2 ? "eager" : "lazy"}
								/>
							</figure>
						</Link>

						<div>
							<div className="flex items-center gap-0">
								<time
									dateTime={post.date}
									itemProp="datePublished"
									className="text-[9px] font-bold text-foreground"
								>
									{format(new Date(post.date), "MMMM d, yyyy").toUpperCase()}
								</time>
								<RxDividerVertical
									className="text-foreground font-bold rotate-12"
									aria-hidden="true"
								/>
								<div
									itemProp="author"
									itemScope
									itemType="https://schema.org/Person"
									className="mb-1"
								>
									<Link
										href={`/author/${post.authorSlug}`}
										className="text-[9px] font-semibold"
									>
										<span className="text-muted-foreground">POST BY</span>{" "}
										<span itemProp="name">{post.author.toUpperCase()}</span>
									</Link>
								</div>
							</div>

							<h3
								itemProp="headline"
								className="text-foreground font-bold text-sm leading-[20px] group-hover:underline"
							>
								<Link href={`/blog/${post.slug}`}>{post.title}</Link>
							</h3>
						</div>

						{/* Hidden publisher info */}
						<div
							itemProp="publisher"
							itemScope
							itemType="https://schema.org/Organization"
							className="hidden"
						>
							<meta itemProp="name" content="DROZY" />
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Trending;
