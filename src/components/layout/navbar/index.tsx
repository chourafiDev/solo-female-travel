import { getAllCategories } from "@/sanity/queries";
import type { ALL_CATEGORIES_QUERYResult } from "@/sanity/types";
import CallActions from "./call-actions";
import DesktopMenu from "./desktop-menu";
import Logo from "./logo";
import MobileNav from "./mobile-nav";

export type NavigationItem = {
	href?: string;
	label: string;
	submenu?: boolean;
	type?: string;
	items?: {
		href: string;
		label: string;
	}[];
};

export type NavigationMenu = NavigationItem[];

export default async function NavBar() {
	const categories = await getAllCategories();

	const NAVIGATION_MENU: NavigationMenu = [
		{ href: "/", label: "Home" },
		{ href: "/category/destinations", label: "Destinations" },
		{ href: "/category/travel-tips", label: "Travel Tips" },
		{ href: "/category/safety", label: "safety Guide" },
		{ href: "/about-us", label: "About Us" },
		{
			label: "Discover More",
			submenu: true,
			type: "description",

			items: categories
				.filter(
					(
						category,
					): category is NonNullable<ALL_CATEGORIES_QUERYResult[number]> & {
						slug: string;
						title: string;
					} =>
						category.slug !== null &&
						category.title !== null &&
						category.slug !== "destinations" &&
						category.slug !== "travel-tips" &&
						category.slug !== "safety",
				)
				.map((category) => ({
					href: `/category/${category.slug}`,
					label: category.title,
				})),
		},
	];

	return (
		<header className="custom-container sticky top-0 bg-background z-50 flex items-center justify-between border-b py-3.5">
			<div className="flex w-full h-full items-center justify-between">
				<Logo />
				<DesktopMenu menu={NAVIGATION_MENU} />

				<div className="flex items-center gap-2">
					<CallActions />
					<MobileNav menu={NAVIGATION_MENU} />
				</div>
			</div>
		</header>
	);
}
