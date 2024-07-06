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
import { PageQuery } from "tina/__generated__/types";
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
      <Navbar />
        <main>
          {props.data.page.blocks?.map((block, i) => {
            switch (block?.__typename) {
              case "PageBlocksWelcomeHero": {
                return <WelcomeHero key={i} {...block}/>
              }
              case "PageBlocksFeatureIntro": {
                return <FeatureIntro key={i} {...block}/>
              }
            }
          })}
          <About />
          <Blog />
        </main>
      <Footer />
    </>
  );
};
