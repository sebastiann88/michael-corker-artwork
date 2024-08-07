"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
//   ssr: false,
// });

// COMPONENTS
import Navbar from "@/components/Navbar";
import WelcomeHero from "@/components/WelcomeHero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { PageQuery } from "tina/__generated__/types";

export function PageComponent(props: {
  data: PageQuery
  variables: {
    relativePath: string;
  }
  query: string;
}) {
  return (
    <>
      <Navbar />
      {/* <WelcomeHero /> */}
        <main>
          {props.data.page.blocks?.map((block) => {
            switch (block?.__typename) {
              case "PageBlocksWelcomeHero": {
                return <WelcomeHero {...block}/>
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
