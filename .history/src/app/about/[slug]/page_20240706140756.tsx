import client from "tina/__generated__/client";
// import { AboutPageComponent } from "@/components/About";
import AboutPageComponent from "@/components/About";

export default async function Page() {
	const result = await client.queries.page({
		relativePath: "about.md"
	})
	return <AboutPageComponent {...result}/>
}


// export default async function AboutPage() {
// 	const result = await client.queries.page({
// 		relativePath: "about.md",
// 	})
// 	return <AboutPageComponent {...result}/>
// }