"use client";
import React, { useEffect } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import type { Metadata } from "next";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "../../public/css/plugins/themify-icons.css";
// import "../../public/css/plugins.css";
import "../../public/css/style.css";
import "./globals.css";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

function RootLayout({ children }:{children: React.ReactNode}): JSX.Element {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
