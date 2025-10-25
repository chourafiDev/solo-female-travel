import Link from "next/link";
import Categories from "./categories";
import Info from "./info";
import QuickLink from "./quick-link";
import Subscribe from "./subscribe";

const index = () => {
	return (
		<footer className="custom-container mb-4">
			<div className="border rounded-lg">
				<div className="grid lg:grid-cols-3 grid-cols-1">
					<Info />

					<div className="flex-1 flex justify-between md:p-12 p-8 lg:border-r lg:border-l border-b border-t lg:border-b-0 lg:border-t-0 gap-6">
						<QuickLink />
						<Categories />
					</div>

					<Subscribe />
				</div>

				<div className="border-t flex lg:flex-row flex-col lg:gap-0 gap-5 items-center justify-between py-3 md:px-12 px-8">
					<p className="text-muted-foreground font-medium text-[13px]">
						&copy; {new Date().getFullYear()} Brand, All Rights Reserved.
					</p>

					<div className="flex md:flex-row flex-col items-center gap-4">
						<Link href="/" className="font-medium text-[13px] link">
							Term Of Services
						</Link>
						<div className="md:block hidden h-3 w-[1px] bg-muted-foreground/30" />
						<Link href="/" className="font-medium text-[13px] link">
							Privacy Policy
						</Link>
						<div className="md:block hidden h-3 w-[1px] bg-muted-foreground/30" />
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
