import { JsonLd } from '@/components/JsonLd';
import Breadcrumbs from '@/components/breadcrumbs';
import Subscribe from '@/components/subscribe';
import { Separator } from '@/components/ui/separator';
import BlogCard from '@/features/category/components/blog-card';
import Categories from '@/features/category/components/categories';
import PaginationPosts from '@/features/category/components/pagination-posts';
import {
  generateAuthorMetadata,
  generateAuthorSchema,
  generateBreadcrumbSchema,
  generateItemListSchema,
  siteConfig,
} from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// TODO: Replace with actual author data from API/database
const authorData = {
  name: 'Emma Carson',
  slug: 'emma-carson',
  bio: 'Travel writer and solo female travel advocate based in Portland, Oregon. Emma has visited over 50 countries and is passionate about empowering women to explore the world safely and confidently.',
  location: 'Portland, Oregon, USA',
  image:
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940',
  jobTitle: 'Travel Writer & Solo Female Travel Advocate',
  social: {
    instagram: 'https://instagram.com/emmacarson',
    twitter: 'https://twitter.com/emmacarson',
    pinterest: 'https://pinterest.com/emmacarson',
    facebook: 'https://facebook.com/emmacarson',
  },
  email: 'emma@solofemalevoyage.com',
  totalPosts: 42,
  joinDate: '2023-01-15',
};

const posts = [
  {
    id: 1,
    category: 'DESTINATIONS',
    categorySlug: 'destinations',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
    date: '2025-02-19T10:00:00Z',
    author: 'Emma Carson',
    authorSlug: 'emma-carson',
    title: 'Solo Female Travel Guide to Tokyo: Safety Tips and Hidden Gems',
    slug: 'solo-female-travel-guide-tokyo',
    excerpt:
      'Discover the best neighborhoods, safety tips, and hidden spots for solo female travelers in Tokyo.',
  },
  {
    id: 2,
    category: 'SAFETY',
    categorySlug: 'safety',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    date: '2025-03-25T10:00:00Z',
    author: 'Emma Carson',
    authorSlug: 'emma-carson',
    title: 'Essential Safety Tips Every Solo Female Traveler Should Know',
    slug: 'essential-safety-tips-solo-female-travelers',
    excerpt:
      'Comprehensive safety guide covering awareness, accommodation, and emergency preparedness.',
  },
  {
    id: 3,
    category: 'BUDGET TRAVEL',
    categorySlug: 'budget-travel',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
    date: '2025-04-15T10:00:00Z',
    author: 'Emma Carson',
    authorSlug: 'emma-carson',
    title: 'How I Travel Europe on $50 a Day: Budget Tips for Solo Women',
    slug: 'travel-europe-50-dollars-day',
    excerpt: 'Practical budget strategies for exploring Europe without breaking the bank.',
  },
  {
    id: 4,
    category: 'TRAVEL TIPS',
    categorySlug: 'travel-tips',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    date: '2025-01-10T10:00:00Z',
    author: 'Emma Carson',
    authorSlug: 'emma-carson',
    title: 'Packing Light: My Essential Solo Travel Packing List',
    slug: 'packing-light-solo-travel-essentials',
    excerpt: 'Everything you need to pack for a 2-week trip in one carry-on bag.',
  },
  {
    id: 5,
    category: 'DESTINATIONS',
    categorySlug: 'destinations',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    date: '2025-02-06T10:00:00Z',
    author: 'Emma Carson',
    authorSlug: 'emma-carson',
    title: 'Best Solo Female Travel Destinations for Beginners',
    slug: 'best-destinations-solo-female-beginners',
    excerpt: 'Safe, friendly countries perfect for your first solo travel adventure.',
  },
  {
    id: 6,
    category: 'TRAVEL TIPS',
    categorySlug: 'travel-tips',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    date: '2025-01-10T10:00:00Z',
    author: 'Emma Carson',
    authorSlug: 'emma-carson',
    title: 'How to Make Friends While Traveling Solo',
    slug: 'make-friends-traveling-solo',
    excerpt: 'Tips for meeting people and building connections on your solo journey.',
  },
];

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const { slug } = await params;
  // In production, fetch author data based on slug
  return generateAuthorMetadata(authorData.name, authorData.bio, authorData.slug);
}

const AuthorPage = async ({ params }: AuthorPageProps) => {
  const { slug } = await params;
  // TODO: Fetch author data based on slug from API

  const authorSchema = generateAuthorSchema(authorData);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Authors', url: '/authors' },
    { name: authorData.name, url: `/author/${authorData.slug}` },
  ]);

  const itemListSchema = generateItemListSchema(
    posts.map((post) => ({
      name: post.title,
      url: `/blog/${post.slug}`,
      description: post.excerpt,
    })),
    `Articles by ${authorData.name}`,
  );

  return (
    <>
      {/* JSON-LD Schemas */}
      <JsonLd data={authorSchema} id="author-schema" />
      <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
      <JsonLd data={itemListSchema} id="itemlist-schema" />

      {/* Breadcrumbs */}
      <Breadcrumbs>
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="text-foreground"
        >
          <span itemProp="name">{authorData.name}</span>
          <meta itemProp="position" content="3" />
        </li>
      </Breadcrumbs>

      <main
        id="main-content"
        className="custom-container py-10"
        itemScope
        itemType="https://schema.org/ProfilePage"
      >
        <section
          aria-labelledby="author-info-heading"
          className="section-bottom flex lg:flex-row flex-col items-start lg:gap-6 gap-12"
        >
          <h2 id="author-info-heading" className="sr-only">
            Author Information
          </h2>

          {/* Sidebar */}
          <aside className="lg:w-1/6 w-full" aria-label="Author profile sidebar">
            {/* Author Image */}
            <figure
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
              className="relative rounded-full size-[120px] mb-5 mx-auto"
            >
              <Image
                src={authorData.image}
                alt={`${authorData.name} - ${authorData.jobTitle}`}
                itemProp="url"
                priority
                fill
                sizes="120px"
                className="absolute object-cover rounded-full"
              />
            </figure>

            {/* Author Info */}
            <div
              className="md:mb-10 mb-5 md:pb-10 pb-5 border-b"
              itemScope
              itemType="https://schema.org/Person"
            >
              <h1
                itemProp="name"
                className="text-foreground font-semibold text-xl text-center mb-1"
              >
                {authorData.name}
              </h1>
              <p itemProp="jobTitle" className="text-muted-foreground text-center text-sm mb-2">
                {authorData.jobTitle}
              </p>
              <p
                itemProp="address"
                className="text-muted-foreground text-center text-sm flex items-center justify-center gap-1"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {authorData.location}
              </p>

              {/* Social Links */}
              {authorData.social && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  {authorData.social.instagram && (
                    <Link
                      href={authorData.social.instagram}
                      aria-label={`Follow ${authorData.name} on Instagram`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      itemProp="sameAs"
                    >
                      <FaInstagram size={18} aria-hidden="true" />
                    </Link>
                  )}
                  {authorData.social.twitter && (
                    <Link
                      href={authorData.social.twitter}
                      aria-label={`Follow ${authorData.name} on Twitter`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      itemProp="sameAs"
                    >
                      <FaXTwitter size={18} aria-hidden="true" />
                    </Link>
                  )}
                  {authorData.social.pinterest && (
                    <Link
                      href={authorData.social.pinterest}
                      aria-label={`Follow ${authorData.name} on Pinterest`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      itemProp="sameAs"
                    >
                      <FaPinterest size={18} aria-hidden="true" />
                    </Link>
                  )}
                  {authorData.social.facebook && (
                    <Link
                      href={authorData.social.facebook}
                      aria-label={`Follow ${authorData.name} on Facebook`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      itemProp="sameAs"
                    >
                      <FaFacebook size={18} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              )}

              {/* Hidden metadata */}
              <meta itemProp="email" content={authorData.email} />
              <meta itemProp="url" content={`${siteConfig.url}/author/${authorData.slug}`} />
            </div>

            <Categories />
          </aside>

          {/* Main Content */}
          <div className="lg:w-5/6 w-full lg:border-l lg:pl-6">
            {/* Author Bio */}
            <header className="mb-10">
              <h2 className="text-3xl text-foreground font-bold mb-4">
                Hi, I&apos;m {authorData.name}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">{authorData.bio}</p>

              {/* Stats */}
              <div className="flex items-center gap-6 mt-6 text-sm">
                <div>
                  <span className="font-bold text-foreground text-xl">{authorData.totalPosts}</span>
                  <span className="text-muted-foreground ml-1">Articles</span>
                </div>
                <div className="h-4 w-px bg-border" aria-hidden="true" />
                <div>
                  <span className="text-muted-foreground">
                    Writing since {new Date(authorData.joinDate).getFullYear()}
                  </span>
                </div>
              </div>
            </header>

            {/* Articles Section */}
            <section aria-labelledby="author-articles-heading">
              <h3 id="author-articles-heading" className="text-2xl text-foreground font-bold mb-6">
                Articles by {authorData.name}
              </h3>

              {/* Posts List */}
              <div className="flex-1 space-y-14 mb-10">
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
            </section>
          </div>
        </section>

        <Subscribe />
      </main>
    </>
  );
};

export default AuthorPage;
