import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";
import { Separator } from "@/components/ui/separator";
import { touristCarryingLuggage } from "@/lib/assets";
import { siteConfig } from "@/lib/metadata";
import { getAllPosts } from "@/sanity/queries";

const MostPopular = async () => {
	const destinationsPosts = await getAllPosts({
		categorySlug: "destinations",
		quantity: 3,
	});

	const budgetCostsPosts = await getAllPosts({
		categorySlug: "budget-costs",
		quantity: 3,
	});

	const travelTipsPosts = await getAllPosts({
		categorySlug: "travel-tips",
		quantity: 3,
	});

	const safetyPosts = await getAllPosts({
		categorySlug: "safety",
		quantity: 3,
	});

	// Get the first post (featured) and the rest
	const [featuredDestination, ...otherDestinations] = destinationsPosts;
	const [featuredSafety, ...otherSafety] = safetyPosts;

	return (
		<section aria-labelledby="most-popular-heading" className="section-bottom">
			<h2 id="most-popular-heading" className="title mb-6">
				Most Popular
			</h2>

			<div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-10 mb-14">
				{/* DESTINATIONS COLUMN */}
				<div className="w-full lg:border-r border-border lg:pr-3">
					<div className="flex items-center justify-between mb-4">
						<h3 className="text-foreground font-black uppercase text-lg italic">
							Destinations
						</h3>
						<Link
							href="/category/destinations"
							className="text-sm text-foreground font-semibold underline flex items-center gap-1"
							aria-label="View more Destinations posts"
						>
							View More{" "}
							<ArrowRight className="size-3 mt-1" aria-hidden="true" />
						</Link>
					</div>

					<div className="bg-foreground h-0.5 rounded-full w-full mb-2" />

					{/* Featured Article with Image */}
					{featuredDestination && (
						<article itemScope itemType="https://schema.org/BlogPosting">
							<Link
								href={`/blog/${featuredDestination.slug}`}
								itemProp="url"
								className="w-full h-full"
							>
								<figure
									itemProp="image"
									itemScope
									itemType="https://schema.org/ImageObject"
									className="relative w-full h-[300px] rounded-xl overflow-hidden"
								>
									<Image
										src={
											featuredDestination.mainImage?.asset?.url ||
											touristCarryingLuggage
										}
										alt={
											featuredDestination.mainImage?.alt ||
											featuredDestination.title ||
											"Featured destination"
										}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="absolute object-cover transition-all duration-300 hover:scale-110"
										itemProp="url"
										loading="lazy"
									/>
								</figure>
							</Link>

							<div className="flex items-center gap-2 mt-4">
								<time
									dateTime={featuredDestination.publishedAt || ""}
									itemProp="datePublished"
									className="text-[11px] font-semibold text-foreground"
								>
									{featuredDestination.publishedAt
										? format(
												new Date(featuredDestination.publishedAt),
												"MMMM d, yyyy",
											).toUpperCase()
										: ""}
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
										href={`/author/${featuredDestination.author?.slug || "#"}`}
										className="text-[11px] text-foreground font-semibold"
									>
										<span className="text-muted-foreground">POST BY</span>{" "}
										<span itemProp="name" className="font-bold">
											{(
												featuredDestination.author?.name || "Unknown Author"
											).toUpperCase()}
										</span>
									</Link>
								</div>
							</div>

							<h4 itemProp="headline" className="post-title">
								<Link href={`/blog/${featuredDestination.slug}`}>
									{featuredDestination.title || "Untitled Post"}
								</Link>
							</h4>

							{/* Hidden Publisher Schema */}
							<div
								itemProp="publisher"
								itemScope
								itemType="https://schema.org/Organization"
								className="hidden"
							>
								<meta itemProp="name" content={siteConfig.name} />
								<div
									itemProp="logo"
									itemScope
									itemType="https://schema.org/ImageObject"
								>
									<meta itemProp="url" content={`${siteConfig.url}/logo.png`} />
								</div>
							</div>
						</article>
					)}

					{/* Other Destination Articles */}
					{otherDestinations.map((post, index) => (
						<div key={post.slug || index}>
							<Separator className="my-4" aria-hidden="true" />
							<article itemScope itemType="https://schema.org/BlogPosting">
								<div className="flex items-center gap-2">
									<time
										dateTime={post.publishedAt || ""}
										itemProp="datePublished"
										className="text-[11px] font-semibold text-foreground"
									>
										{post.publishedAt
											? format(
													new Date(post.publishedAt),
													"MMMM d, yyyy",
												).toUpperCase()
											: ""}
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
											href={`/author/${post.author?.slug || "#"}`}
											className="text-[11px] text-foreground font-semibold"
										>
											<span className="text-muted-foreground">POST BY</span>{" "}
											<span itemProp="name" className="font-bold">
												{(post.author?.name || "Unknown Author").toUpperCase()}
											</span>
										</Link>
									</div>
								</div>
								<h4 itemProp="headline" className="post-title">
									<Link href={`/blog/${post.slug}`} itemProp="url">
										{post.title || "Untitled Post"}
									</Link>
								</h4>

								<div
									itemProp="publisher"
									itemScope
									itemType="https://schema.org/Organization"
									className="hidden"
								>
									<meta itemProp="name" content={siteConfig.name} />
								</div>
								<meta
									itemProp="image"
									content={
										post.mainImage?.asset?.url ||
										`${siteConfig.url}/default-image.jpg`
									}
								/>
							</article>
						</div>
					))}
				</div>

				{/* TRAVEL TIPS COLUMN */}
				<div className="w-full lg:border-r border-border lg:pr-3">
					<div className="flex items-center justify-between mb-4">
						<h3 className="text-foreground font-black uppercase text-lg italic">
							Travel Tips
						</h3>
						<Link
							href="/category/travel-tips"
							className="text-sm text-foreground font-semibold underline flex items-center gap-1"
							aria-label="View more Travel Tips posts"
						>
							View More{" "}
							<ArrowRight className="size-3 mt-1" aria-hidden="true" />
						</Link>
					</div>

					<div className="bg-foreground h-0.5 rounded-full w-full mb-2" />

					{/* Featured Article with Image */}
					<article itemScope itemType="https://schema.org/BlogPosting">
						<Link
							href="/blog/essential-packing-tips-solo-travelers"
							itemProp="url"
							className="w-full h-full"
						>
							<figure
								itemProp="image"
								itemScope
								itemType="https://schema.org/ImageObject"
								className="relative w-full h-[300px] rounded-xl overflow-hidden"
							>
								<Image
									src={touristCarryingLuggage}
									alt="Essential packing tips for solo travelers"
									fill
									placeholder="blur"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="absolute object-cover transition-all duration-300 hover:scale-110"
									itemProp="url"
									loading="lazy"
								/>
							</figure>
						</Link>

						<div className="flex items-center gap-2 mt-4">
							<time
								dateTime="2025-02-11T10:00:00Z"
								itemProp="datePublished"
								className="text-[11px] font-semibold text-foreground"
							>
								{format(new Date("2025-02-11"), "MMMM d, yyyy").toUpperCase()}
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
									href="/author/maya-pena"
									className="text-[11px] text-foreground font-semibold"
								>
									<span className="text-muted-foreground">POST BY</span>{" "}
									<span itemProp="name">MAYA PENA</span>
								</Link>
							</div>
						</div>

						<h4 itemProp="headline" className="post-title">
							<Link href="/blog/essential-packing-tips-solo-travelers">
								Best places to travel solo female in us
							</Link>
						</h4>

						<div
							itemProp="publisher"
							itemScope
							itemType="https://schema.org/Organization"
							className="hidden"
						>
							<meta itemProp="name" content={siteConfig.name} />
							<div
								itemProp="logo"
								itemScope
								itemType="https://schema.org/ImageObject"
							>
								<meta itemProp="url" content={`${siteConfig.url}/logo.png`} />
							</div>
						</div>
					</article>

					<Separator className="my-4" aria-hidden="true" />

					{/* Article 2 */}
					<article itemScope itemType="https://schema.org/BlogPosting">
						<div className="flex items-center gap-2">
							<time
								dateTime="2025-02-09T10:00:00Z"
								itemProp="datePublished"
								className="text-[11px] font-semibold text-foreground"
							>
								{format(new Date("2025-02-09"), "MMMM d, yyyy").toUpperCase()}
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
									href="/author/maya-pena"
									className="text-[11px] text-foreground font-semibold"
								>
									<span className="text-muted-foreground">POST BY</span>{" "}
									<span itemProp="name">MAYA PENA</span>
								</Link>
							</div>
						</div>
						<h4 itemProp="headline" className="post-title">
							<Link href="/blog/stay-safe-traveling-solo" itemProp="url">
								Best places to travel for solo female travelers
							</Link>
						</h4>

						<div
							itemProp="publisher"
							itemScope
							itemType="https://schema.org/Organization"
							className="hidden"
						>
							<meta itemProp="name" content={siteConfig.name} />
						</div>
						<meta
							itemProp="image"
							content={`${siteConfig.url}/default-image.jpg`}
						/>
					</article>

					<Separator className="my-4" aria-hidden="true" />

					{/* Article 3 */}
					<article itemScope itemType="https://schema.org/BlogPosting">
						<div className="flex items-center gap-2">
							<time
								dateTime="2025-02-07T10:00:00Z"
								itemProp="datePublished"
								className="text-[11px] font-semibold text-foreground"
							>
								{format(new Date("2025-02-07"), "MMMM d, yyyy").toUpperCase()}
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
									href="/author/maya-pena"
									className="text-[11px] text-foreground font-semibold"
								>
									<span className="text-muted-foreground">POST BY</span>{" "}
									<span itemProp="name">MAYA PENA</span>
								</Link>
							</div>
						</div>
						<h4 itemProp="headline" className="post-title">
							<Link href="/blog/budget-travel-tips-solo" itemProp="url">
								Best places to travel for solo female travelers
							</Link>
						</h4>

						<div
							itemProp="publisher"
							itemScope
							itemType="https://schema.org/Organization"
							className="hidden"
						>
							<meta itemProp="name" content={siteConfig.name} />
						</div>
						<meta
							itemProp="image"
							content={`${siteConfig.url}/default-image.jpg`}
						/>
					</article>
				</div>

				{/* BUDGET & COSTS COLUMN */}
				<div className="w-full">
					<div className="flex items-center justify-between mb-4">
						<h3 className="text-foreground font-black uppercase text-lg italic">
							Budget and Costs
						</h3>
						<Link
							href="/category/budget-costs"
							className="text-sm text-foreground font-semibold underline flex items-center gap-1"
							aria-label="View more Safety Guide posts"
						>
							View More{" "}
							<ArrowRight className="size-3 mt-1" aria-hidden="true" />
						</Link>
					</div>

					<div className="bg-foreground h-0.5 rounded-full w-full mb-2" />

					{/* Featured Article with Image */}
					<article itemScope itemType="https://schema.org/BlogPosting">
						<Link
							href="/blog/solo-female-travel-safety-essentials"
							itemProp="url"
							className="w-full h-full"
						>
							<figure
								itemProp="image"
								itemScope
								itemType="https://schema.org/ImageObject"
								className="relative w-full h-[300px] rounded-xl overflow-hidden"
							>
								<Image
									src={touristCarryingLuggage}
									alt="Solo female travel safety essentials"
									fill
									placeholder="blur"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="absolute object-cover transition-all duration-300 hover:scale-110"
									itemProp="url"
									loading="lazy"
								/>
							</figure>
						</Link>

						<div className="flex items-center gap-2 mt-4">
							<time
								dateTime="2025-02-13T10:00:00Z"
								itemProp="datePublished"
								className="text-[11px] font-semibold text-foreground"
							>
								{format(new Date("2025-02-13"), "MMMM d, yyyy").toUpperCase()}
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
									href="/author/maya-pena"
									className="text-[11px] text-foreground font-semibold"
								>
									<span className="text-muted-foreground">POST BY</span>{" "}
									<span itemProp="name">MAYA PENA</span>
								</Link>
							</div>
						</div>

						<h4 itemProp="headline" className="post-title">
							<Link href="/blog/solo-female-travel-safety-essentials">
								Best places to travel solo female in us
							</Link>
						</h4>

						<div
							itemProp="publisher"
							itemScope
							itemType="https://schema.org/Organization"
							className="hidden"
						>
							<meta itemProp="name" content={siteConfig.name} />
							<div
								itemProp="logo"
								itemScope
								itemType="https://schema.org/ImageObject"
							>
								<meta itemProp="url" content={`${siteConfig.url}/logo.png`} />
							</div>
						</div>
					</article>

					<Separator className="my-4" aria-hidden="true" />

					{/* Article 2 */}
					<article itemScope itemType="https://schema.org/BlogPosting">
						<div className="flex items-center gap-2">
							<time
								dateTime="2025-02-06T10:00:00Z"
								itemProp="datePublished"
								className="text-[11px] font-semibold text-foreground"
							>
								{format(new Date("2025-02-06"), "MMMM d, yyyy").toUpperCase()}
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
									href="/author/maya-pena"
									className="text-[11px] text-foreground font-semibold"
								>
									<span className="text-muted-foreground">POST BY</span>{" "}
									<span itemProp="name">MAYA PENA</span>
								</Link>
							</div>
						</div>
						<h4 itemProp="headline" className="post-title">
							<Link
								href="/blog/top-safety-devices-solo-travelers"
								itemProp="url"
							>
								Best places to travel for solo female travelers
							</Link>
						</h4>

						<div
							itemProp="publisher"
							itemScope
							itemType="https://schema.org/Organization"
							className="hidden"
						>
							<meta itemProp="name" content={siteConfig.name} />
						</div>
						<meta
							itemProp="image"
							content={`${siteConfig.url}/default-image.jpg`}
						/>
					</article>

					<Separator className="my-4" aria-hidden="true" />

					{/* Article 3 */}
					<article itemScope itemType="https://schema.org/BlogPosting">
						<div className="flex items-center gap-2">
							<time
								dateTime="2025-02-05T10:00:00Z"
								itemProp="datePublished"
								className="text-[11px] font-semibold text-foreground"
							>
								{format(new Date("2025-02-05"), "MMMM d, yyyy").toUpperCase()}
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
									href="/author/maya-pena"
									className="text-[11px] text-foreground font-semibold"
								>
									<span className="text-muted-foreground">POST BY</span>{" "}
									<span itemProp="name">MAYA PENA</span>
								</Link>
							</div>
						</div>
						<h4 itemProp="headline" className="post-title">
							<Link
								href="/blog/emergency-preparedness-women-travelers"
								itemProp="url"
							>
								Best places to travel for solo female travelers
							</Link>
						</h4>

						<div
							itemProp="publisher"
							itemScope
							itemType="https://schema.org/Organization"
							className="hidden"
						>
							<meta itemProp="name" content={siteConfig.name} />
						</div>
						<meta
							itemProp="image"
							content={`${siteConfig.url}/default-image.jpg`}
						/>
					</article>
				</div>
			</div>

			{/* SAFETY COLUMN */}
			<div className="w-full mb-14">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-foreground font-black uppercase text-lg italic">
						Safety Guide
					</h3>
					<Link
						href="/category/safety"
						className="text-sm text-foreground font-semibold underline flex items-center gap-1"
						aria-label="View more Safety posts"
					>
						View More <ArrowRight className="size-3 mt-1" aria-hidden="true" />
					</Link>
				</div>

				<div className="bg-foreground h-0.5 rounded-full w-full mb-2" />

				<div className="flex lg:flex-row flex-col gap-4">
					{/* Featured Safety Post */}
					{featuredSafety && (
						<article
							className="lg:w-[55%] w-full flex lg:flex-row flex-col lg:items-center items-start gap-4 lg:border-r border-border lg:pr-4"
							itemScope
							itemType="https://schema.org/BlogPosting"
						>
							<Link
								href={`/blog/${featuredSafety.slug}`}
								itemProp="url"
								className="lg:w-auto w-full h-full"
							>
								<figure
									itemProp="image"
									itemScope
									itemType="https://schema.org/ImageObject"
									className="relative lg:w-[340px] w-full lg:h-full h-[180px] rounded-lg overflow-hidden"
								>
									<Image
										src={
											featuredSafety.mainImage?.asset?.url ||
											touristCarryingLuggage
										}
										alt={
											featuredSafety.mainImage?.alt ||
											featuredSafety.title ||
											"Safety guide"
										}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="absolute object-cover transition-all duration-300 hover:scale-110"
										itemProp="url"
										loading="lazy"
									/>
								</figure>
							</Link>

							<div>
								<div className="flex items-center gap-2 lg:mt-4">
									<time
										dateTime={featuredSafety.publishedAt || ""}
										itemProp="datePublished"
										className="text-[11px] font-semibold text-foreground"
									>
										{featuredSafety.publishedAt
											? format(
													new Date(featuredSafety.publishedAt),
													"MMMM d, yyyy",
												).toUpperCase()
											: ""}
									</time>
									<RxDividerVertical
										className="text-foreground font-bold rotate-12"
										aria-hidden="true"
									/>
									{featuredSafety.author && (
										<div
											itemProp="author"
											itemScope
											itemType="https://schema.org/Person"
											className="mb-1"
										>
											<Link
												href={`/author/${featuredSafety.author.slug}`}
												className="text-[11px] text-foreground font-semibold"
											>
												<span className="text-muted-foreground">POST BY</span>{" "}
												<span itemProp="name" className="font-bold">
													{featuredSafety.author.name?.toUpperCase()}
												</span>
											</Link>
										</div>
									)}
								</div>

								<h4 itemProp="headline" className="post-title">
									<Link href={`/blog/${featuredSafety.slug}`}>
										{featuredSafety.title || "Untitled Post"}
									</Link>
								</h4>
							</div>

							<div
								itemProp="publisher"
								itemScope
								itemType="https://schema.org/Organization"
								className="hidden"
							>
								<meta itemProp="name" content={siteConfig.name} />
								<div
									itemProp="logo"
									itemScope
									itemType="https://schema.org/ImageObject"
								>
									<meta itemProp="url" content={`${siteConfig.url}/logo.png`} />
								</div>
							</div>
						</article>
					)}

					{/* Other Safety Posts */}
					<div className="lg:w-[45%] lg:space-y-2 space-y-4">
						{otherSafety.map((post, index) => (
							<article
								key={post.slug || index}
								className={`flex lg:flex-row flex-col lg:items-center items-start gap-4 ${
									index === 0
										? "lg:border-t-0 border-t border-b border-border lg:pb-2 pb-4 lg:pt-0 pt-4"
										: ""
								}`}
								itemScope
								itemType="https://schema.org/BlogPosting"
							>
								<Link
									href={`/blog/${post.slug}`}
									itemProp="url"
									className="lg:w-auto w-full h-full"
								>
									<figure
										itemProp="image"
										itemScope
										itemType="https://schema.org/ImageObject"
										className="relative lg:w-[180px] w-full lg:h-[100px] h-[180px] rounded-lg overflow-hidden"
									>
										<Image
											src={post.mainImage?.asset?.url || touristCarryingLuggage}
											alt={post.mainImage?.alt || post.title || "Safety guide"}
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											className="absolute object-cover transition-all duration-300 hover:scale-110"
											itemProp="url"
											loading="lazy"
										/>
									</figure>
								</Link>

								<div>
									<div className="flex items-center gap-2 lg:mt-4">
										<time
											dateTime={post.publishedAt || ""}
											itemProp="datePublished"
											className="text-[11px] font-semibold text-foreground"
										>
											{post.publishedAt
												? format(
														new Date(post.publishedAt),
														"MMMM d, yyyy",
													).toUpperCase()
												: ""}
										</time>
										<RxDividerVertical
											className="text-foreground font-bold rotate-12"
											aria-hidden="true"
										/>
										{post.author && (
											<div
												itemProp="author"
												itemScope
												itemType="https://schema.org/Person"
												className="mb-1"
											>
												<Link
													href={`/author/${post.author.slug}`}
													className="text-[11px] text-foreground font-semibold"
												>
													<span className="text-muted-foreground">POST BY</span>{" "}
													<span itemProp="name" className="font-bold">
														{post.author.name?.toUpperCase()}
													</span>
												</Link>
											</div>
										)}
									</div>

									<h4 itemProp="headline" className="post-title">
										<Link href={`/blog/${post.slug}`}>
											{post.title || "Untitled Post"}
										</Link>
									</h4>
								</div>

								<div
									itemProp="publisher"
									itemScope
									itemType="https://schema.org/Organization"
									className="hidden"
								>
									<meta itemProp="name" content={siteConfig.name} />
									<div
										itemProp="logo"
										itemScope
										itemType="https://schema.org/ImageObject"
									>
										<meta
											itemProp="url"
											content={`${siteConfig.url}/logo.png`}
										/>
									</div>
								</div>
								<meta
									itemProp="image"
									content={
										post.mainImage?.asset?.url ||
										`${siteConfig.url}/default-image.jpg`
									}
								/>
							</article>
						))}
					</div>
				</div>
			</div>

			{/* COMPARISONS & REVIEWS COLUMN */}
			<div className="w-full">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-foreground font-black uppercase text-lg italic">
						Comparisons and Reviews
					</h3>
					<Link
						href="/category/comparisons-reviews"
						className="text-sm text-foreground font-semibold underline flex items-center gap-1"
						aria-label="View more Destinations posts"
					>
						View More <ArrowRight className="size-3 mt-1" aria-hidden="true" />
					</Link>
				</div>

				<div className="bg-foreground h-0.5 rounded-full w-full mb-2" />

				<div className="flex lg:flex-row flex-col gap-4">
					<article
						className="lg:w-[55%] w-full flex lg:flex-row flex-col lg:items-center items-start gap-4 lg:border-r border-border lg:pr-4"
						itemScope
						itemType="https://schema.org/BlogPosting"
					>
						<Link
							href="/blog/essential-packing-tips-solo-travelers"
							itemProp="url"
							className="lg:w-auto w-full h-full"
						>
							<figure
								itemProp="image"
								itemScope
								itemType="https://schema.org/ImageObject"
								className="relative lg:w-[340px] w-full lg:h-full h-[180px] rounded-lg overflow-hidden"
							>
								<Image
									src={touristCarryingLuggage}
									alt="Essential packing tips for solo travelers"
									fill
									placeholder="blur"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="absolute object-cover transition-all duration-300 hover:scale-110"
									itemProp="url"
									loading="lazy"
								/>
							</figure>
						</Link>

						<div>
							<div className="flex items-center gap-2 lg:mt-4">
								<time
									dateTime="2025-02-11T10:00:00Z"
									itemProp="datePublished"
									className="text-[11px] font-semibold text-foreground"
								>
									{format(new Date("2025-02-11"), "MMMM d, yyyy").toUpperCase()}
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
										href="/author/maya-pena"
										className="text-[11px] text-foreground font-semibold"
									>
										<span className="text-muted-foreground">POST BY</span>{" "}
										<span itemProp="name">MAYA PENA</span>
									</Link>
								</div>
							</div>

							<h4 itemProp="headline" className="post-title">
								<Link href="/blog/essential-packing-tips-solo-travelers">
									Best places to travel solo female in us
								</Link>
							</h4>
						</div>

						<div
							itemProp="publisher"
							itemScope
							itemType="https://schema.org/Organization"
							className="hidden"
						>
							<meta itemProp="name" content={siteConfig.name} />
							<div
								itemProp="logo"
								itemScope
								itemType="https://schema.org/ImageObject"
							>
								<meta itemProp="url" content={`${siteConfig.url}/logo.png`} />
							</div>
						</div>
					</article>

					<div className="lg:w-[45%] lg:space-y-2 space-y-4">
						<article
							className="flex lg:flex-row flex-col lg:items-center items-start gap-4 lg:border-t-0 border-t border-b border-border lg:pb-2 pb-4 lg:pt-0 pt-4"
							itemScope
							itemType="https://schema.org/BlogPosting"
						>
							<Link
								href="/blog/essential-packing-tips-solo-travelers"
								itemProp="url"
								className="lg:w-auto w-full h-full"
							>
								<figure
									itemProp="image"
									itemScope
									itemType="https://schema.org/ImageObject"
									className="relative lg:w-[180px] w-full lg:h-[100px] h-[180px] rounded-lg overflow-hidden"
								>
									<Image
										src={touristCarryingLuggage}
										alt="Essential packing tips for solo travelers"
										fill
										placeholder="blur"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="absolute object-cover transition-all duration-300 hover:scale-110"
										itemProp="url"
										loading="lazy"
									/>
								</figure>
							</Link>

							<div>
								<div className="flex items-center gap-2 lg:mt-4">
									<time
										dateTime="2025-02-11T10:00:00Z"
										itemProp="datePublished"
										className="text-[11px] font-semibold text-foreground"
									>
										{format(
											new Date("2025-02-11"),
											"MMMM d, yyyy",
										).toUpperCase()}
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
											href="/author/maya-pena"
											className="text-[11px] text-foreground font-semibold"
										>
											<span className="text-muted-foreground">POST BY</span>{" "}
											<span itemProp="name">MAYA PENA</span>
										</Link>
									</div>
								</div>

								<h4 itemProp="headline" className="post-title">
									<Link href="/blog/essential-packing-tips-solo-travelers">
										Best places to travel solo female in us
									</Link>
								</h4>
							</div>

							<div
								itemProp="publisher"
								itemScope
								itemType="https://schema.org/Organization"
								className="hidden"
							>
								<meta itemProp="name" content={siteConfig.name} />
								<div
									itemProp="logo"
									itemScope
									itemType="https://schema.org/ImageObject"
								>
									<meta itemProp="url" content={`${siteConfig.url}/logo.png`} />
								</div>
							</div>
						</article>
						<article
							className="flex lg:flex-row flex-col lg:items-center items-start gap-4"
							itemScope
							itemType="https://schema.org/BlogPosting"
						>
							<Link
								href="/blog/essential-packing-tips-solo-travelers"
								itemProp="url"
								className="lg:w-auto w-full h-full"
							>
								<figure
									itemProp="image"
									itemScope
									itemType="https://schema.org/ImageObject"
									className="relative lg:w-[180px] w-full lg:h-[100px] h-[180px] rounded-lg overflow-hidden"
								>
									<Image
										src={touristCarryingLuggage}
										alt="Essential packing tips for solo travelers"
										fill
										placeholder="blur"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="absolute object-cover transition-all duration-300 hover:scale-110"
										itemProp="url"
										loading="lazy"
									/>
								</figure>
							</Link>

							<div>
								<div className="flex items-center gap-2 lg:mt-4">
									<time
										dateTime="2025-02-11T10:00:00Z"
										itemProp="datePublished"
										className="text-[11px] font-semibold text-foreground"
									>
										{format(
											new Date("2025-02-11"),
											"MMMM d, yyyy",
										).toUpperCase()}
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
											href="/author/maya-pena"
											className="text-[11px] text-foreground font-semibold"
										>
											<span className="text-muted-foreground">POST BY</span>{" "}
											<span itemProp="name">MAYA PENA</span>
										</Link>
									</div>
								</div>

								<h4 itemProp="headline" className="post-title">
									<Link href="/blog/essential-packing-tips-solo-travelers">
										Best places to travel solo female in us
									</Link>
								</h4>
							</div>

							<div
								itemProp="publisher"
								itemScope
								itemType="https://schema.org/Organization"
								className="hidden"
							>
								<meta itemProp="name" content={siteConfig.name} />
								<div
									itemProp="logo"
									itemScope
									itemType="https://schema.org/ImageObject"
								>
									<meta itemProp="url" content={`${siteConfig.url}/logo.png`} />
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MostPopular;
