import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
	name: "post",
	title: "Post",
	type: "document",
	icon: DocumentTextIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: "title",
			},
		}),
		defineField({
			name: "mainImage",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
				},
			],
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "reference",
			to: { type: "category" },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: [{ type: "author" }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "publishedAt",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H1", value: "h1" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "H4", value: "h4" },
						{ title: "Quote", value: "blockquote" },
					],
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
							{ title: "Code", value: "code" },
						],
					},
				},
				{ type: "image", options: { hotspot: true } },
				{
					type: "table",
				},
				{ type: "faqBlock" },

				// Custom component: Call to Action
				{
					name: "emailSignup",
					title: "Free Ebook Signup",
					type: "object",
					fields: [
						{
							name: "enabled",
							title: "Enabled",
							type: "boolean",
							initialValue: true,
							hidden: true, // Hide it from the editor
							readOnly: true, // Make it read-only
						},
					],
					preview: {
						prepare() {
							return {
								title: "📧 Free Ebook",
								subtitle: "Email signup form will appear here",
							};
						},
					},
				},
			],
		}),

		defineField({
			name: "isFeatured",
			title: "Is Featured",
			type: "boolean",
			description: "Toggle to Featured on or off",
			initialValue: false,
		}),

		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
		}),

		defineField({
			name: "tableOfContents",
			title: "Table of Contents",
			type: "object",
			options: {
				collapsed: false,
			},
			fields: [
				{
					name: "enabled",
					title: "Show Table of Contents",
					type: "boolean",
					description: "Enable to display a table of contents for this post",
					initialValue: true,
				},
				{
					name: "title",
					title: "TOC Title",
					type: "string",
					description:
						'Custom title for the table of contents (default: "Table of Contents")',
					hidden: ({ parent }) => !parent?.enabled,
					initialValue: "Table of Contents",
				},
			],
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "excerpt",
		},
	},
});
