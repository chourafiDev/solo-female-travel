import { NavGridCard, NavSmallItem } from "@/components/navigation-menu";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { NavigationMenu as TNavigationMenu } from ".";

const DesktopMenu = ({ menu }: { menu: TNavigationMenu }) => {
	return (
		<NavigationMenu className="hidden lg:block">
			<NavigationMenuList>
				{menu.map((item) =>
					item.submenu ? (
						<NavigationMenuItem key={item.label}>
							<NavigationMenuTrigger className="hover:bg-soft-linen font-bold text-sm">
								{item.label}
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div className="grid w-full md:w-5xl md:grid-cols-[.30fr_1fr]">
									<ul className="space-y-1 p-4 md:border-r">
										{item.items?.map((item) => (
											<li key={item.label}>
												<NavSmallItem item={item} />
											</li>
										))}
									</ul>
									<ul className="grid grow gap-2 p-4 md:grid-cols-3">
										<li>
											<NavGridCard />
										</li>
										<li>
											<NavGridCard />
										</li>
										<li>
											<NavGridCard />
										</li>
									</ul>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					) : (
						<NavigationMenuItem key={item.label}>
							<NavigationMenuLink
								href={`${item.href}`}
								className="cursor-pointer font-bold text-sm hover:bg-soft-linen"
							>
								{item.label}
							</NavigationMenuLink>
						</NavigationMenuItem>
					),
				)}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default DesktopMenu;
