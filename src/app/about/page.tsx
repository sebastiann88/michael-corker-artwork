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
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      {/* <link rel="stylesheet" href="/css/tw-elements.min.css"/> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
      />
      <Navbar />
        <main>
          
        </main>
      <Footer />
      <Script type="text/javascript" strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
      {/* <Script type="text/javascript"  strategy="beforeInteractive" src="/js/tw-elements.umd.min.js"/> */}
    </>
  );
};

export default About;
