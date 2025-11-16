import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { touristCarryingLuggage } from '@/lib/assets';
import { siteConfig } from '@/lib/metadata';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { RxDividerVertical } from 'react-icons/rx';

const LatestPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'Best places to travel solo female in us',
      slug: 'best-places-travel-solo-female-us',
      category: 'Travel',
      categorySlug: 'travel',
      image: 'https://...',
      date: '2025-02-12T10:00:00Z',
      author: 'Maya Pena',
      authorSlug: 'maya-pena',
    },
    {
      id: 2,
      title: 'Best places to travel solo female in us',
      slug: 'best-places-travel-solo-female-us',
      category: 'Travel',
      categorySlug: 'travel',
      image: 'https://...',
      date: '2025-02-12T10:00:00Z',
      author: 'Maya Pena',
      authorSlug: 'maya-pena',
    },
    {
      id: 3,
      title: 'Best places to travel solo female in us',
      slug: 'best-places-travel-solo-female-us',
      category: 'Travel',
      categorySlug: 'travel',
      image: 'https://...',
      date: '2025-02-12T10:00:00Z',
      author: 'Maya Pena',
      authorSlug: 'maya-pena',
    },
    {
      id: 4,
      title: 'Best places to travel solo female in us',
      slug: 'best-places-travel-solo-female-us',
      category: 'Travel',
      categorySlug: 'travel',
      image: 'https://...',
      date: '2025-02-12T10:00:00Z',
      author: 'Maya Pena',
      authorSlug: 'maya-pena',
    },
    {
      id: 5,
      title: 'Best places to travel solo female in us',
      slug: 'best-places-travel-solo-female-us',
      category: 'Travel',
      categorySlug: 'travel',
      image: 'https://...',
      date: '2025-02-12T10:00:00Z',
      author: 'Maya Pena',
      authorSlug: 'maya-pena',
    },
  ];

  return (
    <section aria-labelledby="latest-posts-heading" className="section-bottom">
      <div className="flex items-center justify-between mb-2">
        <h2 id="latest-posts-heading" className="title">
          Latest Posts
        </h2>
        <Link
          href="/blog"
          className={cn(buttonVariants({ variant: 'default' }))}
          /*  className="text-foreground flex items-center gap-1 text-sm font-medium hover:underline" */
        >
          Explore Blog Posts <ChevronRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <Separator />

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-3 gap-6 mt-6">
        {posts.map((post) => (
          <article key={post.id} itemScope itemType="https://schema.org/BlogPosting">
            <div className="relative w-full">
              <Link href={`/blog/${post.slug}`} itemProp="url">
                <figure
                  itemProp="image"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                  className="relative w-full h-[170px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={touristCarryingLuggage}
                    alt={post.title}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                    className="absolute object-cover transition-all duration-300 hover:scale-110"
                    itemProp="url"
                    loading="lazy"
                  />
                </figure>
              </Link>

              <div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1 rounded-full z-20">
                <Link
                  href={`/${post.categorySlug}`}
                  rel="category tag"
                  className="text-[11px] text-white font-semibold uppercase"
                >
                  {post.category}
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-0 md:mt-4 mt-2">
              <time
                dateTime={post.date}
                itemProp="datePublished"
                className="text-[10px] font-semibold text-foreground"
              >
                {format(new Date(post.date), 'MMMM d, yyyy').toUpperCase()}
              </time>
              <RxDividerVertical
                className="text-foreground font-bold rotate-12"
                aria-hidden="true"
              />
              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
                className="mb-1"
              >
                <Link
                  href={`/author/${post.authorSlug}`}
                  className="text-[10px] text-foreground font-semibold"
                >
                  <span className="text-muted-foreground">POST BY</span>{' '}
                  <span itemProp="name">{post.author.toUpperCase()}</span>
                </Link>
              </div>
            </div>

            <h3 itemProp="headline" className="post-title leading-6 text-lg">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>

            {/* Hidden publisher */}
            <div
              itemProp="publisher"
              itemScope
              itemType="https://schema.org/Organization"
              className="hidden"
            >
              <meta itemProp="name" content={siteConfig.name} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
