"use client";
import React, { useEffect } from 'react';
import type { Metadata } from "next";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Script from "next/script";
import "tw-elements/css/tw-elements.min.css";
import "./globals.css";

function RootLayout({ children }:{children: React.ReactNode}): JSX.Element {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTWE } = await import("tw-elements");
      initTWE({ Tooltip });
    };
    init();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
