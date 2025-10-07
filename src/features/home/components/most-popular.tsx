import { Separator } from "@/components/ui/separator";
import { touristCarryingLuggage } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";

const MostPopular = () => {
	return (
		<section className="section-bottom">
			<h2 className="title mb-4">Most Popular</h2>

			<div
				className="grid gap-4"
				style={{ gridTemplateColumns: "1fr 1px 1fr 1px 1fr" }}
			>
				<div className="w-full">
					<article>
						<Link href="" className="w-full h-full">
							<div className="relative w-full h-[300px] rounded-xl overflow-hidden">
								<Image
									src={touristCarryingLuggage}
									alt=""
									fill
									placeholder="blur"
									className="absolute object-cover transition-all duration-300 hover:scale-110"
								/>
							</div>
						</Link>

						<div className="flex items-center gap-2 mt-4 mb-1">
							<p className="text-[11px] font-semibold text-foreground">
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
								className="text-[11px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span> MAYA PENA
							</Link>
						</div>

						<h3 className="post-title">
							<Link href="">Best places to travel solo female in us</Link>
						</h3>
					</article>
					<Separator className="my-4" />
					<article>
						<div className="flex items-center gap-2 mb-1">
							<p className="text-[11px] font-semibold text-foreground">
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
								className="text-[11px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span> MAYA PENA
							</Link>
						</div>
						<h3 className="post-title">
							<Link href="">
								Best places to travel for solo female travelers
							</Link>
						</h3>
					</article>
					<Separator className="my-4" />
					<article>
						<div className="flex items-center gap-2 mb-1">
							<p className="text-[11px] font-semibold text-foreground">
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
								className="text-[11px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span> MAYA PENA
							</Link>
						</div>
						<h3 className="post-title">
							<Link href="">
								Best places to travel for solo female travelers
							</Link>
						</h3>
					</article>
				</div>

				<Separator orientation="vertical" className="h-full" />

				<div className="w-full">
					<article>
						<Link href="" className="w-full h-full">
							<div className="relative w-full h-[300px] rounded-xl overflow-hidden">
								<Image
									src={touristCarryingLuggage}
									alt=""
									fill
									placeholder="blur"
									className="absolute object-cover transition-all duration-300 hover:scale-110"
								/>
							</div>
						</Link>

						<div className="flex items-center gap-2 mt-4 mb-1">
							<p className="text-[11px] font-semibold text-foreground">
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
								className="text-[11px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span> MAYA PENA
							</Link>
						</div>

						<h3 className="post-title">
							<Link href="">Best places to travel solo female in us</Link>
						</h3>
					</article>
					<Separator className="my-4" />
					<article>
						<div className="flex items-center gap-2 mb-1">
							<p className="text-[11px] font-semibold text-foreground">
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
								className="text-[11px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span> MAYA PENA
							</Link>
						</div>
						<h3 className="post-title">
							<Link href="">
								Best places to travel for solo female travelers
							</Link>
						</h3>
					</article>
					<Separator className="my-4" />
					<article>
						<div className="flex items-center gap-2 mb-1">
							<p className="text-[11px] font-semibold text-foreground">
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
								className="text-[11px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span> MAYA PENA
							</Link>
						</div>
						<h3 className="post-title">
							<Link href="">
								Best places to travel for solo female travelers
							</Link>
						</h3>
					</article>
				</div>

				<Separator orientation="vertical" />

				<div className="w-full">
					<article>
						<Link href="" className="w-full h-full">
							<div className="relative w-full h-[300px] rounded-xl overflow-hidden">
								<Image
									src={touristCarryingLuggage}
									alt=""
									fill
									placeholder="blur"
									className="absolute object-cover transition-all duration-300 hover:scale-110"
								/>
							</div>
						</Link>

						<div className="flex items-center gap-2 mt-4 mb-1">
							<p className="text-[11px] font-semibold text-foreground">
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
								className="text-[11px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span> MAYA PENA
							</Link>
						</div>

						<h3 className="post-title">
							<Link href="">Best places to travel solo female in us</Link>
						</h3>
					</article>
					<Separator className="my-4" />
					<article>
						<div className="flex items-center gap-2 mb-1">
							<p className="text-[11px] font-semibold text-foreground">
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
								className="text-[11px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span> MAYA PENA
							</Link>
						</div>
						<h3 className="post-title">
							<Link href="">
								Best places to travel for solo female travelers
							</Link>
						</h3>
					</article>
					<Separator className="my-4" />
					<article>
						<div className="flex items-center gap-2 mb-1">
							<p className="text-[11px] font-semibold text-foreground">
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
								className="text-[11px] text-foreground font-semibold"
							>
								<span className="text-muted-foreground">POST BY</span> MAYA PENA
							</Link>
						</div>
						<h3 className="post-title">
							<Link href="">
								Best places to travel for solo female travelers
							</Link>
						</h3>
					</article>
				</div>
			</div>
		</section>
	);
};

export default MostPopular;
