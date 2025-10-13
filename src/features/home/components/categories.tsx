import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "../constants";

const Categories = () => {
	return (
		<section aria-labelledby="categories-heading" className="section-bottom">
			<Carousel className="w-full">
				<div className="flex items-center justify-between mb-4">
					<h2 id="categories-heading" className="title">
						Top Categories
					</h2>

					<div className="space-x-1">
						<CarouselPrevious
							variant={"default"}
							aria-label="Previous categories"
							className="disabled:bg-background disabled:text-foreground disabled:opacity-100 disabled:border cursor-pointer"
						/>
						<CarouselNext
							variant={"default"}
							aria-label="Next categories"
							className="disabled:bg-background disabled:text-foreground disabled:opacity-100 disabled:border cursor-pointer"
						/>
					</div>
				</div>
				<CarouselContent>
					{CATEGORIES.map((cat) => (
						<CarouselItem key={cat.id} className="md:basis-1/2 lg:basis-1/5">
							<Link href={`${cat.path}`}>
								<Card className="p-0 hover:border-foreground hover:border-[1.2px] duration-200 ease-linear">
									<CardContent className="flex flex-col items-start justify-center gap-3 p-3">
										<div className="relative h-36 w-full rounded-lg overflow-hidden">
											<Image
												src={cat.image}
												alt={cat.title}
												fill
												sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
												className="absolute object-cover"
												loading="lazy"
											/>
										</div>

										<div className="space-y-1">
											<h3 className="text-foreground font-bold text-sm">
												{cat.title}
											</h3>
											<p className="text-muted-foreground/80 text-xs">
												{cat.posts}
											</p>
										</div>
									</CardContent>
								</Card>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};

export default Categories;
