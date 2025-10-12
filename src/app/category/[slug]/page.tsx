import { JsonLd } from "@/components/JsonLd";
import { Separator } from "@/components/ui/separator";
import Categories from "@/features/category/components/categories";
import RelatesPosts from "@/features/category/components/relates-posts";
import Search from "@/features/category/components/search";
import {
	generateBreadcrumbSchema,
	generateCategoryMetadata,
	generateCollectionPageSchema,
	siteConfig,
} from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxDividerVertical } from "react-icons/rx";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
	return generateCategoryMetadata(params.slug);
}

const CategoryPage = ({ params }: Props) => {
	const category =
		siteConfig.categories[params.slug as keyof typeof siteConfig.categories];

	if (!category) {
		return (
			<main className="custom-container my-10">
				<div className="py-44 bg-soft-linen rounded-xl flex justify-center items-center">
					<p className="text-foreground font-semibold text-lg">Category not found</p>
				</div>
			</main>
		);
	}

	const collectionSchema = generateCollectionPageSchema(
		category.title,
		category.description,
	);

	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: "Home", url: "/" },
		{ name: category.title, url: `/${category.slug}` },
	]);

	const posts = [
		{
			id: 1,
			category: "FASHION",
			image:
				"https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
			date: "FEBRUARY 19, 2025",
			author: "JANE COOPER",
			title: "10 How To Start Your Own Online Magazine",
		},
		{
			id: 2,
			category: "TRAVEL",
			image:
				"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
			date: "MARCH 25, 2025",
			author: "RALPH EDWARDS",
			title: "Exploring Europe On A Budget: 7 Must-Visit Cities",
		},
		{
			id: 3,
			category: "FOOD",
			image:
				"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
			date: "APRIL 15, 2025",
			author: "THERESA WEBB",
			title: "Easy One-Pot Dinners For Busy Weeknights",
		},
		{
			id: 4,
			category: "FOOD",
			image:
				"https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
			date: "JANUARY 10, 2025",
			author: "WADE WARREN",
			title:
				"Finding Focus World: How To Stay Centered In The Age Of Distraction",
		},
		{
			id: 5,
			category: "MINDFULNESS",
			image:
				"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
			date: "FEBRUARY 6, 2025",
			author: "DARRELL STEWARD",
			title: "How To Start Journaling For Mental Clarity",
		},
		{
			id: 6,
			category: "FITNESS",
			image:
				"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
			date: "JANUARY 10, 2025",
			author: "RALPH EDWARDS",
			title: "Home Workouts That Actually Work For Busy People Daily",
		},
	];
	return (
		<>
			<JsonLd data={collectionSchema} id="collection-schema" />
			<JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />

			<main className="custom-container">
				<article className="mt-10 mb-16 lg:w-[60%]">
					<div className="flex items-center gap-3">
						<h1 className="text-foreground font-marcellus text-4xl font-semibold">
							{category.slug}
						</h1>
						<div className="px-3 py-1 bg-foreground rounded-full">
							<p className="text-xs font-medium text-background">30 article</p>
						</div>
					</div>
					<p className="text-muted-foreground text-[15px] font-normal mt-4">
						{category.description}
					</p>
				</article>

				<section className="mb-10 grid grid-cols-[75%_1px_1fr] gap-5 items-start">
					<div className="space-y-6 mb-10">
						{posts.map((post, index) => (
							<React.Fragment key={post.id}>
								<BlogCard {...post} />
								{index < posts.length - 1 && <Separator />}
							</React.Fragment>
						))}
					</div>
					<Separator orientation="vertical" />
					<aside className="space-y-8">
						<Search />
						<Categories />
						<Separator />
						<RelatesPosts />
					</aside>
				</section>
			</main>
		</>
	);
};

export default CategoryPage;

const BlogCard = ({
	image,
	date,
	author,
	title,
}: {
	image: string;
	date: string;
	author: string;
	title: string;
}) => {
	return (
		<article className="group flex items-center gap-10">
			<Link href="" className="flex-1 h-full">
				<div className="relative w-full h-[250px] rounded-lg overflow-hidden">
					<Image
						src={image}
						alt={title}
						fill
						className="absolute object-cover transition-all duration-300 group-hover:scale-110"
					/>
				</div>
			</Link>

			<div className="flex-1">
				<div className="flex items-center gap-0 mb-4">
					<p className="text-xs font-bold text-foreground">{date}</p>
					<RxDividerVertical className="text-foreground font-bold rotate-12" />
					<Link href="/author" className="text-xs text-foreground font-bold">
						<span className="text-muted-foreground">POST BY</span> {author}
					</Link>
				</div>

				<div className="mb-8">
					<h3 className="post-title group-hover:underline text-2xl mb-3">
						<Link href="">{title}</Link>
					</h3>

					<p className="text-muted-foreground text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
						corporis vero magnam doloremque assumenda.
					</p>
				</div>

				<Link href="/" className="text-sm font-bold underline">
					Read More
				</Link>
			</div>
		</article>
	);
};
