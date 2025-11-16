import { Button } from '@/components/ui/button';
import { touristCarryingLuggage } from '@/lib/assets';
import { siteConfig } from '@/lib/metadata';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { RxDividerVertical } from 'react-icons/rx';

const posts = [
  {
    id: 1,
    title: 'Best places to travel solo female in us',
    excerpt: 'test',
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
    excerpt: 'test',
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
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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

interface ArticlesProps {
  query: string;
  category: string;
}

const Articles = ({ query, category }: ArticlesProps) => {
  // TODO: Replace with actual API call
  // const { data: posts, isLoading, error } = useFetchPosts({ query, category });

  // Simulate filtering based on query and category
  // In production, this filtering should happen on the API/backend
  const filteredPosts = posts.filter((post) => {
    const matchesQuery = query
      ? post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(query.toLowerCase())
      : true;

    const matchesCategory = category ? post.categorySlug === category : true;

    return matchesQuery && matchesCategory;
  });

  const resultsCount = filteredPosts.length;
  const hasQuery = query || category;

  // Loading state (for future API implementation)
  // if (isLoading) {
  //   return <ArticlesLoading />;
  // }

  // Error state (for future API implementation)
  // if (error) {
  //   return <ArticlesError />;
  // }

  // Empty state - no results found
  if (resultsCount === 0) {
    return (
      <section aria-labelledby="no-results-heading" className="section-bottom">
        <div className="text-center py-20 px-4">
          <div className="max-w-md mx-auto space-y-4">
            <h2 id="no-results-heading" className="text-2xl font-bold text-foreground">
              No Articles Found
            </h2>
            <p className="text-muted-foreground">
              {query && category
                ? `We couldn't find any articles matching "${query}" in ${category}. Try different keywords or browse other categories.`
                : query
                  ? `No articles found for "${query}". Try different search terms or explore our categories.`
                  : category
                    ? `No articles found in ${category}. Check back soon for new content.`
                    : 'No articles available at the moment.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Button asChild variant="default">
                <Link href="/">Browse All Articles</Link>
              </Button>
              {hasQuery && (
                <Button asChild variant="outline">
                  <Link href="/search">Clear Filters</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="latest-posts-heading" className="section-bottom">
      <h2
        id="latest-posts-heading"
        className="text-muted-foreground text-lg font-medium font-marcellus mb-4"
      >
        <span className="font-extrabold text-foreground text-2xl">320</span> Results found
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-8">
        {posts.map((post) => (
          <article
            key={post.id}
            itemScope
            itemType="https://schema.org/BlogPosting"
            className="pr-3 border-r border-border"
          >
            <div className="relative w-full">
              <Link href={`/blog/${post.slug}`} itemProp="url">
                <figure
                  itemProp="image"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                  className="relative w-full h-[230px] rounded-lg overflow-hidden"
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

            <div className="flex items-center gap-0 mt-2">
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

export default Articles;
