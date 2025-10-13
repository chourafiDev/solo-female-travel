import { Separator } from "@/components/ui/separator";
import { touristCarryingLuggage } from "@/lib/assets";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";

const RelatedPosts = () => {
	return (
		<section aria-labelledby="related-posts-heading" className="mb-16">
			<h2
				id="related-posts-heading"
				className="text-foreground font-bold text-[22px] mb-4"
			>
				Related Posts
			</h2>

			<div
				className="grid gap-3"
				style={{ gridTemplateColumns: "1fr 1px 1fr 1px 1fr 1px 1fr" }}
			>
				<article itemScope itemType="https://schema.org/BlogPosting">
					<Link href="/blog/related-post-1" itemProp="url">
						<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
							<Image
								src={touristCarryingLuggage}
								alt="Best places to travel solo female in us"
								fill
								className="absolute object-cover transition-all duration-300 hover:scale-110"
								itemProp="url"
								placeholder="blur"
								loading="lazy"
							/>

							<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
								<p className="text-[11px] text-white font-semibold uppercase">
									Travel
								</p>
							</div>
						</div>
					</Link>

					<div className="flex items-center gap-0 mt-4 mb-1">
						<time
							dateTime="2022-02-22T10:00:00Z"
							itemProp="datePublished"
							className="text-[10px] font-semibold text-foreground"
						>
							{format(new Date("2022-02-22"), "MMMM d, yyyy")}
						</time>
						<RxDividerVertical
							className="text-foreground font-bold rotate-12"
							aria-hidden="true"
						/>
						<div
							itemProp="author"
							itemScope
							itemType="https://schema.org/Person"
						>
							<Link
								href="/author/maya-pena"
								className="text-[10px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span>{" "}
								<span itemProp="name">MAYA PENA</span>
							</Link>
						</div>
					</div>

					<h3 itemProp="headline" className="post-title leading-6 text-lg">
						<Link href="/blog/related-post-1">
							Best places to travel solo female in us
						</Link>
					</h3>
				</article>

				<Separator
					orientation="vertical"
					className="h-full"
					aria-hidden="true"
				/>

				<article itemScope itemType="https://schema.org/BlogPosting">
					<Link href="/blog/related-post-1" itemProp="url">
						<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
							<Image
								src={touristCarryingLuggage}
								alt="Best places to travel solo female in us"
								fill
								className="absolute object-cover transition-all duration-300 hover:scale-110"
								itemProp="url"
								placeholder="blur"
								loading="lazy"
							/>

							<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
								<p className="text-[11px] text-white font-semibold uppercase">
									Travel
								</p>
							</div>
						</div>
					</Link>

					<div className="flex items-center gap-0 mt-4 mb-1">
						<time
							dateTime="2022-02-22T10:00:00Z"
							itemProp="datePublished"
							className="text-[10px] font-semibold text-foreground"
						>
							{format(new Date("2022-02-22"), "MMMM d, yyyy")}
						</time>
						<RxDividerVertical
							className="text-foreground font-bold rotate-12"
							aria-hidden="true"
						/>
						<div
							itemProp="author"
							itemScope
							itemType="https://schema.org/Person"
						>
							<Link
								href="/author/maya-pena"
								className="text-[10px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span>{" "}
								<span itemProp="name">MAYA PENA</span>
							</Link>
						</div>
					</div>

					<h3 itemProp="headline" className="post-title leading-6 text-lg">
						<Link href="/blog/related-post-1">
							Best places to travel solo female in us
						</Link>
					</h3>
				</article>

				<Separator
					orientation="vertical"
					className="h-full"
					aria-hidden="true"
				/>

				<article itemScope itemType="https://schema.org/BlogPosting">
					<Link href="/blog/related-post-1" itemProp="url">
						<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
							<Image
								src={touristCarryingLuggage}
								alt="Best places to travel solo female in us"
								fill
								className="absolute object-cover transition-all duration-300 hover:scale-110"
								itemProp="url"
								placeholder="blur"
								loading="lazy"
							/>

							<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
								<p className="text-[11px] text-white font-semibold uppercase">
									Travel
								</p>
							</div>
						</div>
					</Link>

					<div className="flex items-center gap-0 mt-4 mb-1">
						<time
							dateTime="2022-02-22T10:00:00Z"
							itemProp="datePublished"
							className="text-[10px] font-semibold text-foreground"
						>
							{format(new Date("2022-02-22"), "MMMM d, yyyy")}
						</time>
						<RxDividerVertical
							className="text-foreground font-bold rotate-12"
							aria-hidden="true"
						/>
						<div
							itemProp="author"
							itemScope
							itemType="https://schema.org/Person"
						>
							<Link
								href="/author/maya-pena"
								className="text-[10px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span>{" "}
								<span itemProp="name">MAYA PENA</span>
							</Link>
						</div>
					</div>

					<h3 itemProp="headline" className="post-title leading-6 text-lg">
						<Link href="/blog/related-post-1">
							Best places to travel solo female in us
						</Link>
					</h3>
				</article>

				<Separator
					orientation="vertical"
					className="h-full"
					aria-hidden="true"
				/>

				<article itemScope itemType="https://schema.org/BlogPosting">
					<Link href="/blog/related-post-1" itemProp="url">
						<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
							<Image
								src={touristCarryingLuggage}
								alt="Best places to travel solo female in us"
								fill
								className="absolute object-cover transition-all duration-300 hover:scale-110"
								itemProp="url"
								placeholder="blur"
								loading="lazy"
							/>

							<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
								<p className="text-[11px] text-white font-semibold uppercase">
									Travel
								</p>
							</div>
						</div>
					</Link>

					<div className="flex items-center gap-0 mt-4 mb-1">
						<time
							dateTime="2022-02-22T10:00:00Z"
							itemProp="datePublished"
							className="text-[10px] font-semibold text-foreground"
						>
							{format(new Date("2022-02-22"), "MMMM d, yyyy")}
						</time>
						<RxDividerVertical
							className="text-foreground font-bold rotate-12"
							aria-hidden="true"
						/>
						<div
							itemProp="author"
							itemScope
							itemType="https://schema.org/Person"
						>
							<Link
								href="/author/maya-pena"
								className="text-[10px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span>{" "}
								<span itemProp="name">MAYA PENA</span>
							</Link>
						</div>
					</div>

					<h3 itemProp="headline" className="post-title leading-6 text-lg">
						<Link href="/blog/related-post-1">
							Best places to travel solo female in us
						</Link>
					</h3>
				</article>
			</div>
		</section>
	);
};

export default RelatedPosts;
