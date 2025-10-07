import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const StartTheConversation = () => {
	return (
		<section className="mb-6 py-16 flex flex-col items-center justify-center bg-soft-linen rounded-xl">
			<h2 className="title text-center text-5xl mb-5">
				Let&apos;s Start The Conversation!
			</h2>
			<p className="text-center w-[40%] text-muted-foreground text-[15px]">
				Have a story to share or a question to ask? React out we&apos;re always
				listening and excited to hear from you!
			</p>

			<Link
				href="/"
				className={cn(
					buttonVariants({ variant: "default", size: "lg" }),
					"mt-10",
				)}
			>
				Contact us
			</Link>
		</section>
	);
};

export default StartTheConversation;
