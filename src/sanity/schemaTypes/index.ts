import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import customTable from "./customTable";
import faqBlock from "./faqBlock";
import { postType } from "./postType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContentType,
		customTable,
		postType,
		categoryType,
		authorType,
		faqBlock,
	],
};
