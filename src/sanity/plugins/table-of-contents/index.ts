import { definePlugin } from "sanity";
import type { ObjectInputProps } from "sanity";
import { TableOfContentsInput } from "./table-of-contents-input";

export const tableOfContentsPlugin = definePlugin(() => {
	return {
		name: "table-of-contents",
		form: {
			components: {
				input: (props) => {
					if (props.schemaType.name === "tableOfContents") {
						return TableOfContentsInput(props as ObjectInputProps);
					}
					return props.renderDefault(props);
				},
			},
		},
	};
});
