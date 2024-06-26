"use client";
import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Script from 'next/script';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

// COMPONENTS
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { PageQuery } from "tina/__generated__/types";

// const DynamicComponent = dynamic(() => import("./components/Navbar"), {
//   ssr: false,
// });

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
          <Intro />
          <About />
          <Blog />
        </main>
      <Footer />
    </>
  );
};
