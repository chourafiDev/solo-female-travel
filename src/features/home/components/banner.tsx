import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { getAllPosts } from "@/sanity/queries";
import type { ALL_POSTS_QUERYResult } from "@/sanity/types";

const Banner = async () => {
	const posts = await getAllPosts();

	// ✅ Filter out posts without required data
	const validPosts = posts.filter(
		(
			post,
		): post is NonNullable<ALL_POSTS_QUERYResult[number]> & {
			slug: string;
			title: string;
			mainImage: {
				asset: { url: string; _id: string };
				alt: string | null;
			};
		} =>
			post.slug !== null &&
			post.title !== null &&
			post.mainImage?.asset?.url !== undefined &&
			post.mainImage?.asset?.url !== null,
	);

	if (validPosts.length === 0) {
		return null;
	}

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
					{validPosts.map((post, index) => {
						// ✅ All data is now guaranteed to exist thanks to filter type guard
						const postSlug = post.slug;
						const postTitle = post.title;
						const postExcerpt = post.excerpt || "";
						const postDate = post.publishedAt || new Date().toISOString();
						const authorName = post.author?.name || "Anonymous";
						const authorSlug = post.author?.slug || "#";

						const imageUrl = post.mainImage.asset.url;
						const imageAlt = post.mainImage.alt || postTitle;

						return (
							<CarouselItem key={postSlug}>
								<article
									itemScope
									itemType="https://schema.org/BlogPosting"
									className="relative h-[600px] w-full rounded-xl overflow-hidden gradient-overlay"
								>
									<figure
										itemProp="image"
										itemScope
										itemType="https://schema.org/ImageObject"
									>
										<Image
											src={imageUrl}
											alt={imageAlt}
											fill
											sizes="100vw"
											className="absolute object-cover object-bottom"
											itemProp="url"
											priority={index === 0}
											placeholder="empty"
										/>
									</figure>

									<div className="absolute md:bottom-9 bottom-28 md:left-9 left-6 lg:w-[60%] w-[90%] z-20">
										<div className="flex items-center gap-5 mb-3">
											<time
												dateTime={postDate}
												itemProp="datePublished"
												className="text-sm font-medium text-background dark:text-white"
											>
												{format(
													new Date(postDate),
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
													href={`/author/${authorSlug}`}
													className="text-sm text-background dark:text-white font-medium space-x-1"
												>
													<span className="text-background/80 dark:text-white/80">
														POST BY
													</span>{" "}
													<span className="font-semibold" itemProp="name">
														{authorName.toUpperCase()}
													</span>
												</Link>
											</div>
										</div>

										<Link href={`/blog/${postSlug}`} itemProp="url">
											<h3
												itemProp="headline"
												className="text-background dark:text-white md:text-[44px] text-[38px] lg:leading-tight md:leading-12 leading-10 font-bold mb-4"
											>
												{postTitle}
											</h3>
											{postExcerpt && (
												<p
													itemProp="description"
													className="text-background/80 dark:text-white/80 line-clamp-2"
												>
													{postExcerpt}
												</p>
											)}
										</Link>
									</div>

									{/* Hidden publisher info */}
									<div
										itemProp="publisher"
										itemScope
										itemType="https://schema.org/Organization"
										className="hidden"
									>
										<meta itemProp="name" content="Solo Female Voyage" />
									</div>
								</article>
							</CarouselItem>
						);
					})}
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
