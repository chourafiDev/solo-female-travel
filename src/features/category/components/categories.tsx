import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getCategoriesWithPostCount } from "@/sanity/queries";

const CATEGORIES = [
	{
		href: "/category/destinations",
		title: "Destinations",
		total: 10,
	},
	{
		href: "/category/travel-tips",
		title: "Travel Tips",
		total: 10,
	},
	{
		href: "/category/safety",
		title: "Safety Guide",
		total: 10,
	},
	{
		href: "/category/budget-travel",
		title: "Budget Travel",
		total: 10,
	},
	{
		href: "/category/tours",
		title: "Tours & Experiences",
		total: 10,
	},
	{
		href: "/category/packing",
		title: "Packing Guides",
		total: 10,
	},
];

const Categories = async () => {
	const allCategories = await getCategoriesWithPostCount();

	return (
		<div>
			<p className="text-foreground font-bold text-lg mb-3">Categories</p>

			<ul className="space-y-2.5">
				{allCategories.map((cat, index) => (
					<li className="space-y-2.5" key={cat.slug}>
						<Link
							href={`/category/${cat.slug}`}
							className="group flex items-center justify-between"
						>
							<p className="font-semibold text-sm text-foreground">
								{cat.title}
							</p>
							<p className="size-8 flex items-center justify-center rounded-full text-xs font-medium text-muted-foreground group-hover:bg-foreground group-hover:text-background duration-300 ease-linear border border-muted-foreground/30">
								{cat.count}
							</p>
						</Link>
						{index < CATEGORIES.length - 1 && <Separator />}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
