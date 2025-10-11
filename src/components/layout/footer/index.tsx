import Link from "next/link";
import Categories from "./categories";
import Info from "./info";
import QuickLink from "./quick-link";
import Subscribe from "./subscribe";

const index = () => {
	return (
		<footer className="custom-container mb-4">
			<div className="border rounded-lg">
				<div className="flex items-start">
					<Info />

					<div className="flex-1 flex justify-between p-12 border-r border-l gap-6">
						<QuickLink />
						<Categories />
					</div>

					<Subscribe />
				</div>

				<div className="border-t flex items-center justify-between py-3 px-12">
					<p className="text-muted-foreground font-medium text-[13px]">
						&copy; {new Date().getFullYear()} Brand, All Rights Reserved.
					</p>

					<div className="flex items-center gap-4">
						<Link href="/" className="font-medium text-[13px] link">
							Term Of Services
						</Link>
						<div className="h-3 w-[1px] bg-muted-foreground/30" />
						<Link href="/" className="font-medium text-[13px] link">
							Privacy Policy
						</Link>
						<div className="h-3 w-[1px] bg-muted-foreground/30" />
						<Link href="/" className="font-medium text-[13px] link">
							Cookie Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default index;
