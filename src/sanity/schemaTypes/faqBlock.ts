export default {
	name: "faqBlock",
	title: "FAQ Block",
	type: "object",
	fields: [
		{
			name: "title",
			title: "Section Title",
			type: "string",
			initialValue: "Frequently Asked Questions",
		},
		{
			name: "faqs",
			title: "FAQs",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "question",
							title: "Question",
							type: "string",
						},
						{
							name: "answer",
							title: "Answer",
							type: "array",
							of: [{ type: "block" }],
						},
					],
					preview: {
						select: {
							title: "question",
							subtitle: "answer",
						},
					},
				},
			],
		},
	],
	preview: {
		select: {
			title: "title",
			faqs: "faqs",
		},
	},
};
