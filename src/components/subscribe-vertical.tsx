"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { z } from "zod";
/* import { addWelcomeSubscriber } from "@/app/_actions/welcome-email"; */
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const subscribeSchema = z.object({
	email: z
		.email("Please enter a valid email address")
		.min(1, "Email is required"),
});

const SubscribeVertical = () => {
	const [message, setMessage] = useState<string>("");
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof subscribeSchema>>({
		resolver: zodResolver(subscribeSchema),
		defaultValues: {
			email: "",
		},
	});

	function onSubmit(values: z.infer<typeof subscribeSchema>) {
		/* startTransition(async () => {
			setMessage("");
			setIsSuccess(false);

			const result = await addWelcomeSubscriber({ email: values.email });

			if (result.success) {
				setMessage(result.message);
				setIsSuccess(true);
				form.reset();
			} else {
				setMessage(result.error);
				setIsSuccess(false);
			}
		}); */
	}

	const handleClear = () => {
		setIsSuccess(false);
		setMessage("");
	};

	return (
		<section className="min-h-auto w-full bg-soft-linen rounded-xl overflow-hidden relative">
			{/* Top Fade Grid Background */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `
        linear-gradient(to right, #eff0f1 1px, transparent 1px),
        linear-gradient(to bottom, #eff0f1 1px, transparent 1px)
      `,
					backgroundSize: "20px 30px",
					WebkitMaskImage:
						"radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
					maskImage:
						"radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
				}}
			/>

			<div className="relative px-5 py-8">
				<div>
					<div className="mb-8">
						<h4 className="font-playfair-display text-center text-foreground font-semibold text-xl mb-1">
							Subscribe Newsletter
						</h4>
						<p className="text-foreground/70 text-center text-sm font-medium">
							Sign up for free and be the first to get notified about new posts.
						</p>
					</div>

					{isSuccess ? (
						<div className="p-4 bg-green-100 border border-green-400 rounded-lg flex items-center justify-between gap-3">
							<p className="text-green-700 font-medium flex-1">{message}</p>
							<button
								type="button"
								onClick={handleClear}
								className="size-7 cursor-pointer flex items-center justify-center rounded-full bg-white"
							>
								<IoClose className="text-gray-900" />
								<span className="sr-only">Close</span>
							</button>
						</div>
					) : (
						<div>
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)}>
									<div className="flex items-center gap-3 mb-4">
										<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
												<FormItem className="w-full">
													<FormLabel>Email Address *</FormLabel>
													<FormControl>
														<Input
															type="email"
															disabled={isPending}
															className="w-full py-3.5 dark:bg-white"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<Button
										type="submit"
										size={"lg"}
										className="py-[22px] w-full"
										disabled={isPending}
									>
										{isPending ? (
											"Sending..."
										) : (
											<>
												<IoIosSend className="size-5" />
												Subscribe
											</>
										)}
									</Button>
								</form>
							</Form>

							{message && !isSuccess && (
								<p className="text-red-600 text-sm mt-2">{message}</p>
							)}
						</div>
					)}

					<p className="text-foreground text-xs text-center mt-4">
						We won&apos;t send you spam. Unsubscribe at any time.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SubscribeVertical;
