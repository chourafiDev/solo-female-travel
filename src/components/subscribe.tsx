'use client';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { IoIosSend } from 'react-icons/io';
import z from 'zod';
import { Button } from './ui/button';

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
    <section
      aria-labelledby="subscribe-heading"
      className="section-bottom rounded-xl md:px-10 px-4 md:py-12 py-8 bg-soft-linen flex lg:flex-row flex-col items-center lg:gap-16 gap-6"
    >
      <h2 id="subscribe-heading" className="title lg:text-start text-center flex-1">
        Subscribe Now To Stay Updated With Top News!
      </h2>
      <p className="text-muted-foreground lg:text-start text-center text-sm flex-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatem nobis minus
        accusantium voluptas.
      </p>

      <div className="flex-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center bg-background rounded-full overflow-hidden p-1.5 border"
            aria-label="Newsletter subscription form"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      aria-label="Email address"
                      className="lg:w-full md:w-[400px] w-[300px] bg-background dark:bg-transparent border-none shadow-none outline-none dark:focus-visible:ring-offset-0 focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size={'icon'}
              className="size-12 cursor-pointer"
              aria-label="Subscribe to newsletter"
            >
              <IoIosSend className="size-7" aria-hidden="true" />
            </Button>
          </form>

          {form.formState.errors.email && (
            <p className="text-xs text-destructive pl-4 mt-2">
              {form.formState.errors.email.message}
            </p>
          )}
        </Form>

        <p className="text-muted-foreground lg:text-start text-center text-xs mt-2">
          We won&apos;t send you spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
