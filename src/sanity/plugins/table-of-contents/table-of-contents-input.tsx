// table-of-contents-input.tsx
import { Box, Card, Stack, Text } from "@sanity/ui";
import { useEffect, useState } from "react";
import type {
	ObjectInputProps,
	PortableTextBlock,
	PortableTextSpan,
} from "sanity";
import { useFormValue } from "sanity";

interface Heading {
	text: string;
	style: string;
	key: string;
}

interface DocumentWithBody {
	body?: PortableTextBlock[];
	[key: string]: unknown;
}

export function TableOfContentsInput(props: ObjectInputProps) {
	const { renderDefault } = props;
	const [headings, setHeadings] = useState<Heading[]>([]);

	// Use useFormValue to get the entire document
	const document = useFormValue([]) as DocumentWithBody;

	useEffect(() => {
		// Extract headings from the document
		const extractHeadings = () => {
			const body = document?.body;

			if (!body) return [];

			const extractedHeadings: Heading[] = [];

			for (const block of body) {
				if (
					block._type === "block" &&
					block.style &&
					typeof block.style === "string" &&
					["h2", "h3"].includes(block.style)
				) {
					if (Array.isArray(block.children)) {
						const text =
							block.children
								.filter(
									(child): child is PortableTextSpan =>
										typeof child === "object" &&
										child !== null &&
										"_type" in child &&
										child._type === "span" &&
										"text" in child,
								)
								.map((child) => child.text)
								.join("") || "";

						if (text && block._key) {
							extractedHeadings.push({
								text,
								style: block.style,
								key: block._key,
							});
						}
					}
				}
			}

			return extractedHeadings;
		};

		const newHeadings = extractHeadings();
		setHeadings(newHeadings);
	}, [document?.body]);

	return (
		<Stack space={3}>
			{renderDefault(props)}

			<Card padding={4} tone="primary" radius={2}>
				<Stack space={3}>
					<Text size={2} weight="semibold">
						Table of Contents Preview
					</Text>

					{headings.length === 0 ? (
						<Text size={1} muted>
							No headings found. Add H2 or H3 blocks to generate TOC.
						</Text>
					) : (
						<Stack space={2}>
							{headings.map((heading, index) => (
								<Box
									key={heading.key}
									paddingLeft={heading.style === "h3" ? 3 : 0}
								>
									<Text size={1}>
										{index + 1}. {heading.text}
									</Text>
								</Box>
							))}
						</Stack>
					)}
				</Stack>
			</Card>
		</Stack>
	);
}
