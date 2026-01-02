// components/categories.tsx

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { getCategoriesWithPostCount } from "@/sanity/queries";
import type { GET_CATEGORIES_WITH_COUNT_QUERYResult } from "@/sanity/types";

const Categories = async () => {
	const allCategories = await getCategoriesWithPostCount();

	// ✅ Filter valid categories with image and limit to 6
	const categories = allCategories
		.filter(
			(
				cat,
			): cat is NonNullable<GET_CATEGORIES_WITH_COUNT_QUERYResult[number]> & {
				slug: string;
				title: string;
				image: NonNullable<
					GET_CATEGORIES_WITH_COUNT_QUERYResult[number]["image"]
				>;
			} =>
				cat.slug !== null &&
				cat.title !== null &&
				cat.image !== null &&
				cat.image !== undefined,
		)
		.slice(0, 6);

	// ✅ Don't render if less than 6 categories
	if (categories.length < 6) {
		return null;
	}

	return (
		<section aria-labelledby="categories-heading" className="section-bottom">
			<h2 id="categories-heading" className="title mb-4">
				Women Traveling Alone: Top Categories
			</h2>

			<div className="flex md:flex-row flex-col gap-4">
				{/* Left Column - 2 cards stacked */}
				<div className="md:w-[30%] w-full space-y-4">
					<CategoryCard category={categories[0]} />
					<CategoryCard category={categories[1]} />
				</div>

				{/* Middle Column - 1 tall card */}
				<Link
					href={`/category/${categories[2].slug}`}
					className="block relative md:h-auto h-56 md:w-[30%] w-full rounded-lg overflow-hidden group"
				>
					<div className="md:h-[464px] h-56">
						<Image
							src={urlFor(categories[2].image).url()}
							alt={categories[2].image.alt || categories[2].title}
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
					<CategoryCard category={categories[3]} />

					{/* Bottom 2 cards */}
					<div className="flex md:flex-row flex-col gap-4">
						<CategoryCard category={categories[4]} />
						<CategoryCard category={categories[5]} />
					</div>
				</div>
			</div>
		</section>
	);
};

// ✅ CategoryCard component with urlFor
interface CategoryCardProps {
	category: {
		slug: string;
		title: string;
		count: number;
		image: NonNullable<GET_CATEGORIES_WITH_COUNT_QUERYResult[number]["image"]>;
	};
}

const CategoryCard = ({ category }: CategoryCardProps) => {
	const imageUrl = urlFor(category.image).url();
	const imageAlt = category.image.alt || category.title;

	return (
		<Link
			href={`/category/${category.slug}`}
			className="block relative h-56 w-full rounded-lg overflow-hidden group"
		>
			<Image
				src={imageUrl}
				alt={imageAlt}
				fill
				className="absolute object-cover transition-transform duration-300 group-hover:scale-110"
			/>

			<div className="absolute bottom-4 left-4 z-30">
				<h3 className="text-white font-bold text-lg">{category.title}</h3>
				<p className="text-white text-sm">{category.count} Posts</p>
			</div>

			<div className="absolute z-10 bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent" />
		</Link>
	);
};

export default Categories;
