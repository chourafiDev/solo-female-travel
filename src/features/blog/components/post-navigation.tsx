import Link from "next/link";
import { getNextPost, getPreviousPost } from "@/sanity/queries";

interface PostNavigationProps {
	currentSlug: string;
}

const PostNavigation = async ({ currentSlug }: PostNavigationProps) => {
	// ✅ Fetch previous and next posts
	const [previousPost, nextPost] = await Promise.all([
		getPreviousPost(currentSlug),
		getNextPost(currentSlug),
	]);

	// ✅ Don't render if no previous or next posts
	if (!previousPost && !nextPost) return null;

	return (
		<nav
			aria-label="Post navigation"
			className="lg:w-[80%] flex md:flex-row flex-col items-stretch bg-background dark:bg-soft-linen border rounded-lg mx-auto mb-28 overflow-hidden min-h-[8rem]"
		>
			{/* Previous Post */}
			{previousPost ? (
				<Link
					href={`/blog/${previousPost.slug}`}
					rel="prev"
					className="group px-10 py-6 flex-1 flex flex-col justify-center hover:bg-soft-linen dark:hover:bg-background transition-colors"
				>
					<span className="text-sm font-bold text-foreground underline">
						Previous
					</span>
					<h3 className="text-lg mt-2 font-bold text-foreground group-hover:underline line-clamp-2">
						{previousPost.title}
					</h3>
				</Link>
			) : (
				<div className="flex-1 px-10 py-6 flex flex-col justify-center opacity-50">
					<span className="text-sm font-bold text-muted-foreground">
						No previous post
					</span>
				</div>
			)}

			{/* Divider - only show if both posts exist */}
			{previousPost && nextPost && (
				<div className="bg-border w-[1px]" aria-hidden="true" />
			)}

			{/* Next Post */}
			{nextPost ? (
				<Link
					href={`/blog/${nextPost.slug}`}
					rel="next"
					className="group text-right flex-1 px-10 py-6 flex flex-col justify-center hover:bg-soft-linen dark:hover:bg-background transition-colors"
				>
					<span className="text-sm font-bold text-foreground underline">
						Next
					</span>
					<h3 className="text-lg mt-2 font-bold text-foreground group-hover:underline line-clamp-2">
						{nextPost.title}
					</h3>
				</Link>
			) : (
				<div className="flex-1 px-10 py-6 flex flex-col justify-center text-right opacity-50">
					<span className="text-sm font-bold text-muted-foreground">
						No next post
					</span>
				</div>
			)}
		</nav>
	);
};

export default PostNavigation;
