import Link from "next/link";

const QuickLink = () => {
	return (
		<div>
			<p className="text-foreground font-semibold text-base mb-3">Quick link</p>

			<ul className="space-y-1">
				<li>
					<Link href="/" className="link text-[15px]">
						Homepage
					</Link>
				</li>
				<li>
					<Link href="/" className="link text-[15px]">
						About Us
					</Link>
				</li>
				<li>
					<Link href="/" className="link text-[15px]">
						Contact Us
					</Link>
				</li>
				<li>
					<Link href="/" className="link text-[15px]">
						Our Blog
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default QuickLink;
