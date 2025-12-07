// schemas/author.ts
import { defineField, defineType } from "sanity";

export const authorType = defineType({
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Name",
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		}),
		defineField({
			name: "image",
			type: "image",
			title: "Author Image",
		}),
		defineField({
			name: "bio",
			type: "array",
			title: "Bio",
			of: [{ type: "block" }],
		}),
	],
});
