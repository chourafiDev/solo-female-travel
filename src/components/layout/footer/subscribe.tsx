"use client";

import { Button } from "@/components/ui/button";
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
		<div className="flex-1 p-12">
			<p className="text-foreground font-semibold text-base mb-4">
				Subscribe for all the top news!
			</p>

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
					<Button type="submit" size={"icon"} className="size-9 cursor-pointer">
						<IoIosSend className="size-5" />
					</Button>
				</form>
			</Form>

			<p className="text-muted-foreground text-sm mt-2">
				We won&apos;t send you spam. Unsubscribe at any time.
			</p>
		</div>
	);
};

export default Subscribe;
