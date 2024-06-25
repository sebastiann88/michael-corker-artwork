"use client";
import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Script from 'next/script';

// COMPONENTS
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const DynamicComponent = dynamic(() => import("./components/Navbar"), {
//   ssr: false,
// });

const Home = () => {
  return (
    <>
      {/* <link rel="stylesheet" href="/css/tw-elements.min.css"/> */}
      <Navbar />
      <Header />
        <main>
          
        </main>
      <Footer />
      <Script type="text/javascript" strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
      {/* <Script type="text/javascript"  strategy="beforeInteractive" src="/js/tw-elements.umd.min.js"/> */}
    </>
  );
};

export default Home;
