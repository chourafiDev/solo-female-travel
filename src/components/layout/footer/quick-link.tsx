import Link from "next/link";

const QuickLink = () => {
	return (
		<div>
			<p className="text-foreground font-semibold text-base mb-3">Quick link</p>

			<ul className="space-y-1 font-medium">
				<li>
					<Link href="/" className="link text-sm">
						Homepage
					</Link>
				</li>
				<li>
					<Link href="/" className="link text-sm">
						About Us
					</Link>
				</li>
				<li>
					<Link href="/" className="link text-sm">
						Contact Us
					</Link>
				</li>
				<li>
					<Link href="/" className="link text-sm">
						Our Blog
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default QuickLink;
