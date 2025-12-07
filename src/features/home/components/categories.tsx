import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { getCategoriesWithPostCount } from "@/sanity/queries";

const Categories = async () => {
	const categories = await getCategoriesWithPostCount();

	return (
		<section aria-labelledby="categories-heading" className="section-bottom">
			<h2 id="categories-heading" className="title mb-4">
				Top Categories
			</h2>

			<div className="flex md:flex-row flex-col gap-4">
				{/* Left Column - 2 cards stacked */}
				<div className="md:w-[30%] w-full space-y-4">
					<Link
						href={`/category/${categories[0].slug}`}
						className="block relative h-56 w-full rounded-lg overflow-hidden group"
					>
						<Image
							src={urlFor(categories[0].image).url()}
							alt={categories[0].slug}
							fill
							className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
						/>

						<div className="absolute bottom-4 left-4 z-30">
							<h3 className="text-white font-bold text-lg">
								{categories[0].title}
							</h3>
							<p className="text-white text-sm">{categories[0].count} Posts</p>
						</div>

						<div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent" />
					</Link>

					<Link
						href={`/category/${categories[1].slug}`}
						className="block relative h-56 w-full rounded-lg overflow-hidden group"
					>
						<Image
							src={urlFor(categories[1].image).url()}
							alt={categories[1].slug}
							fill
							className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
						/>

						<div className="absolute bottom-4 left-4 z-30">
							<h3 className="text-white font-bold text-lg">
								{categories[1].title}
							</h3>
							<p className="text-white text-sm">{categories[1].count} Posts</p>
						</div>

						<div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent" />
					</Link>
				</div>

				{/* Middle Column - 1 tall card */}
				<Link
					href={`/category/${categories[2].slug}`}
					className="block relative md:h-auto h-56 md:w-[30%] w-full rounded-lg overflow-hidden group"
				>
					<div className="md:h-[464px] h-56">
						<Image
							src={urlFor(categories[2].image).url()}
							alt={categories[2].slug}
							fill
							className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
						/>

						<div className="absolute bottom-4 left-4 z-30">
							<h3 className="text-white font-bold text-lg">
								{categories[2].title}
							</h3>
							<p className="text-white text-sm">{categories[2].count} Posts</p>
						</div>

						<div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent" />
					</div>
				</Link>

				{/* Right Column - 1 card on top, 2 cards on bottom */}
				<div className="md:w-[40%] w-full space-y-4">
					<Link
						href={`/category/${categories[3].slug}`}
						className="block relative h-56 w-full rounded-lg overflow-hidden group"
					>
						<Image
							src={urlFor(categories[3].image).url()}
							alt={categories[3].slug}
							fill
							className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
						/>

						<div className="absolute bottom-4 left-4 z-30">
							<h3 className="text-white font-bold text-lg">
								{categories[3].title}
							</h3>
							<p className="text-white text-sm">{categories[3].count} Posts</p>
						</div>

						<div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent" />
					</Link>

					{/* Bottom 2 cards - FIXED HEIGHT */}
					<div className="flex md:flex-row flex-col gap-4">
						<Link
							href={`/category/${categories[4].slug}`}
							className="block relative md:h-56 h-56 w-full rounded-lg overflow-hidden group"
						>
							<Image
								src={urlFor(categories[4].image).url()}
								alt={categories[4].slug}
								fill
								className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
							/>

							<div className="absolute bottom-4 left-4 z-30">
								<h3 className="text-white font-bold text-lg">
									{categories[4].title}
								</h3>
								<p className="text-white text-sm">
									{categories[4].count} Posts
								</p>
							</div>

							<div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent" />
						</Link>

						<Link
							href={`/category/${categories[5].slug}`}
							className="block relative md:h-56 h-56 w-full rounded-lg overflow-hidden group"
						>
							<Image
								src={urlFor(categories[5].image).url()}
								alt={categories[5].slug}
								fill
								className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
							/>

							<div className="absolute bottom-4 left-4 z-30">
								<h3 className="text-white font-bold text-lg">
									{categories[5].title}
								</h3>
								<p className="text-white text-sm">
									{categories[5].count} Posts
								</p>
							</div>

							<div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Categories;
