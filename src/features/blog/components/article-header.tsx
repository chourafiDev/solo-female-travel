import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import Link from "next/link";

const ArticleHeader = ({ title }: { title: string }) => {
	return (
		<header className="flex flex-col items-center justify-center gap-2.5">
			<div className="flex items-center gap-2.5">
				{/* Category */}
				<div className="px-4 pt-1.5 pb-2 bg-foreground rounded-full">
					<Link
						href="/category/destinations"
						rel="category tag"
						className="text-xs font-semibold text-background"
					>
						Destinations
					</Link>
				</div>

				<div className="h-5 w-[1px] bg-border" aria-hidden="true" />

				{/* Publish Date */}
				<time
					dateTime="2022-02-22T10:00:00Z"
					itemProp="datePublished"
					className="text-foreground font-semibold text-xs"
				>
					{format(new Date("2022-02-22"), "MMMM d, yyyy")}
				</time>

				<div className="h-5 w-[1px] bg-border" aria-hidden="true" />

				{/* Read time */}
				<p
					className="text-foreground font-semibold text-xs"
					aria-label="Reading time"
				>
					4 MINS READ
				</p>
			</div>

			{/* Main Heading */}
			<h1
				itemProp="headline"
				className="text-foreground font-bold text-4xl text-center px-60 my-3.5"
			>
				{title}
			</h1>

			{/* Author Info */}
			<div
				itemProp="author"
				itemScope
				itemType="https://schema.org/Person"
				className="flex items-center justify-center gap-1.5"
			>
				<Avatar>
					<AvatarImage
						src="https://github.com/shadcn.png"
						alt="Ralph Edwards profile picture"
						itemProp="image"
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="text-foreground font-semibold text-[13px]">
					<span className="text-foreground/60 font-medium">Post by</span>{" "}
					<Link href="/author/ralph-edwards" itemProp="url">
						<span itemProp="name">Ralph Edwards</span>
					</Link>
				</p>
			</div>
		</header>
	);
};

export default ArticleHeader;
