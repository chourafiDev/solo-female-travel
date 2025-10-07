import { Separator } from "@/components/ui/separator";
import { touristCarryingLuggage } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";

const Trending = () => {
	return (
		<section
			className="grid gap-2 mb-10 mt-6"
			style={{ gridTemplateColumns: "1fr 1px 1fr 1px 1fr 1px 1fr" }}
		>
			<article className="w-full flex items-center gap-2">
				<Link href="">
					<div className="relative w-[90px] h-[70px] rounded-lg overflow-hidden">
						<Image
							src={touristCarryingLuggage}
							alt=""
							fill
							placeholder="blur"
							className="absolute object-cover transition-all duration-300 hover:scale-110"
						/>
					</div>
				</Link>

				<div>
					<div className="flex items-center gap-0 mb-1">
						<p className="text-[9px] font-bold text-foreground">
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
						<Link href="/author" className="text-[9px] text-bold font-semibold">
							<span className="text-muted-foreground">POST BY</span> MAYA PENA
						</Link>
					</div>

					<h3 className="text-foreground font-medium text-[15px] leading-[20px] hover:underline">
						<Link href="">Best places to travel solo female in us</Link>
					</h3>
				</div>
			</article>

			<Separator orientation="vertical" className="h-full" />

			<article className="w-full flex items-center gap-2">
				<Link href="">
					<div className="relative w-[90px] h-[70px] rounded-lg overflow-hidden">
						<Image
							src={touristCarryingLuggage}
							alt=""
							fill
							placeholder="blur"
							className="absolute object-cover transition-all duration-300 hover:scale-110"
						/>
					</div>
				</Link>

				<div>
					<div className="flex items-center gap-0 mb-1">
						<p className="text-[9px] font-semibold text-foreground">
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
							className="text-[9px] text-foreground font-semibold"
						>
							<span className="text-muted-foreground">POST BY</span> MAYA PENA
						</Link>
					</div>

					<h3 className="text-foreground font-medium text-[15px] leading-[20px] hover:underline">
						<Link href="">Best places to travel solo female in us</Link>
					</h3>
				</div>
			</article>

			<Separator orientation="vertical" className="h-full" />

			<article className="w-full flex items-center gap-2">
				<Link href="">
					<div className="relative w-[90px] h-[70px] rounded-lg overflow-hidden">
						<Image
							src={touristCarryingLuggage}
							alt=""
							fill
							placeholder="blur"
							className="absolute object-cover transition-all duration-300 hover:scale-110"
						/>
					</div>
				</Link>

				<div>
					<div className="flex items-center gap-0 mb-1">
						<p className="text-[9px] font-semibold text-foreground">
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
							className="text-[9px] text-foreground font-semibold"
						>
							<span className="text-muted-foreground">POST BY</span> MAYA PENA
						</Link>
					</div>

					<h3 className="text-foreground font-medium text-[15px] leading-[20px] hover:underline">
						<Link href="">Best places to travel solo female in us</Link>
					</h3>
				</div>
			</article>

			<Separator orientation="vertical" className="h-full" />

			<article className="w-full flex items-center gap-2">
				<Link href="">
					<div className="relative w-[90px] h-[70px] rounded-lg overflow-hidden">
						<Image
							src={touristCarryingLuggage}
							alt=""
							fill
							placeholder="blur"
							className="absolute object-cover transition-all duration-300 hover:scale-110"
						/>
					</div>
				</Link>

				<div>
					<div className="flex items-center gap-0 mb-1">
						<p className="text-[9px] font-semibold text-foreground">
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
							className="text-[9px] text-foreground font-semibold"
						>
							<span className="text-muted-foreground">POST BY</span> MAYA PENA
						</Link>
					</div>

					<h3 className="text-foreground font-medium text-[15px] leading-[20px] hover:underline">
						<Link href="">Best places to travel solo female in us</Link>
					</h3>
				</div>
			</article>
		</section>
	);
};

export default Trending;
