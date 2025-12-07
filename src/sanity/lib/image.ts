import {
	createImageUrlBuilder,
	type SanityImageSource,
} from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
	if (!source) {
		return builder.image({
			_type: "image",
			asset: {
				_type: "reference",
				_ref: "",
			},
		});
	}
	return builder.image(source);
};
