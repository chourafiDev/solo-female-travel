import { JsonLd } from '@/components/JsonLd';
import Breadcrumbs from '@/components/breadcrumbs';
import ArticleHeader from '@/features/blog/components/article-header';
import AuthorBio from '@/features/blog/components/author-bio';
import PostNavigation from '@/features/blog/components/post-navigation';
import RelatedPosts from '@/features/blog/components/related-posts';
import SocialShareButtons from '@/features/blog/components/social-share-buttons';
import {
  type BlogPost,
  generateBlogPostMetadata,
  generateBlogPostingSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IoChevronForwardOutline } from 'react-icons/io5';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPost(slug: string): Promise<BlogPost> {
  return {
    title: 'Best Places to Travel Solo Female in the US',
    description: '17 safest and most inspiring US destinations for solo female travelers.',
    slug: slug,
    author: 'Your Name',
    publishedDate: '2025-02-12T10:00:00Z',
    modifiedDate: '2025-02-15T14:30:00Z',
    category: 'Destinations',
    tags: ['USA', 'North America', 'Solo Travel', 'Safety'],
    image: '/blog/us-destinations.jpg',
    imageAlt: 'Beautiful US destinations for solo female travelers',
    readingTime: '12 min',
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPost(slug);
  return generateBlogPostMetadata(post);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return notFound();

  const blogPostSchema = generateBlogPostingSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  // Optional: Add FAQ schema if the post has FAQs
  const faqSchema = generateFAQSchema([
    {
      question: 'Is the US safe for solo female travelers?',
      answer: 'Yes, the US is generally safe for solo female travelers with proper precautions.',
    },
    {
      question: 'What are the best cities for solo female travel in the US?',
      answer: 'Top cities include Portland, Austin, San Francisco, and Charleston.',
    },
  ]);

  return (
    <>
      <JsonLd data={blogPostSchema} id="blog-post-schema" />
      <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />

      {/* Breadcrumbs */}
      <Breadcrumbs>
        <>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/category/lifestyle" itemProp="item">
              <span itemProp="name">Lifestyle</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li>
            <IoChevronForwardOutline className="size-3.5" aria-hidden="true" />
          </li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="text-foreground"
          >
            <span itemProp="name">10 Simple Habits To Build A More Joyful And Fulfilling Life</span>
            <meta itemProp="position" content="3" />
          </li>
        </>
      </Breadcrumbs>

      <main className="custom-container">
        <article itemScope itemType="https://schema.org/BlogPosting" className="mb-10 mt-10">
          {/* Article Header */}
          <ArticleHeader title={post.title} />

          {/* Featured Image */}
          <figure
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
            className="my-8"
          >
            <Image
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940"
              alt={post.imageAlt || post.title}
              width="1200"
              height="630"
              itemProp="url"
              priority
              className="object-cover rounded-xl"
            />

            <meta itemProp="width" content="1200" />
            <meta itemProp="height" content="630" />
          </figure>

          <div className="flex items-start gap-10 w-[80%] mx-auto">
            {/* Social Share Buttons */}
            <SocialShareButtons post={post} />

            {/* Article body */}
            {/* 	
							<div
								dangerouslySetInnerHTML={{ __html: post.content }}
								className="prose prose-sm max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-foreground prose-p:leading-7 prose-a:text-primary prose-a:underline hover:prose-a:no-underline prose-img:rounded-lg prose-img:shadow-md"
							/>
						</div> */}
            <div itemProp="articleBody" className="w-[85%]">
              <p className="text-foreground leading-6 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ullam est.
                Laboriosam, nulla officiis enim voluptas dolores facere tempore ea quis! Voluptatum
                eos quo harum id natus repellendus labore aspernatur?Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Dolores, ullam est. Laboriosam, nulla officiis enim
                voluptas dolores facere tempore ea quis! Voluptatum eos quo harum id natus
                repellendus labore aspernatur?Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Dolores, ullam est. Laboriosam, nulla officiis enim voluptas dolores facere
                tempore ea quis! Voluptatum eos quo harum id natus repellendus labore
                aspernatur?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ullam
                est. Laboriosam, nulla officiis enim voluptas dolores facere tempore ea quis!
                Voluptatum eos quo harum id natus repellendus labore aspernatur?Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Dolores, ullam est. Laboriosam, nulla
                officiis enim voluptas dolores facere tempore ea quis! Voluptatum eos quo harum id
                natus repellendus labore aspernatur?
              </p>
            </div>
          </div>

          {/* Article Footer Metadata  */}
          <footer>
            <meta itemProp="dateModified" content={post.modifiedDate} />
            <meta itemProp="wordCount" content="1250" />
            <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="DROZY" />
              <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                <meta itemProp="url" content="https://yourdomain.com/logo.png" />
              </div>
            </div>
          </footer>
        </article>

        {/* AUTHOR BIO */}
        <AuthorBio />

        {/* POST NAVIGATION */}
        <PostNavigation />

        {/*  RELATED POSTS  */}
        <RelatedPosts />
      </main>
    </>
  );
}
