"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

// COMPONENTS
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import WelcomeHero from "@/components/WelcomeHero";
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
      <Carousel />
        <main>
          {props.data.page.blocks?.map((block) => {
            switch (block?.__typename) {
              case "PageWelcomeHero": {
                return <WelcomeHero {...pageProps}/>
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
