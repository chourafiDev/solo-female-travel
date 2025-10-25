import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

const Breadcrumbs = () => {
	return (
		<nav
			aria-label="Breadcrumb"
			className="custom-container bg-soft-linen py-3 border-b"
		>
			<ol
				itemScope
				itemType="https://schema.org/BreadcrumbList"
				className="flex items-center gap-1.5 font-medium text-foreground text-xs"
			>
				<li
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
				>
					<Link href="/" itemProp="item">
						<span itemProp="name">Home</span>
					</Link>
					<meta itemProp="position" content="1" />
				</li>
				<li>
					<IoChevronForwardOutline className="size-3.5" aria-hidden="true" />
				</li>
				<li
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
				>
					<Link href="/category/lifestyle" itemProp="item">
						<span itemProp="name">Lifestyle</span>
					</Link>
					<meta itemProp="position" content="2" />
				</li>
				<li>
					<IoChevronForwardOutline className="size-3.5" aria-hidden="true" />
				</li>
				<li
					itemProp="itemListElement"
					itemScope
					itemType="https://schema.org/ListItem"
					className="text-foreground/40"
				>
					<span itemProp="name">
						10 Simple Habits To Build A More Joyful And Fulfilling Life
					</span>
					<meta itemProp="position" content="3" />
				</li>
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
