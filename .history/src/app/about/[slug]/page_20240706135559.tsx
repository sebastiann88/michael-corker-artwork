import AboutPageComponent from "@/components/About";

export default async function AboutPage() {
	const result = await client.queries.page({
		relativePath: "about.md"
	})
	return <AboutPageComponent {...result}/>
}