import type {
	ExtendedBodyBlock,
	TableOfContentHeading,
} from "@/types/extended-sanity";

export function extractHeadings(
	blocks: ExtendedBodyBlock[] | null,
): TableOfContentHeading[] {
	const headings: TableOfContentHeading[] = [];

	if (!blocks) return headings;

	for (const block of blocks) {
		// ✅ Filter only actual PortableText blocks
		if (
			block._type === "block" &&
			"style" in block &&
			block.style &&
			["h2"].includes(block.style) && // you can add "h3", "h4" in the array
			"children" in block &&
			Array.isArray(block.children)
		) {
			// ✅ Fixed type predicate - be more lenient
			const text = block.children
				.filter(
					(child): child is { _type: "span"; text: string; _key: string } =>
						child._type === "span" && typeof child.text === "string",
				)
				.map((child) => child.text)
				.join("");

			if (text) {
				const id = text
					.toLowerCase()
					.replace(/[^a-z0-9]+/g, "-")
					.replace(/(^-|-$)/g, "");

				headings.push({
					id,
					text,
					level: block.style as "h2",
				});
			}
		}
	}

	return headings;
}
