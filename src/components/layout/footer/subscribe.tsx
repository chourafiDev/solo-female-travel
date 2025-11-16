'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { IoIosSend } from 'react-icons/io';
import z from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .trim()
    .toLowerCase(),
});

const Subscribe = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.error('Form submission error', error);
    }
  }
  return (
    <div className="flex-1 md:p-12 p-8">
      <p className="text-foreground font-semibold text-base mb-4">
        Subscribe for all the top news!
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center bg-background dark:bg-input/30 rounded-full p-1.5 border overflow-hidden"
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
                    className="w-full dark:bg-transparent border-none shadow-none outline-none dark:focus-visible:ring-offset-0 focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" size={'icon'} className="size-12 cursor-pointer">
            <IoIosSend className="size-7" />
          </Button>
        </form>

        {form.formState.errors.email && (
          <p className="text-xs text-destructive pl-4 mt-2">{form.formState.errors.email.message}</p>
        )}
      </Form>

      <p className="text-muted-foreground text-sm mt-2">
        We won&apos;t send you spam. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default Subscribe;
