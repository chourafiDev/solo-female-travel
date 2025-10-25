import { JsonLd } from "@/components/JsonLd";
import Subscribe from "@/components/subscribe";
import { Separator } from "@/components/ui/separator";
import Breadcrumbs from "@/features/about-us/breadcrumbs";
import {
	generateAboutMetadata,
	generateBreadcrumbSchema,
	generateOrganizationSchema,
	siteConfig,
} from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generateAboutMetadata();

const AboutUsPage = () => {
	const organizationSchema = generateOrganizationSchema();
	const breadcrumbSchema = generateBreadcrumbSchema([
		{ name: "Home", url: "/" },
		{ name: "About Us", url: "/about" },
	]);

	return (
		<>
			{/* JSON-LD Schemas */}
			<JsonLd data={organizationSchema} id="organization-schema" />
			<JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />

			{/* Breadcrumbs */}
			<Breadcrumbs />

			<main id="main-content" className="custom-container">
				{/* Hero Section */}
				<header className="space-y-3 md:py-20 py-16">
					<h1 className="text-center title lg:text-5xl md:text-4xl text-3xl">
						About {siteConfig.shortName}
					</h1>
					<p
						className="text-center font-medium lg:px-72 text-muted-foreground"
						itemProp="description"
					>
						{siteConfig.branding.mission}
					</p>
				</header>

				{/* Featured Image */}
				<figure className="relative rounded-lg overflow-hidden md:h-[550px] h-[500px] w-full md:mb-20 mb-16">
					<Image
						src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
						alt="WanderHer Travel - Empowering women to explore the world solo"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
						className="absolute object-cover"
						priority
					/>
				</figure>

				{/* What We Do Section */}
				<section
					aria-labelledby="what-we-do-heading"
					className="lg:w-[80%] mx-auto"
				>
					<div className="space-y-6">
						<h2
							id="what-we-do-heading"
							className="text-foreground font-bold text-2xl"
						>
							What We Do
						</h2>

						<div className="space-y-4">
							<article className="grid md:grid-cols-8 grid-cols-1 gap-2">
								<h3 className="md:col-span-2 text-foreground text-base font-semibold">
									Curated Destination Guides
								</h3>
								<p className="md:col-span-6 text-foreground/60 text-[15px] font-medium">
									We provide comprehensive, safety-focused destination guides
									specifically designed for solo female travelers. Each guide
									includes insider tips, budget breakdowns, and authentic
									experiences from women who&apos;ve been there.
								</p>
							</article>

							<article className="grid md:grid-cols-8 grid-cols-1 gap-2">
								<h3 className="md:col-span-2 text-foreground text-base font-semibold">
									Expert Travel Insights
								</h3>
								<p className="md:col-span-6 text-foreground/60 text-[15px] font-medium">
									Our team of experienced solo female travelers shares practical
									advice, safety strategies, and cultural insights to help you
									navigate the world confidently and independently.
								</p>
							</article>

							<article className="grid md:grid-cols-8 grid-cols-1 gap-2">
								<h3 className="md:col-span-2 text-foreground text-base font-semibold">
									Supportive Community
								</h3>
								<p className="md:col-span-6 text-foreground/60 text-[15px] font-medium">
									Join a global community of adventurous women who support,
									inspire, and learn from each other. Share experiences, ask
									questions, and connect with fellow solo travelers.
								</p>
							</article>
						</div>
					</div>
				</section>

				<div className="lg:w-[80%] mx-auto my-10">
					<Separator />
				</div>

				{/* Our Values Section */}
				<section
					aria-labelledby="our-values-heading"
					className="lg:w-[80%] mx-auto"
				>
					<div className="space-y-6">
						<h2
							id="our-values-heading"
							className="text-foreground font-bold text-2xl"
						>
							Our Values
						</h2>

						<div className="space-y-4">
							<article className="grid md:grid-cols-8 grid-cols-1 gap-2">
								<h3 className="md:col-span-2 text-foreground text-base font-semibold w-44">
									Safety First
								</h3>
								<p className="md:col-span-6 text-foreground/60 text-[15px] font-medium">
									Your safety is our top priority. We provide honest, practical
									safety advice and thoroughly research every destination we
									recommend to ensure you can travel with confidence.
								</p>
							</article>

							<article className="grid md:grid-cols-8 grid-cols-1 gap-2">
								<h3 className="md:col-span-2 text-foreground text-base font-semibold w-44">
									Authentic Experiences
								</h3>
								<p className="md:col-span-6 text-foreground/60 text-[15px] font-medium">
									We believe in genuine travel experiences over tourist traps.
									Our guides help you discover authentic local culture, hidden
									gems, and meaningful connections wherever you go.
								</p>
							</article>

							<article className="grid md:grid-cols-8 grid-cols-1 gap-2">
								<h3 className="md:col-span-2 text-foreground text-base font-semibold w-44">
									Empowerment
								</h3>
								<p className="md:col-span-6 text-foreground/60 text-[15px] font-medium">
									We empower women to break boundaries, challenge stereotypes,
									and prove that solo female travel is not just
									possible—it&apos;s incredible. Your adventure starts here.
								</p>
							</article>
						</div>
					</div>
				</section>

				<div className="lg:w-[80%] mx-auto my-10">
					<Separator />
				</div>

				{/* Our Story Section  */}
				<section
					aria-labelledby="our-story-heading"
					className="lg:w-[80%] mx-auto md:mb-20 mb-16"
				>
					<h2
						id="our-story-heading"
						className="text-foreground font-bold text-2xl mb-6"
					>
						Our Story
					</h2>
					<div className="space-y-4 text-muted-foreground">
						<p className="text-foreground/60 text-[15px] font-medium">
							{siteConfig.name} was born from a simple belief: every woman
							deserves to explore the world on her own terms, without fear or
							limitation.
						</p>
						<p className="text-foreground/60 text-[15px] font-medium">
							What started as a personal travel journal has grown into a
							comprehensive resource trusted by thousands of solo female
							travelers worldwide. We&apos;ve been featured in major travel
							publications and have helped countless women take their first solo
							trip.
						</p>
						<p className="text-foreground/60 text-[15px] font-medium">
							Today, {siteConfig.shortName} is more than a blog—it&apos;s a
							movement. We&apos;re building a global community of fearless,
							independent women who inspire each other to see the world
							differently.
						</p>
					</div>
				</section>

				{/* Call to Action */}
				<Subscribe />

				{/* Contact Info */}
				<section
					aria-labelledby="contact-heading"
					className="lg:w-[80%] mx-auto mb-20"
					itemScope
					itemType="https://schema.org/Organization"
				>
					<h2
						id="contact-heading"
						className="text-foreground font-bold text-2xl mb-6"
					>
						Contact Information
					</h2>

					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
						<div>
							<h3 className="font-semibold mb-2">Email</h3>

							<Link
								href={`mailto:${siteConfig.contact.email}`}
								className="text-muted-foreground text-[15px] hover:text-foreground"
								itemProp="email"
							>
								{siteConfig.contact.email}
							</Link>
						</div>
						<div>
							<h3 className="font-semibold mb-2">Follow Us</h3>
							<div className="space-y-1">
								<Link
									href={siteConfig.social.instagram.url}
									target="_blank"
									rel="noopener noreferrer"
									className="block text-muted-foreground text-[15px] hover:text-foreground"
									itemProp="sameAs"
								>
									Instagram
								</Link>

								<Link
									href={siteConfig.social.pinterest.url}
									target="_blank"
									rel="noopener noreferrer"
									className="block text-muted-foreground text-[15px] hover:text-foreground"
									itemProp="sameAs"
								>
									Pinterest
								</Link>

								<Link
									href={siteConfig.social.facebook.url}
									target="_blank"
									rel="noopener noreferrer"
									className="block text-muted-foreground text-[15px] hover:text-foreground"
									itemProp="sameAs"
								>
									Facebook
								</Link>
							</div>
						</div>
						<div>
							<h3 className="font-semibold mb-2">Partnerships</h3>

							<Link
								href={`mailto:${siteConfig.contact.businessEmail}`}
								className="text-muted-foreground text-[15px] hover:text-foreground"
							>
								{siteConfig.contact.businessEmail}
							</Link>
						</div>
					</div>

					{/* Hidden Organization Schema Data */}
					<meta itemProp="name" content={siteConfig.name} />
					<meta itemProp="url" content={siteConfig.url} />
					<link itemProp="logo" href={`${siteConfig.url}/logo.png`} />
				</section>
			</main>
		</>
	);
};

export default AboutUsPage;
