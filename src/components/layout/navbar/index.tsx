import CallActions from "./call-actions";
import DesktopMenu from "./desktop-menu";
import Logo from "./logo";
import MobileNav from "./mobile-nav";

export const NAVIGATION_MENU = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Our Blog" },
	{
		label: "Categories",
		submenu: true,
		type: "description",
		items: [
			{
				href: "/category/destinations",
				label: "Destinations",
			},
			{
				href: "/category/travel-tips",
				label: "Travel Tips",
			},
			{
				href: "/category/safety",
				label: "Safety Guide",
			},
			{
				href: "/category/budget-travel",
				label: "Budget Travel",
			},
			{
				href: "/category/tours",
				label: "Tours & Experiences",
			},
			{
				href: "/category/packing",
				label: "Packing Guides",
			},
		],
	},
	{ href: "/about-us", label: "About Us" },
	{ href: "/contact", label: "Contact" },
];

export default function NavBar() {
	return (
		<header className="custom-container sticky top-0 bg-background z-50 flex items-center justify-between border-b py-3.5">
			<div className="flex w-full h-full items-center justify-between">
				<div className="flex items-center gap-24">
					<Logo />
					<DesktopMenu />
				</div>

				<div className="flex items-center gap-2">
					<CallActions />
					<MobileNav />
				</div>
			</div>
		</header>
	);
}
