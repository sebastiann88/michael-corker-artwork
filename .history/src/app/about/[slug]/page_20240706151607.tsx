import React from "react";
import Head from "next/head";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../../tina/__generated__/client";
import { About } from "@/components/About";

export default async function Page({
	params,
}: {
	params: { slug: string }
}) {
	const result = await client.queries.page({
		relativePath: `${params.slug}.md`
	})
	return <About {...result}/>
}