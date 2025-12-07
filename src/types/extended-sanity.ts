import type { POST_QUERYResult } from "@/sanity/types";

// ✅ FAQ Block type (add to your Sanity schema, then regenerate types)
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

// ✅ Extract the body array type from POST_QUERYResult
type OriginalBodyBlock = NonNullable<
	NonNullable<POST_QUERYResult>["body"]
>[number];

// ✅ Extended body type including FAQ
export type ExtendedBodyBlock = OriginalBodyBlock | FAQBlock;

// ✅ Extended Post type with FAQ support
export type ExtendedPost = Omit<NonNullable<POST_QUERYResult>, "body"> & {
	body: ExtendedBodyBlock[] | null;
};
