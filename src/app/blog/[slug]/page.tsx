import { JsonLd } from "@/components/JsonLd";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { touristCarryingLuggage } from "@/lib/assets";
import {
	type BlogPost,
	generateBlogPostMetadata,
	generateBlogPostingSchema,
	generateBreadcrumbSchema,
	generateFAQSchema,
	siteConfig,
} from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
}

async function getPost(slug: string): Promise<BlogPost> {
	return {
		title: "Best Places to Travel Solo Female in the US",
		description:
			"17 safest and most inspiring US destinations for solo female travelers.",
		slug: slug,
		author: "Your Name",
		publishedDate: "2025-02-12T10:00:00Z",
		modifiedDate: "2025-02-15T14:30:00Z",
		category: "Destinations",
		tags: ["USA", "North America", "Solo Travel", "Safety"],
		image: "/blog/us-destinations.jpg",
		imageAlt: "Beautiful US destinations for solo female travelers",
		readingTime: "12 min",
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
		{ name: "Home", url: "/" },
		{ name: "Blog", url: "/blog" },
		{ name: post.title, url: `/blog/${post.slug}` },
	]);

	// Optional: Add FAQ schema if the post has FAQs
	const faqSchema = generateFAQSchema([
		{
			question: "Is the US safe for solo female travelers?",
			answer:
				"Yes, the US is generally safe for solo female travelers with proper precautions.",
		},
		{
			question: "What are the best cities for solo female travel in the US?",
			answer:
				"Top cities include Portland, Austin, San Francisco, and Charleston.",
		},
	]);

	return (
		<>
			<JsonLd data={blogPostSchema} id="blog-post-schema" />
			<JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
			<JsonLd data={faqSchema} id="faq-schema" />

			{/* BREADCRUMBS */}
			<nav
				aria-label="Breadcrumb"
				className="custom-container bg-soft-linen py-3 border-b"
			>
				<ol
					itemScope
					itemType="https://schema.org/BreadcrumbList"
					className="flex items-center gap-1.5 font-medium text-foreground text-xs"
				>
					<li
						itemProp="itemListElement"
						itemScope
						itemType="https://schema.org/ListItem"
					>
						<Link href="/" itemProp="item">
							<span itemProp="name">Home</span>
						</Link>
						<meta itemProp="position" content="1" />
					</li>
					<li>
						<IoChevronForwardOutline className="size-3.5" aria-hidden="true" />
					</li>
					<li
						itemProp="itemListElement"
						itemScope
						itemType="https://schema.org/ListItem"
					>
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
					>
						<span itemProp="name">
							10 Simple Habits To Build A More Joyful And Fulfilling Life
						</span>
						<meta itemProp="position" content="3" />
					</li>
				</ol>
			</nav>

			<main className="custom-container">
				<article
					itemScope
					itemType="https://schema.org/BlogPosting"
					className="mb-10 mt-10"
				>
					{/* Article Header */}
					<header className="flex flex-col items-center justify-center gap-2.5">
						<div className="flex items-center gap-2.5">
							{/* Category */}
							<div className="px-4 pt-1.5 pb-2 bg-foreground rounded-full">
								<Link
									href="/destinations"
									rel="category tag"
									className="text-xs font-semibold text-background"
								>
									Destinations
								</Link>
							</div>

							<div className="h-5 w-[1px] bg-border" aria-hidden="true" />

							{/* Publish Date */}
							<time
								dateTime="2022-02-22T10:00:00Z"
								itemProp="datePublished"
								className="text-foreground font-semibold text-xs"
							>
								{format(new Date("2022-02-22"), "MMMM d, yyyy")}
							</time>

							<div className="h-5 w-[1px] bg-border" aria-hidden="true" />

							{/* Read time */}
							<p
								className="text-foreground font-semibold text-xs"
								aria-label="Reading time"
							>
								4 MINS READ
							</p>
						</div>

						{/* Main Heading */}
						<h1
							itemProp="headline"
							className="text-foreground font-bold text-4xl text-center px-60 my-3.5"
						>
							{post.title}
						</h1>

						{/* Author Info */}
						<div
							itemProp="author"
							itemScope
							itemType="https://schema.org/Person"
							className="flex items-center justify-center gap-1.5"
						>
							<Avatar>
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="Ralph Edwards profile picture"
									itemProp="image"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<p className="text-foreground font-semibold text-[13px]">
								<span className="text-foreground/60 font-medium">Post by</span>{" "}
								<Link href="/author/ralph-edwards" itemProp="url">
									<span itemProp="name">Ralph Edwards</span>
								</Link>
							</p>
						</div>
					</header>

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
						<aside aria-label="Share this post" className="w-[15%]">
							<p className="text-foreground font-bold text-[15px] mb-3">
								Share This Post
							</p>

							<div className="space-y-2">
								<Link
									href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
									aria-label="Share on Facebook"
									rel="noopener noreferrer"
									target="_blank"
									className={cn(
										buttonVariants({ variant: "outline" }),
										"font-semibold w-full py-4 text-sm cursor-pointer bg-background dark:bg-soft-linen",
									)}
								>
									<FaFacebook aria-hidden="true" />
									Facebook
								</Link>
								<Link
									href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
									aria-label="Share on Twitter"
									rel="noopener noreferrer"
									target="_blank"
									className={cn(
										buttonVariants({ variant: "outline" }),
										"font-semibold w-full py-4 text-sm cursor-pointer bg-background dark:bg-soft-linen",
									)}
								>
									<BsTwitterX aria-hidden="true" />
									Twitter
								</Link>
								<Link
									href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(post.title)}`}
									aria-label="Share on Pinterest"
									rel="noopener noreferrer"
									target="_blank"
									className={cn(
										buttonVariants({ variant: "outline" }),
										"font-semibold w-full py-4 text-sm cursor-pointer bg-background dark:bg-soft-linen",
									)}
								>
									<FaPinterest aria-hidden="true" />
									Pinterest
								</Link>
							</div>
						</aside>

						{/* Article body */}
						{/* 	<div itemProp="articleBody" className="w-[85%]">
							<div
								dangerouslySetInnerHTML={{ __html: post.content }}
								className="prose prose-sm max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-foreground prose-p:leading-7 prose-a:text-primary prose-a:underline hover:prose-a:no-underline prose-img:rounded-lg prose-img:shadow-md"
							/>
						</div> */}
						<div itemProp="articleBody" className="w-[85%]">
							<p className="text-foreground leading-6 text-sm">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolores, ullam est. Laboriosam, nulla officiis enim voluptas
								dolores facere tempore ea quis! Voluptatum eos quo harum id
								natus repellendus labore aspernatur?Lorem ipsum dolor sit amet
								consectetur, adipisicing elit. Dolores, ullam est. Laboriosam,
								nulla officiis enim voluptas dolores facere tempore ea quis!
								Voluptatum eos quo harum id natus repellendus labore
								aspernatur?Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Dolores, ullam est. Laboriosam, nulla officiis enim
								voluptas dolores facere tempore ea quis! Voluptatum eos quo
								harum id natus repellendus labore aspernatur?Lorem ipsum dolor
								sit amet consectetur, adipisicing elit. Dolores, ullam est.
								Laboriosam, nulla officiis enim voluptas dolores facere tempore
								ea quis! Voluptatum eos quo harum id natus repellendus labore
								aspernatur?Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Dolores, ullam est. Laboriosam, nulla officiis enim
								voluptas dolores facere tempore ea quis! Voluptatum eos quo
								harum id natus repellendus labore aspernatur?
							</p>
						</div>
					</div>

					{/* Article Footer Metadata  */}
					<footer>
						<meta itemProp="dateModified" content={post.modifiedDate} />
						<meta itemProp="wordCount" content="1250" />
						<div
							itemProp="publisher"
							itemScope
							itemType="https://schema.org/Organization"
						>
							<meta itemProp="name" content="DROZY" />
							<div
								itemProp="logo"
								itemScope
								itemType="https://schema.org/ImageObject"
							>
								<meta
									itemProp="url"
									content="https://yourdomain.com/logo.png"
								/>
							</div>
						</div>
					</footer>
				</article>

				{/* AUTHOR BIO */}
				<aside
					aria-labelledby="author-heading"
					className="w-[80%] mx-auto mb-10"
				>
					<h2
						id="author-heading"
						className="text-foreground font-bold text-[22px] mb-5"
					>
						About The Author
					</h2>
					<div
						itemScope
						itemType="https://schema.org/Person"
						className="flex items-start gap-14"
					>
						<div>
							<Avatar className="size-20 mx-auto mb-2.5">
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="Emma Carlson"
									itemProp="image"
								/>
								<AvatarFallback>EC</AvatarFallback>
							</Avatar>

							<h3 className="text-foreground font-semibold text-center text-[15px]">
								<Link href="/author/emma-carlson" itemProp="url">
									<span itemProp="name">Emma Carlson</span>
								</Link>
							</h3>
							<p
								className="text-muted-foreground text-xs font-medium text-center"
								itemProp="address"
								itemScope
								itemType="https://schema.org/PostalAddress"
							>
								<span itemProp="addressLocality">Portland</span>,{" "}
								<span itemProp="addressCountry">USA</span>
							</p>
						</div>
						<div className="flex-1">
							<p
								itemProp="description"
								className="text-muted-foreground text-sm"
							>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
								unde laudantium earum atque, cum cumque doloribus reprehenderit
								maxime, natus architecto obcaecati soluta explicabo laboriosam
								illum in voluptatum tempore ducimus quo?
							</p>
						</div>
					</div>
				</aside>

				{/* POST NAVIGATION */}
				<nav
					aria-label="Post navigation"
					className="w-[80%] h-32 flex items-center bg-background dark:bg-soft-linen border rounded-lg mx-auto mb-28"
				>
					<Link href="/previous-post" rel="prev" className="group px-10 flex-1">
						<span className="text-sm font-bold text-foreground underline">
							Previous
						</span>
						<h3 className="text-lg mt-2 font-bold text-foreground group-hover:underline">
							How to Blog Productive While Working From Home
						</h3>
					</Link>
					<div className="bg-border h-full w-[1px]" />
					<Link
						href="/next-post"
						rel="next"
						className="group text-right flex-1 px-10"
					>
						<span className="text-sm font-bold text-foreground underline">
							Next
						</span>
						<h3 className="text-lg mt-2 font-bold text-foreground group-hover:underline">
							How to Blog Productive While Working From Home
						</h3>
					</Link>
				</nav>

				{/*  RELATED POSTS  */}
				<section aria-labelledby="related-posts-heading" className="mb-16">
					<h2
						id="related-posts-heading"
						className="text-foreground font-bold text-[22px] mb-4"
					>
						Related Posts
					</h2>

					<div
						className="grid gap-3"
						style={{ gridTemplateColumns: "1fr 1px 1fr 1px 1fr 1px 1fr" }}
					>
						<article itemScope itemType="https://schema.org/BlogPosting">
							<Link href="/blog/related-post-1" itemProp="url">
								<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
									<Image
										src={touristCarryingLuggage}
										alt="Best places to travel solo female in us"
										fill
										className="absolute object-cover transition-all duration-300 hover:scale-110"
										itemProp="image"
										placeholder="blur"
										loading="lazy"
									/>

									<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
										<p className="text-[11px] text-white font-semibold uppercase">
											Travel
										</p>
									</div>
								</div>
							</Link>

							<div className="flex items-center gap-0 mt-4 mb-1">
								<time
									dateTime="2022-02-22T10:00:00Z"
									itemProp="datePublished"
									className="text-[10px] font-semibold text-foreground"
								>
									{format(new Date("2022-02-22"), "MMMM d, yyyy")}
								</time>
								<RxDividerVertical
									className="text-foreground font-bold rotate-12"
									aria-hidden="true"
								/>
								<div
									itemProp="author"
									itemScope
									itemType="https://schema.org/Person"
								>
									<Link
										href="/author/maya-pena"
										className="text-[10px] text-foreground font-semibold"
									>
										<span className="text-muted-foreground">POST BY</span>{" "}
										<span itemProp="name">MAYA PENA</span>
									</Link>
								</div>
							</div>

							<h3 itemProp="headline" className="post-title leading-6 text-lg">
								<Link href="/blog/related-post-1">
									Best places to travel solo female in us
								</Link>
							</h3>
						</article>

						<Separator
							orientation="vertical"
							className="h-full"
							aria-hidden="true"
						/>

						<article itemScope itemType="https://schema.org/BlogPosting">
							<Link href="/blog/related-post-1" itemProp="url">
								<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
									<Image
										src={touristCarryingLuggage}
										alt="Best places to travel solo female in us"
										fill
										className="absolute object-cover transition-all duration-300 hover:scale-110"
										itemProp="image"
										placeholder="blur"
										loading="lazy"
									/>

									<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
										<p className="text-[11px] text-white font-semibold uppercase">
											Travel
										</p>
									</div>
								</div>
							</Link>

							<div className="flex items-center gap-0 mt-4 mb-1">
								<time
									dateTime="2022-02-22T10:00:00Z"
									itemProp="datePublished"
									className="text-[10px] font-semibold text-foreground"
								>
									{format(new Date("2022-02-22"), "MMMM d, yyyy")}
								</time>
								<RxDividerVertical
									className="text-foreground font-bold rotate-12"
									aria-hidden="true"
								/>
								<div
									itemProp="author"
									itemScope
									itemType="https://schema.org/Person"
								>
									<Link
										href="/author/maya-pena"
										className="text-[10px] text-foreground font-semibold"
									>
										<span className="text-muted-foreground">POST BY</span>{" "}
										<span itemProp="name">MAYA PENA</span>
									</Link>
								</div>
							</div>

							<h3 itemProp="headline" className="post-title leading-6 text-lg">
								<Link href="/blog/related-post-1">
									Best places to travel solo female in us
								</Link>
							</h3>
						</article>

						<Separator
							orientation="vertical"
							className="h-full"
							aria-hidden="true"
						/>

						<article itemScope itemType="https://schema.org/BlogPosting">
							<Link href="/blog/related-post-1" itemProp="url">
								<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
									<Image
										src={touristCarryingLuggage}
										alt="Best places to travel solo female in us"
										fill
										className="absolute object-cover transition-all duration-300 hover:scale-110"
										itemProp="image"
										placeholder="blur"
										loading="lazy"
									/>

									<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
										<p className="text-[11px] text-white font-semibold uppercase">
											Travel
										</p>
									</div>
								</div>
							</Link>

							<div className="flex items-center gap-0 mt-4 mb-1">
								<time
									dateTime="2022-02-22T10:00:00Z"
									itemProp="datePublished"
									className="text-[10px] font-semibold text-foreground"
								>
									{format(new Date("2022-02-22"), "MMMM d, yyyy")}
								</time>
								<RxDividerVertical
									className="text-foreground font-bold rotate-12"
									aria-hidden="true"
								/>
								<div
									itemProp="author"
									itemScope
									itemType="https://schema.org/Person"
								>
									<Link
										href="/author/maya-pena"
										className="text-[10px] text-foreground font-semibold"
									>
										<span className="text-muted-foreground">POST BY</span>{" "}
										<span itemProp="name">MAYA PENA</span>
									</Link>
								</div>
							</div>

							<h3 itemProp="headline" className="post-title leading-6 text-lg">
								<Link href="/blog/related-post-1">
									Best places to travel solo female in us
								</Link>
							</h3>
						</article>

						<Separator
							orientation="vertical"
							className="h-full"
							aria-hidden="true"
						/>

						<article itemScope itemType="https://schema.org/BlogPosting">
							<Link href="/blog/related-post-1" itemProp="url">
								<div className="relative w-full h-[170px] rounded-lg overflow-hidden">
									<Image
										src={touristCarryingLuggage}
										alt="Best places to travel solo female in us"
										fill
										className="absolute object-cover transition-all duration-300 hover:scale-110"
										itemProp="image"
										placeholder="blur"
										loading="lazy"
									/>

									<div className="absolute top-3 left-3 bg-foreground/20 backdrop-blur-md px-4 py-1.5 rounded-full z-20">
										<p className="text-[11px] text-white font-semibold uppercase">
											Travel
										</p>
									</div>
								</div>
							</Link>

							<div className="flex items-center gap-0 mt-4 mb-1">
								<time
									dateTime="2022-02-22T10:00:00Z"
									itemProp="datePublished"
									className="text-[10px] font-semibold text-foreground"
								>
									{format(new Date("2022-02-22"), "MMMM d, yyyy")}
								</time>
								<RxDividerVertical
									className="text-foreground font-bold rotate-12"
									aria-hidden="true"
								/>
								<div
									itemProp="author"
									itemScope
									itemType="https://schema.org/Person"
								>
									<Link
										href="/author/maya-pena"
										className="text-[10px] text-foreground font-semibold"
									>
										<span className="text-muted-foreground">POST BY</span>{" "}
										<span itemProp="name">MAYA PENA</span>
									</Link>
								</div>
							</div>

							<h3 itemProp="headline" className="post-title leading-6 text-lg">
								<Link href="/blog/related-post-1">
									Best places to travel solo female in us
								</Link>
							</h3>
						</article>
					</div>
				</section>
			</main>
		</>
	);
}
