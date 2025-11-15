import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { touristCarryingLuggage } from "@/lib/assets";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";

interface BannerPost {
	id: number;
	title: string;
	slug: string;
	excerpt: string;
	image: string;
	date: string;
	author: string;
	authorSlug: string;
}

const Banner = () => {
	const featuredPosts: BannerPost[] = [
		{
			id: 1,
			title: "Safest countries for solo female travelers",
			slug: "safest-countries-solo-female-travelers",
			excerpt:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur ipsum deserunt...",
			image: "https://...",
			date: "2025-02-12T10:00:00Z",
			author: "Maya Pena",
			authorSlug: "maya-pena",
		},
		{
			id: 2,
			title: "Safest countries for solo female travelers",
			slug: "safest-countries-solo-female-travelers",
			excerpt:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur ipsum deserunt...",
			image: "https://...",
			date: "2025-02-12T10:00:00Z",
			author: "Maya Pena",
			authorSlug: "maya-pena",
		},
	];

	return (
		<section aria-labelledby="featured-heading" className="section-bottom">
			<h2 id="featured-heading" className="sr-only">
				Featured Articles
			</h2>

			<Carousel
				className="relative w-full"
				opts={{
					loop: true,
				}}
			>
				<CarouselContent>
					{featuredPosts.map((post, index) => (
						<CarouselItem key={post.id}>
							<article
								itemScope
								itemType="https://schema.org/BlogPosting"
								className="relative h-[550px] w-full rounded-xl overflow-hidden gradient-overlay"
							>
								<figure
									itemProp="image"
									itemScope
									itemType="https://schema.org/ImageObject"
								>
									<Image
										src={touristCarryingLuggage}
										alt={post.title}
										fill
										placeholder="blur"
										sizes="100vw"
										className="absolute object-cover"
										itemProp="url"
										priority={index === 0}
									/>
								</figure>

								<div className="absolute md:bottom-9 bottom-28 md:left-9 left-6 lg:w-[60%] w-[90%] z-20">
									<div className="flex items-center gap-5 mb-3">
										<time
											dateTime={post.date}
											itemProp="datePublished"
											className="text-sm font-medium text-background dark:text-white"
										>
											{format(
												new Date(post.date),
												"MMMM d, yyyy",
											).toUpperCase()}
										</time>
										<RxDividerVertical
											className="text-background dark:text-white font-bold rotate-12"
											aria-hidden="true"
										/>
										<div
											itemProp="author"
											itemScope
											itemType="https://schema.org/Person"
										>
											<Link
												href={`/author/${post.authorSlug}`}
												className="text-sm text-background dark:text-white font-medium space-x-1"
											>
												<span className="text-background/80 dark:text-white/80">POST BY</span>{" "}
												<span className="font-semibold" itemProp="name">{post.author.toUpperCase()}</span>
											</Link>
										</div>
									</div>

									<Link href={`/blog/${post.slug}`} itemProp="url">
										<h3
											itemProp="headline"
											className="text-background dark:text-white md:text-[44px] text-[38px] lg:leading-tight md:leading-12 leading-10 font-bold mb-4"
										>
											{post.title}
										</h3>
										<p
											itemProp="description"
											className="text-background/80 dark:text-white/80"
										>
											{post.excerpt}
										</p>
									</Link>
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
						</CarouselItem>
					))}
				</CarouselContent>

				<div className="absolute md:top-1/2 top-[500px] -translate-y-1/2 w-full md:px-8 px-4">
					<div className="flex items-center justify-between">
						<CarouselPrevious
							className="md:h-16 h-12 md:w-10 w-12 cursor-pointer md:rounded-md rounded-full bg-white text-black"
							aria-label="Previous featured article"
						/>
						<CarouselNext
							className="md:h-16 h-12 md:w-10 w-12 cursor-pointer md:rounded-md rounded-full bg-white text-black"
							aria-label="Next featured article"
						/>
					</div>
				</div>
			</Carousel>
		</section>
	);
};

export default Banner;
