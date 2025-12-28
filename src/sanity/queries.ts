import { defineQuery } from "next-sanity";
import { clientFetch } from "./lib/client";

/* Get All Categories */
export const ALL_CATEGORIES_QUERY = defineQuery(`*[
  _type == "category"
] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  image
}`);

export const getAllCategories = async () => {
	return await clientFetch({
		query: ALL_CATEGORIES_QUERY,
	});
};

/* Get All Posts with Optional Search and Category Filtering */
export const ALL_POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    ($searchTerm == "" || (
      title match $searchTerm ||
      excerpt match $searchTerm ||
      pt::text(body) match $searchTerm
    )) &&
    ($categorySlug == "" || category->slug.current == $categorySlug)
  ] | order(publishedAt desc){
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    isFeatured,
    body,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    category->{
      title,
      "slug": slug.current
    },
    author->{
      name,
      image,
      "slug": slug.current,
      bio
    },
  }
`);

export const getAllPosts = async ({
	searchTerm,
	categorySlug,
	quantity,
}: {
	searchTerm?: string;
	categorySlug?: string;
	quantity?: number;
} = {}) => {
	const posts = await clientFetch({
		query: ALL_POSTS_QUERY,
		params: {
			searchTerm: searchTerm ? `*${searchTerm}*` : "",
			categorySlug: categorySlug ?? "",
		},
	});

	return quantity ? posts.slice(0, quantity) : posts;
};

/* Get All isFeatured Posts */
export const IS_FEATURED_POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    isFeatured == true
  ] | order(publishedAt desc){
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    isFeatured,
    body,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    category->{
      title,
      "slug": slug.current
    },
    author->{
      name,
      image,
      "slug": slug.current,
      bio
    }
  }
`);

export const getIsFeaturedPosts = async ({
	quantity,
}: {
	quantity?: number;
} = {}) => {
	const posts = await clientFetch({
		query: IS_FEATURED_POSTS_QUERY,
	});

	return quantity ? posts.slice(0, quantity) : posts;
};

/* Get All isTrending Posts */
export const IS_TRENDING_POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    isTrending == true
  ] | order(publishedAt desc){
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    isTrending,
    body,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    category->{
      title,
      "slug": slug.current
    },
    author->{
      name,
      image,
      "slug": slug.current,
      bio
    }
  }
`);

export const getIsTrendingPosts = async ({
	quantity,
}: {
	quantity?: number;
} = {}) => {
	const posts = await clientFetch({
		query: IS_TRENDING_POSTS_QUERY,
	});

	return quantity ? posts.slice(0, quantity) : posts;
};

/* Get Post */
const POST_QUERY = defineQuery(`*[_type=='post' && slug.current == $slug][0]{
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "author": author->{
      name,
      "slug": slug.current,
      image{
        asset->{
          _id,
          url
        },
        alt
      },
      bio
    },
    "category": category->{
      title,
      "slug": slug.current
    },
    mainImage{
      asset->{
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    body[]{
      ...,
      _type == "faqBlock" => {
        _type,
        title,
        faqs[]{
          question,
          answer
        }
      },
      _type == "image" => {
        ...,
        asset->
      }
    },
    "wordCount": length(pt::text(body)),
    "readingTime": round(length(pt::text(body)) / 5 / 180)
}`);

export const getPost = async (slug: string) => {
	return await clientFetch({
		query: POST_QUERY,
		params: { slug },
	});
};

/* Get Posts By Category */
const POSTS_BY_CATEGORY = defineQuery(`*[
  _type == "post" && 
  category->slug.current == $category
] | order(publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  isFeatured,
  body,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  category->{
    title,
    "slug": slug.current
  },
  author->{
      name,
      image,
      "slug": slug.current,
      bio
    },
}`);

export const getPostsByCategory = async (
	category: string,
	quantity?: number,
) => {
	const posts = await clientFetch({
		query: POSTS_BY_CATEGORY,
		params: {
			category,
		},
	});

	return quantity ? posts.slice(0, quantity) : posts;
};

/* Get Related Posts */
export const RELATED_POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    slug.current != $slug &&
    category->slug.current == $categorySlug
  ] | order(publishedAt desc){
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    isFeatured,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    category->{
      title,
      "slug": slug.current
    },
    author->{
      name,
      image,
      "slug": slug.current,
      bio
    },
  }
`);

export const getRelatedPosts = async ({
	slug,
	categorySlug,
}: {
	slug: string;
	categorySlug: string;
}) => {
	return await clientFetch({
		query: RELATED_POSTS_QUERY,
		params: { slug, categorySlug },
	});
};

/* Get Categories With Post Count */
export const GET_CATEGORIES_WITH_COUNT_QUERY = defineQuery(`
  *[_type == "category"]{
    title,
    "slug": slug.current,
    image,
    "count": count(*[_type == "post" && category._ref == ^._id && defined(slug.current)])
  } | order(count desc)
`);

export const getCategoriesWithPostCount = async () => {
	return await clientFetch({
		query: GET_CATEGORIES_WITH_COUNT_QUERY,
	});
};

/* Author profile + their latest posts */
export const AUTHOR_WITH_POSTS_QUERY = defineQuery(`
*[_type == "author" && slug.current == $authorSlug][0]{
  name,
  "slug": slug.current,
  bio,
  image{
    asset->{ _id, url },
    alt
  },
  "posts": *[
    _type == "post" &&
    references(^._id)
  ] | order(coalesce(publishedAt, _createdAt) desc){
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    isFeatured,
    mainImage{
      asset->{ _id, url },
      alt
    },
    category->{
      title,
      "slug": slug.current
    },
    author->{
      name,
      image{
        asset->{ _id, url },
        alt
      },
      "slug": slug.current,
      bio
    }
  }
}
`);

export const getAuthorWithPosts = async ({
	authorSlug,
}: {
	authorSlug: string;
}) => {
	return clientFetch({
		query: AUTHOR_WITH_POSTS_QUERY,
		params: { authorSlug },
	});
};

/* Get All Authors */
export const ALL_AUTHORS_QUERY = defineQuery(`*[
  _type == "author"
] | order(name asc) {
  _id,
  name,
  "slug": slug.current,
  bio,
  image {
    asset -> {
      _id,
      url
    },
    alt
  },
}`);

export const getAllAuthors = async () => {
	return await clientFetch({
		query: ALL_AUTHORS_QUERY,
	});
};

/* Get Previous Post */
const PREVIOUS_POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    "previousPost": *[_type == "post" && _updatedAt < ^._updatedAt && publishedAt <= now()] 
    | order(_updatedAt desc)[0] {
      title,
      "slug": slug.current,
      publishedAt,
      _updatedAt
    }
  }.previousPost
`);

/* Get Next Post */
const NEXT_POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    "nextPost": *[_type == "post" && _updatedAt > ^._updatedAt && publishedAt <= now()] 
    | order(_updatedAt asc)[0] {
      title,
      "slug": slug.current,
      publishedAt,
      _updatedAt
    }
  }.nextPost
`);

export const getPreviousPost = async (slug: string) => {
	return await clientFetch({
		query: PREVIOUS_POST_QUERY,
		params: { slug },
	});
};

export const getNextPost = async (slug: string) => {
	return await clientFetch({
		query: NEXT_POST_QUERY,
		params: { slug },
	});
};
