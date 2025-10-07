import { Separator } from "@/components/ui/separator";
import { touristCarryingLuggage } from "@/lib/assets";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";

const LatestPosts = () => {
	return (
		<section className="section-bottom">
			<div className="flex items-center justify-between mb-4">
				<h2 className="title">Latest Posts</h2>
				<Link
					href="/blog"
					className="text-foreground flex items-center gap-1 text-[15px] font-medium"
				>
					Explore Blog Posts <ChevronRight className="size-4" />
				</Link>
			</div>

			<div
				className="grid gap-3"
				style={{ gridTemplateColumns: "1fr 1px 1fr 1px 1fr 1px 1fr 1px 1fr" }}
			>
				<article>
					<Link href="" className="w-full h-full">
						<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
							<Image
								src={touristCarryingLuggage}
								alt=""
								fill
								placeholder="blur"
								className="absolute object-cover transition-all duration-300 hover:scale-110"
							/>

							<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
								<p className="text-[11px] text-background font-medium uppercase">
									Travel
								</p>
							</div>
						</div>
					</Link>

					<div className="flex items-center gap-0 mt-4 mb-1">
						<p className="text-[10px] font-semibold text-foreground">
							{/* <time
									dateTime={format(
										new Date(posts[0].publishedAt),
										"MMMM d, yyyy",
									)}
								>
									{format(new Date(posts[0].publishedAt), "MMMM d, yyyy")}
								</time> */}
							FEBRUARY 12, 2025
						</p>
						<RxDividerVertical className="text-foreground font-bold rotate-12" />
						<Link
							href="/author"
							className="text-[10px] text-foreground font-semibold"
						>
							<span className="text-muted-foreground">POST BY</span> MAYA PENA
						</Link>
					</div>

					<h3 className="post-title text-lg">
						<Link href="">Best places to travel solo female in us</Link>
					</h3>
				</article>

				<Separator orientation="vertical" className="h-full" />

				<article>
					<Link href="" className="w-full h-full">
						<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
							<Image
								src={touristCarryingLuggage}
								alt=""
								fill
								placeholder="blur"
								className="absolute object-cover transition-all duration-300 hover:scale-110"
							/>

							<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
								<p className="text-[11px] text-background font-medium uppercase">
									Travel
								</p>
							</div>
						</div>
					</Link>

					<div className="flex items-center gap-0 mt-4 mb-1">
						<p className="text-[10px] font-semibold text-foreground">
							{/* <time
									dateTime={format(
										new Date(posts[0].publishedAt),
										"MMMM d, yyyy",
									)}
								>
									{format(new Date(posts[0].publishedAt), "MMMM d, yyyy")}
								</time> */}
							FEBRUARY 12, 2025
						</p>
						<RxDividerVertical className="text-foreground font-bold rotate-12" />
						<Link
							href="/author"
							className="text-[10px] text-foreground font-semibold"
						>
							<span className="text-muted-foreground">POST BY</span> MAYA PENA
						</Link>
					</div>

					<h3 className="post-title text-lg">
						<Link href="">Best places to travel solo female in us</Link>
					</h3>
				</article>

				<Separator orientation="vertical" className="h-full" />

				<article>
					<Link href="" className="w-full h-full">
						<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
							<Image
								src={touristCarryingLuggage}
								alt=""
								fill
								placeholder="blur"
								className="absolute object-cover transition-all duration-300 hover:scale-110"
							/>

							<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
								<p className="text-[11px] text-background font-medium uppercase">
									Travel
								</p>
							</div>
						</div>
					</Link>

					<div className="flex items-center gap-0 mt-4 mb-1">
						<p className="text-[10px] font-semibold text-foreground">
							{/* <time
									dateTime={format(
										new Date(posts[0].publishedAt),
										"MMMM d, yyyy",
									)}
								>
									{format(new Date(posts[0].publishedAt), "MMMM d, yyyy")}
								</time> */}
							FEBRUARY 12, 2025
						</p>
						<RxDividerVertical className="text-foreground font-bold rotate-12" />
						<Link
							href="/author"
							className="text-[10px] text-foreground font-semibold"
						>
							<span className="text-muted-foreground">POST BY</span> MAYA PENA
						</Link>
					</div>

					<h3 className="post-title text-lg">
						<Link href="">Best places to travel solo female in us</Link>
					</h3>
				</article>

				<Separator orientation="vertical" className="h-full" />

				<article>
					<Link href="" className="w-full h-full">
						<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
							<Image
								src={touristCarryingLuggage}
								alt=""
								fill
								placeholder="blur"
								className="absolute object-cover transition-all duration-300 hover:scale-110"
							/>

							<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
								<p className="text-[11px] text-background font-medium uppercase">
									Travel
								</p>
							</div>
						</div>
					</Link>

					<div className="flex items-center gap-0 mt-4 mb-1">
						<p className="text-[10px] font-semibold text-foreground">
							{/* <time
									dateTime={format(
										new Date(posts[0].publishedAt),
										"MMMM d, yyyy",
									)}
								>
									{format(new Date(posts[0].publishedAt), "MMMM d, yyyy")}
								</time> */}
							FEBRUARY 12, 2025
						</p>
						<RxDividerVertical className="text-foreground font-bold rotate-12" />
						<Link
							href="/author"
							className="text-[10px] text-foreground font-semibold"
						>
							<span className="text-muted-foreground">POST BY</span> MAYA PENA
						</Link>
					</div>

					<h3 className="post-title text-lg">
						<Link href="">Best places to travel solo female in us</Link>
					</h3>
				</article>

				<Separator orientation="vertical" className="h-full" />

				<article>
					<Link href="" className="w-full h-full">
						<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
							<Image
								src={touristCarryingLuggage}
								alt=""
								fill
								placeholder="blur"
								className="absolute object-cover transition-all duration-300 hover:scale-110"
							/>

							<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
								<p className="text-[11px] text-background font-medium uppercase">
									Travel
								</p>
							</div>
						</div>
					</Link>

					<div className="flex items-center gap-0 mt-4 mb-1">
						<p className="text-[10px] font-semibold text-foreground">
							{/* <time
									dateTime={format(
										new Date(posts[0].publishedAt),
										"MMMM d, yyyy",
									)}
								>
									{format(new Date(posts[0].publishedAt), "MMMM d, yyyy")}
								</time> */}
							FEBRUARY 12, 2025
						</p>
						<RxDividerVertical className="text-foreground font-bold rotate-12" />
						<Link
							href="/author"
							className="text-[10px] text-foreground font-semibold"
						>
							<span className="text-muted-foreground">POST BY</span> MAYA PENA
						</Link>
					</div>

					<h3 className="post-title text-lg">
						<Link href="">Best places to travel solo female in us</Link>
					</h3>
				</article>
			</div>
		</section>
	);
};

export default LatestPosts;
