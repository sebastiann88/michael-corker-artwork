import React from "react";
import Head from "next/head";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../tina/__generated__/client";
import { PageComponent } from "@/components/page";

export default async function Page() {
	const result = await client.queries.page({relativePath: "home.md"})
	return <PageComponent {...result}/>
}