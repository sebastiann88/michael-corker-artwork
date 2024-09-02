import client from "tina/__generated__/client";
// import { AboutPageComponent } from "@/components/About";
import { PageComponent } from "@/components/Home";

export default async function Page() {
	const result = await client.queries.page({
		relativePath: "about.md"
	})
	return <PageComponent {...result}/>
}


// export default async function AboutPage() {
// 	const result = await client.queries.page({
// 		relativePath: "about.md",
// 	})
// 	return <AboutPageComponent {...result}/>
// }