import { JsonLd } from '@/components/JsonLd';
import { Separator } from '@/components/ui/separator';
import BlogCard from '@/features/category/components/blog-card';
import Breadcrumbs from '@/features/category/components/breadcrumbs';
import Categories from '@/features/category/components/categories';
import CategoryHeader from '@/features/category/components/category-header';
import PaginationPosts from '@/features/category/components/pagination-posts';
import RelatesPosts from '@/features/category/components/relates-posts';
import Search from '@/features/category/components/search';
import {
  generateBreadcrumbSchema,
  generateCategoryMetadata,
  generateCollectionPageSchema,
  generateItemListSchema,
  siteConfig,
} from '@/lib/metadata';
import React from 'react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  return generateCategoryMetadata(slug);
}

const CategoryPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const category = siteConfig.categories[slug as keyof typeof siteConfig.categories];

  if (!category) {
    return (
      <main className="custom-container my-10">
        <div className="py-44 bg-soft-linen rounded-xl flex justify-center items-center">
          <h1 className="text-foreground font-semibold text-lg">Category not found</h1>
        </div>
      </main>
    );
  }

  const collectionSchema = generateCollectionPageSchema(category.title, category.description);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: category.title, url: `/${category.slug}` },
  ]);

  const posts = [
    {
      id: 1,
      category: 'FASHION',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
      date: '2025-02-19T10:00:00Z',
      author: 'JANE COOPER',
      authorSlug: 'jane-cooper',
      title: '10 How To Start Your Own Online Magazine',
      slug: 'how-to-start-your-own-online-magazine',
      excerpt: 'Learn the essential steps to launch your digital magazine successfully.',
    },
    {
      id: 2,
      category: 'TRAVEL',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
      date: '2025-03-25T10:00:00Z',
      author: 'RALPH EDWARDS',
      authorSlug: 'ralph-edwards',
      title: 'Exploring Europe On A Budget: 7 Must-Visit Cities',
      slug: 'exploring-europe-on-a-budget',
      excerpt: 'Discover affordable European destinations without breaking the bank.',
    },
    {
      id: 3,
      category: 'FOOD',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
      date: '2025-04-15T10:00:00Z',
      author: 'THERESA WEBB',
      authorSlug: 'theresa-webb',
      title: 'Easy One-Pot Dinners For Busy Weeknights',
      slug: 'easy-one-pot-dinners-busy-weeknights',
      excerpt: 'Quick and delicious meals that require minimal cleanup.',
    },
    {
      id: 4,
      category: 'MINDFULNESS',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      date: '2025-01-10T10:00:00Z',
      author: 'WADE WARREN',
      authorSlug: 'wade-warren',
      title: 'Finding Focus: How To Stay Centered In The Age Of Distraction',
      slug: 'finding-focus-stay-centered',
      excerpt: 'Practical techniques to maintain focus in a distracted world.',
    },
    {
      id: 5,
      category: 'MINDFULNESS',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      date: '2025-02-06T10:00:00Z',
      author: 'DARRELL STEWARD',
      authorSlug: 'darrell-steward',
      title: 'How To Start Journaling For Mental Clarity',
      slug: 'start-journaling-mental-clarity',
      excerpt: 'Begin your journaling practice with these simple tips.',
    },
    {
      id: 6,
      category: 'FITNESS',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      date: '2025-01-10T10:00:00Z',
      author: 'RALPH EDWARDS',
      authorSlug: 'ralph-edwards',
      title: 'Home Workouts That Actually Work For Busy People Daily',
      slug: 'home-workouts-busy-people',
      excerpt: 'Effective home workout routines you can do anywhere.',
    },
  ];

  const itemListSchema = generateItemListSchema(
    posts.map((post) => ({
      name: post.title,
      url: `/blog/${post.slug}`,
      description: post.excerpt,
    })),
    `${category.title} Posts`,
  );

  return (
    <>
      <JsonLd data={collectionSchema} id="collection-schema" />
      <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
      <JsonLd data={itemListSchema} id="itemlist-schema" />

      {/* Breadcrumbs */}
      <Breadcrumbs category={category.title} />

      <main className="custom-container">
        {/* Category Header */}
        <CategoryHeader />

        {/* Posts Section */}
        <section aria-labelledby="posts-heading" className="mb-10 flex lg:flex-row flex-col gap-5 items-start">
          <h2 id="posts-heading" className="sr-only">
            {category.title} Posts
          </h2>

          {/* Posts List */}
          <div className="flex-1 space-y-14 mb-10 lg:border-r border-border lg:pr-5">
            <div className="space-y-6">
              {posts.map((post, index) => (
                <React.Fragment key={post.id}>
                  <BlogCard {...post} />
                  {index < posts.length - 1 && <Separator />}
                </React.Fragment>
              ))}
            </div>

            <PaginationPosts currentPage={1} totalPages={10} />
          </div>

          {/* Sidebar */}
          <aside aria-label="Sidebar" className='lg:w-auto w-full'>
            <div className="space-y-8 w-full">
              <Search />
              <Categories />
              <Separator aria-hidden="true" />
              <RelatesPosts />
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default CategoryPage;
