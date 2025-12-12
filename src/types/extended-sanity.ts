import type { POST_QUERYResult } from "@/sanity/types";

// ✅ FAQ Block type
export interface FAQItem {
	question: string;
	answer: string;
}

export interface FAQBlock {
	_type: "faqBlock";
	_key: string;
	title?: string;
	faqs: FAQItem[];
}

// ✅ Table of Contents Heading type
export interface TableOfContentHeading {
	id: string;
	text: string;
	level: "h2" | "h3" | "h4";
}

// ✅ Table of Contents config type
export interface TableOfContentsConfig {
	enabled?: boolean;
	title?: string;
}

// ✅ Extract the body array type from POST_QUERYResult
type OriginalBodyBlock = NonNullable<
	NonNullable<POST_QUERYResult>["body"]
>[number];

// ✅ Extended body type including FAQ
export type ExtendedBodyBlock = OriginalBodyBlock | FAQBlock;

// ✅ Extended Post type with FAQ support and tableOfContents
export type ExtendedPost = Omit<NonNullable<POST_QUERYResult>, "body"> & {
	body: ExtendedBodyBlock[] | null;
	tableOfContents?: TableOfContentsConfig; // ✅ Add this
};
