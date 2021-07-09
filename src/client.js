import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "7w9aa4z7",
	dataset: "production",
	apiVersion: "2021-03-25",
	useCdn: true,
});
