import { ThListIcon } from "@sanity/icons";
import { defineType } from "sanity";

interface TableRow {
	cells: string[];
}

interface PreviewProps {
	rows?: TableRow[];
}

const row = {
	name: "row",
	title: "Row",
	type: "object",
	fields: [
		{
			name: "cells",
			title: "Cells",
			type: "array",
			of: [{ type: "string" }],
		},
	],
};

export default defineType({
	name: "table",
	title: "Table",
	type: "object",
	icon: ThListIcon,
	fields: [
		{
			name: "rows",
			title: "Rows",
			type: "array",
			of: [row],
		},
	],
	preview: {
		select: {
			rows: "rows",
		},
		prepare({ rows }: PreviewProps) {
			const rowCount = rows?.length || 0;
			return {
				title: `Table (${rowCount} rows)`,
				subtitle:
					rows?.map((r: TableRow) => r.cells.join(", ")).join("; ") || "",
			};
		},
	},
});
