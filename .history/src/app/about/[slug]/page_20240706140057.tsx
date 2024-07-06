import client from "tina/__generated__/client";
import PageComponent from "@/components/About";

export default async function AboutPage() {
	const result = await client.queries.page({
		relativePath: "about.md"
	})
	return <PageComponent {...result}/>
}