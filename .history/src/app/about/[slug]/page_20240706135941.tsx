import client from "tina/__generated__/client";
import About from "@/components/About";

export default async function AboutPage() {
	const result = await client.queries.page({
		relativePath: "about.md"
	})
	return <About {...result}/>
}