'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useId } from 'react';
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
];

const formSchema = z.object({
  search: z.string().trim(),
  category: z.string().optional(),
});

export default function SearchResults() {
  const id = useId();
  const router = useRouter();
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

  useEffect(() => {
    form.reset({
      search: query,
      category: category,
    });
  }, [query, category, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const params = new URLSearchParams();

    if (values.search) {
      params.set('q', values.search);
    }

    if (values.category) {
      params.set('category', values.category);
    }

    // Update URL with new search params
    if (params.toString()) {
      router.push(`/search?${params.toString()}`);
    } else {
      router.push('/search');
    }
  }

  // Clear individual filter and submit
  const clearFilter = (filterType: 'search' | 'category') => {
    if (filterType === 'search') {
      form.setValue('search', '');
    } else {
      form.setValue('category', '');
    }

    // Auto-submit after clearing
    form.handleSubmit(onSubmit)();
  };

  // Clear all filters and submit
  const clearAllFilters = () => {
    form.reset({
      search: '',
      category: '',
    });
    router.push('/search');
  };

  const hasActiveFilters = query || category;

  return (
    <>
      {/* Search Form Section */}
      <section
        aria-labelledby="search-form-heading"
        className="section-bottom rounded-xl bg-soft-linen md:px-10 px-5 md:py-8 py-5"
      >
        <h2 id="search-form-heading" className="sr-only">
          Search and Filter Travel Guides
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Search Input Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-foreground font-extrabold text-[17px]">
                  What Are You Looking For?
                </h3>
                {hasActiveFilters && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-xs text-muted-foreground hover:text-foreground"
                    aria-label="Clear all search filters"
                  >
                    Clear all filters
                  </Button>
                )}
              </div>
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Search solo female travel guides, tips, destinations..."
                          type="search"
                          aria-label="Search travel guides and articles"
                          autoComplete="off"
                          className="bg-background dark:bg-background rounded-full border w-full px-4 py-6 pr-12 shadow-none outline-none focus-visible:ring-0"
                          {...field}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              form.handleSubmit(onSubmit)();
                            }
                          }}
                        />
                        {field.value && (
                          <button
                            type="button"
                            onClick={() => {
                              field.onChange('');
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-muted rounded-full p-1"
                            aria-label="Clear search input"
                          >
                            <X className="size-4 text-muted-foreground" aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Category Filter Section */}
            <div>
              <h3 className="text-foreground font-extrabold text-[17px] mb-2">
                Filter by Category:
              </h3>

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-wrap gap-2"
                        aria-label="Filter articles by category"
                      >
                        {categories.map((item) => (
                          <Label
                            key={`${id}-${item.value}`}
                            htmlFor={`${id}-${item.value}`}
                            className="relative flex cursor-pointer items-center bg-white dark:bg-background gap-3 rounded-full border border-input px-5 py-3 text-center hover:bg-foreground dark:hover:bg-foreground hover:text-background transition-colors outline-none has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 has-[:checked]:text-background dark:has-[:checked]:bg-white has-[:checked]:bg-foreground"
                          >
                            <RadioGroupItem
                              id={`${id}-${item.value}`}
                              value={item.value}
                              className="sr-only after:absolute after:inset-0"
                            />
                            <span className="text-sm leading-none font-medium whitespace-nowrap">
                              {item.label}
                            </span>
                          </Label>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                size="lg"
                className="px-16 flex-shrink-0 md:w-auto w-full"
                aria-label="Search travel guides"
              >
                Search
              </Button>
            </div>
          </form>
        </Form>
      </section>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <section
          aria-label="Active search filters"
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
          {query && (
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span>&quot;{query}&quot;</span>
              <button
                onClick={() => clearFilter('search')}
                className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                aria-label={`Remove search filter: ${query}`}
                type="button"
              >
                <X className="size-3" aria-hidden="true" />
              </button>
            </div>
          )}
          {category && (
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span>{categories.find((c) => c.value === category)?.label || category}</span>
              <button
                onClick={() => clearFilter('category')}
                className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                aria-label={`Remove category filter: ${category}`}
                type="button"
              >
                <X className="size-3" aria-hidden="true" />
              </button>
            </div>
          )}
        </section>
      )}

      {/* Results Section */}
      <section aria-labelledby="results-heading">
        <Articles query={query} category={category} />
      </section>
    </>
  );
}
