"use client";
import React, { useEffect } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body>{children}
        <script type="text/javascript" src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
      </body>
    </html>
  );
}

export default RootLayout;
