import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { touristCarryingLuggage } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";

const Banner = () => {
	return (
		<section className="section-bottom">
			<Carousel className="relative w-full">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<Link href="/">
								<div className="relative h-[550px] w-full rounded-xl overflow-hidden gradient-overlay">
									<Image
										src={touristCarryingLuggage}
										alt="title"
										fill
										placeholder="blur"
										className="absolute object-cover"
									/>

									<div className="absolute bottom-8 left-8 w-[60%] z-20">
										<div className="flex items-center gap-5 mb-5">
											<p className="text-sm font-medium text-background dark:text-white">
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
											<RxDividerVertical className="text-background dark:text-white font-bold rotate-12" />
											<Link
												href="/author"
												className="text-sm text-background dark:text-white font-medium"
											>
												<span className="text-background dark:text-white">
													POST BY
												</span>{" "}
												MAYA PENA
											</Link>
										</div>

										<h2 className="text-background dark:text-white text-[44px] leading-12 font-bold mb-4">
											Safest countries for solo female travelers
										</h2>
										<p className="text-background/80 dark:text-white/80">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Praesentium consequatur ipsum deserunt...
										</p>
									</div>
								</div>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>

				<div className="absolute top-1/2 -translate-y-1/2 w-full px-8">
					<div className="flex items-center justify-between">
						<CarouselPrevious className="h-16 w-10 cursor-pointer rounded-md" />
						<CarouselNext className="h-16 w-10 cursor-pointer rounded-md" />
					</div>
				</div>
			</Carousel>
		</section>
	);
};

export default Banner;
