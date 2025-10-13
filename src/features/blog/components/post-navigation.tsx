import Link from "next/link";

const PostNavigation = () => {
	return (
		<nav
			aria-label="Post navigation"
			className="w-[80%] h-32 flex items-center bg-background dark:bg-soft-linen border rounded-lg mx-auto mb-28"
		>
			<Link href="/previous-post" rel="prev" className="group px-10 flex-1">
				<span className="text-sm font-bold text-foreground underline">
					Previous
				</span>
				<h3 className="text-lg mt-2 font-bold text-foreground group-hover:underline">
					How to Blog Productive While Working From Home
				</h3>
			</Link>
			<div className="bg-border h-full w-[1px]" />
			<Link
				href="/next-post"
				rel="next"
				className="group text-right flex-1 px-10"
			>
				<span className="text-sm font-bold text-foreground underline">
					Next
				</span>
				<h3 className="text-lg mt-2 font-bold text-foreground group-hover:underline">
					How to Blog Productive While Working From Home
				</h3>
			</Link>
		</nav>
	);
};

export default PostNavigation;
