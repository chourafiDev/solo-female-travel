import { NavItemMobile } from "@/components/navigation-menu";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { NAVIGATION_MENU } from ".";

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="ghost" className="rounded-full lg:hidden">
					<MenuIcon className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-lg">
				<div className="flex h-14 items-center justify-end border-b px-4">
					<SheetClose asChild>
						<Button size="icon" variant="ghost" className="rounded-full">
							<XIcon className="size-5" />
							<span className="sr-only">Close</span>
						</Button>
					</SheetClose>
				</div>
				<div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
					{NAVIGATION_MENU.map((item) =>
						item.submenu ? (
							<Accordion type="single" collapsible key={item.label}>
								<AccordionItem value="item-1">
									<AccordionTrigger className="capitalize hover:no-underline">
										{item.label}
									</AccordionTrigger>
									<AccordionContent className="space-y-1">
										<ul className="grid gap-1">
											{item.items.map((item) => (
												<li key={item.href}>
													<SheetClose asChild>
														<NavItemMobile item={item} />
													</SheetClose>
												</li>
											))}
										</ul>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						) : (
							<Link href={item.href as string} key={item.label}>
								{item.label}
							</Link>
						),
					)}
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
