import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const StartTheConversation = () => {
	return (
		<section
			aria-labelledby="contact-cta-heading"
			className="mb-6 py-16 flex flex-col items-center justify-center bg-soft-linen rounded-xl"
		>
			<h2 id="contact-cta-heading" className="title text-center lg:text-5xl text-3xl mb-5">
				Let&apos;s Start The Conversation!
			</h2>
			<p className="text-center lg:w-[40%] w-[70%] text-muted-foreground text-[15px]">
				Have a story to share or a question to ask? Reach out—we&apos;re always
				listening and excited to hear from you!
			</p>

			<Link
				href="/contact"
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
