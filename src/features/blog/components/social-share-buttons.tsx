import { buttonVariants } from "@/components/ui/button";
import { type BlogPost, siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaPinterest } from "react-icons/fa";

const SocialShareButtons = ({ post }: { post: BlogPost }) => {
	return (
		<aside aria-label="Share this post" className="w-[15%]">
			<p className="text-foreground font-bold text-[15px] mb-3">
				Share This Post
			</p>

			<div className="space-y-2">
				<Link
					href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
					aria-label="Share on Facebook"
					rel="noopener noreferrer"
					target="_blank"
					className={cn(
						buttonVariants({ variant: "outline" }),
						"font-semibold w-full py-4 text-sm cursor-pointer bg-background dark:bg-soft-linen",
					)}
				>
					<FaFacebook aria-hidden="true" />
					Facebook
				</Link>
				<Link
					href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
					aria-label="Share on Twitter"
					rel="noopener noreferrer"
					target="_blank"
					className={cn(
						buttonVariants({ variant: "outline" }),
						"font-semibold w-full py-4 text-sm cursor-pointer bg-background dark:bg-soft-linen",
					)}
				>
					<BsTwitterX aria-hidden="true" />
					Twitter
				</Link>
				<Link
					href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(post.title)}`}
					aria-label="Share on Pinterest"
					rel="noopener noreferrer"
					target="_blank"
					className={cn(
						buttonVariants({ variant: "outline" }),
						"font-semibold w-full py-4 text-sm cursor-pointer bg-background dark:bg-soft-linen",
					)}
				>
					<FaPinterest aria-hidden="true" />
					Pinterest
				</Link>
			</div>
		</aside>
	);
};

export default SocialShareButtons;
