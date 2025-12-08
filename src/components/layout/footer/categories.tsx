import Link from "next/link";
import { getAllCategories } from "@/sanity/queries";

const Categories = async () => {
	const categories = await getAllCategories();
	return (
		<div>
			<p className="text-foreground font-extrabold text-base mb-3">
				Categories
			</p>

			<ul className="space-y-1 font-medium">
				{categories.map((cat) => (
					<li key={cat.slug}>
						<Link href={`/category/${cat.slug}`} className="link text-sm">
							{cat.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
