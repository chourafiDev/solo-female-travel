'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import Articles from './articles';

const categories = [
  {
    value: 'destinations',
    label: 'Destinations',
  },
  {
    value: 'travel-tips',
    label: 'Travel Tips',
  },
  {
    value: 'safety',
    label: 'Safety Guide',
  },
  {
    value: 'budget-travel',
    label: 'Budget Travel',
  },
  {
    value: 'tours',
    label: 'Tours & Experiences',
  },
  {
    value: 'packing',
    label: 'Packing Guides',
  },
];

const formSchema = z.object({
  search: z.string().trim(),
  category: z.string().optional(),
});

export default function SearchResults() {
  const id = useId();

  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: query,
      category: category,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <section className="section-bottom rounded-xl bg-soft-linen px-10 py-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Search Input Section */}
            <div>
              <h3 className="text-foreground font-extrabold text-[17px] mb-2">
                What Are You Looking For?
              </h3>
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="Search articles..."
                        type="text"
                        aria-label="Search query"
                        className="bg-background rounded-full border w-full px-4 py-6 shadow-none outline-none focus-visible:ring-0"
                        {...field}
                        onKeyDown={(e) => {
                          // Allow search on Enter key
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            form.handleSubmit(onSubmit)();
                          }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Category Filter Section */}
            <div>
              <h3 className="text-foreground font-extrabold text-[17px] mb-2">Categories:</h3>

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup value={field.value} className="flex flex-wrap gap-2">
                        {categories.map((item) => (
                          <Label
                            key={`${id}-${item.value}`}
                            htmlFor={`${id}-${item.value}`}
                            className="relative flex cursor-pointer items-center bg-white dark:bg-background gap-3 rounded-full border border-input px-5 py-3 text-center hover:bg-foreground dark:hover:bg-foreground hover:text-background transition-colors outline-none has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 has-[:checked]:text-background has-[:checked]:bg-foreground"
                          >
                            <RadioGroupItem
                              id={`${id}-${item.value}`}
                              value={item.value}
                              className="sr-only after:absolute after:inset-0"
                            />
                            <p className="text-sm leading-none font-medium whitespace-nowrap">
                              {item.label}
                            </p>
                          </Label>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="px-16 flex-shrink-0">
                Search
              </Button>
            </div>
          </form>
        </Form>
      </section>
      <Articles />
    </div>
  );
}
