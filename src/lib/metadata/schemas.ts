import type {
  BlogPostingSchema,
  BreadcrumbListSchema,
  CollectionPageSchema,
  FAQPageSchema,
  HowToSchema,
  ItemListSchema,
  OrganizationSchema,
  PersonSchema,
  ReviewSchema,
  WebSiteSchema,
} from '@/components/JsonLd';
import type { BlogPost } from '@/types/metadata';
import { siteConfig } from './site-config';

/**
 * Generate Organization schema for the website
 */
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
    },
    sameAs: [siteConfig.links.twitter, siteConfig.links.instagram, siteConfig.links.pinterest],
  };
}

/**
 * Generate Person schema for the author
 */
export function generatePersonSchema(): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.creator.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/author.jpg`,
  };
}

/**
 * Generate WebSite schema with search functionality
 */
export function generateWebsiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: generateOrganizationSchema(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate BlogPosting schema for blog articles
 */
export function generateBlogPostingSchema(post: BlogPost): BlogPostingSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}${post.image}`,
      alt: post.imageAlt || post.title,
    },
    author: generatePersonSchema(),
    publisher: generateOrganizationSchema(),
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate || post.publishedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'en-US',
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Generate CollectionPage schema for category pages
 */
export function generateCollectionPageSchema(
  category: string,
  description: string,
): CollectionPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category,
    description: description,
    url: `${siteConfig.url}/${category}`,
    publisher: generateOrganizationSchema(),
    inLanguage: 'en-US',
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate ItemList schema for lists
 */
export function generateItemListSchema(
  items: Array<{ name: string; url: string; description?: string }>,
  listName: string,
): ItemListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${siteConfig.url}${item.url}`,
      description: item.description,
    })),
  };
}

/**
 * Generate HowTo schema for guides
 */
export function generateHowToSchema(
  title: string,
  description: string,
  steps: Array<{ name: string; text: string; image?: string }>,
): HowToSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image ? `${siteConfig.url}${step.image}` : undefined,
    })),
  };
}

/**
 * Generate Review schema
 */
export function generateReviewSchema(
  itemName: string,
  rating: number,
  reviewBody: string,
  author: string = siteConfig.creator.name,
): ReviewSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Thing',
      name: itemName,
    },
    author: {
      '@type': 'Person',
      name: author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: 5,
    },
    reviewBody: reviewBody,
  };
}

/**
 * Generate schema for contact page
 */
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${siteConfig.name}`,
    description: `Contact page for ${siteConfig.name} - Your trusted solo female travel companion`,
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      description: siteConfig.branding.tagline,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: siteConfig.contact.email,
          contactType: 'Customer Service',
          availableLanguage: ['English'],
        },
        {
          '@type': 'ContactPoint',
          email: siteConfig.contact.supportEmail,
          contactType: 'Technical Support',
          availableLanguage: ['English'],
        },
        {
          '@type': 'ContactPoint',
          email: siteConfig.contact.businessEmail,
          contactType: 'Sales',
          availableLanguage: ['English'],
        },
      ],
      sameAs: [
        siteConfig.social.instagram.url,
        siteConfig.social.facebook.url,
        siteConfig.social.pinterest.url,
        siteConfig.social.twitter.url,
        siteConfig.social.tiktok.url,
      ],
    },
  };
}

/**
 * Generate schema for search page
 */
export function generateSearchPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: `Search ${siteConfig.name}`,
    description: `Search page for ${siteConfig.name} - Find solo female travel guides and destination information`,
    url: `${siteConfig.url}/search`,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };
}

/**
 * Generate WebPage schema for static pages
 */
export function generateWebPageSchema(pageName: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageName,
    description: description,
    url: `${siteConfig.url}${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      '@type': 'Organization',
      name: siteConfig.name,
      description: siteConfig.branding.mission,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };
}
