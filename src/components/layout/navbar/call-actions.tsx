import SearchSheet from "@/components/search-sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";

const CallActions = () => {
	return (
		<div className="flex items-center gap-1">
			<SearchSheet />
			<Link
				href="/"
				className={cn(
					buttonVariants({ variant: "default", size: "lg" }),
					"h-11",
				)}
			>
				Let&apos;s Talk
			</Link>
		</div>
	);
};

export default CallActions;
