import { CATEGORIES } from "@/features/home/constants";
import Link from "next/link";

const Categories = () => {
	return (
		<div>
			<p className="text-foreground font-semibold text-base mb-3">Categories</p>

			<ul className="space-y-1">
				{CATEGORIES.map((cat) => (
					<li key={cat.id}>
						<Link href={cat.path} className="link text-[15px]">
							{cat.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
