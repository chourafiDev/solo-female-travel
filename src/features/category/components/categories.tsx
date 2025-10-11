import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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

const Categories = () => {
	return (
		<div>
			<p className="text-foreground font-bold text-lg mb-3">Categories</p>

			<ul className="space-y-2.5">
				{CATEGORIES.map((cat, index) => (
					<li className="space-y-2.5" key={cat.href}>
						<Link href="/" className="group flex items-center justify-between">
							<p className="font-semibold text-sm text-foreground">
								{cat.title}
							</p>
							<p className="size-8 flex items-center justify-center rounded-full text-xs font-medium text-muted-foreground group-hover:bg-foreground group-hover:text-background duration-300 ease-linear border border-muted-foreground/30">
								{cat.total}
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
