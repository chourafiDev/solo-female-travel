"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import z from "zod";
import { Button } from "./ui/button";

const formSchema = z.object({
	email: z.string().min(1),
});

const Subscribe = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			console.log(values);
		} catch (error) {
			console.error("Form submission error", error);
		}
	}
	return (
		<section className="section-bottom rounded-xl px-10 py-12 bg-soft-linen flex items-center gap-16">
			<h3 className="title flex-1">
				Subscribe Now To Stay Updated With Top News!
			</h3>
			<p className="text-muted-foreground text-sm flex-1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
				voluptatem nobis minus accusantium voluptas.
			</p>

			<div className="flex-1">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex items-center bg-white rounded-full p-1.5 border"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormControl>
										<Input
											placeholder="E-mail"
											type="email"
											className="w-full border-none shadow-none outline-none focus-visible:ring-0"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							size={"icon"}
							className="size-11 cursor-pointer"
						>
							<IoIosSend className="size-5" />
						</Button>
					</form>
				</Form>

				<p className="text-muted-foreground text-sm mt-2">
					We won&apos;t send you spam. Unsubscribe at any time.
				</p>
			</div>
		</section>
	);
};

export default Subscribe;
