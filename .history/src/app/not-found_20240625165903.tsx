"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Script from 'next/script';

// COMPONENTS
import Navbar from "@/components/Navbar";

import About from "@/components/About";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
    />
    <Navbar />
    <section
      className="banner-header section-padding valign bg-img bg-fixed"
      data-overlay-dark="3"
      data-background="img/slider/2.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center caption mt-90">
            <h5 className="animate-box" data-animate-effect="fadeInUp">
              <a href="index.html">Home</a> / 404
            </h5>
            <h1 className="animate-box" data-animate-effect="fadeInUp">
              Not Found
            </h1>
            <hr className="animate-box" data-animate-effect="fadeInUp" />
            <p className="animate-box" data-animate-effect="fadeInUp">
              The page you are looking for was moved, removed, renamed or never
              existed.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- hr --> */}
    <hr className="line-vr-section" />
    {/* <!-- Not found 404 --> */}
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="section-number">404</div>
            <div className="section-title">
              Sorry We Can't Find <span>That Page!</span>
            </div>
            <p>
              The page you are looking for was moved, removed, renamed or never
              existed.
            </p>
            <div className="error-form">
              <form method="post" action="blog.html">
                <div className="form-group clearfix">
                  <input
                    type="search"
                    name="text"
                    value=""
                    placeholder="Search here"
                  />
                  <button type="submit" className="theme-btn">
                    <span className="ti-search"></span>
                  </button>
                </div>
              </form>
            </div>
            <a href="/" className="btn-curve btn-1 mt-30 text-center"
              ><span>Back to Home</span></a
            >
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Promo video - Testiominals --> */}
    <section className="testimonials video-wrapper video">
      <div
        className="background bg-img bg-fixed section-padding pb-0"
        data-background="img/slider/2.jpg"
        data-overlay-dark="3"
      >
      </div>
    </section>
    <Footer />
    <Script type="text/javascript" strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
    {/* <Script type="text/javascript"  strategy="beforeInteractive" src="/js/tw-elements.umd.min.js"/> */}
    <Script type="text/javascript" src="/js/js/custom.js"/>
    </>
  )
}
