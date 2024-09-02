"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// COMPONENTS
import Navbar from "@/components/Navbar";
import WelcomeHero from "@/components/WelcomeHero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { PageAndNavQuery, PageQuery } from "tina/__generated__/types";
import { useTina } from 'tinacms/dist/react';

export function PageComponent(props: {
  data: PageQuery
  variables: {
    relativePath: string;
  }
  query: string;
}) {
  const { data } = useTina(props)

  return (
    <>
      <Navbar {...data.nav} />
        <main>
          {data.page.blocks?.map((block, i) => {
            switch (block?.__typename) {
              case "PageBlocksWelcomeHero": {
                return <WelcomeHero key={i} {...block}/>
              }
              case "PageBlocksIntro": {
                return <Intro key={i} {...block}/>
              }
              case "PageBlocksAbout": {
                return <About key={i} {...block}/>
              }
            }
          })}
          <Blog />
        </main>
      <Footer />
    </>
  );
};
