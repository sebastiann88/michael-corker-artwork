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
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

const Artwork = () => {
  return (
    <>
      {/* <link rel="stylesheet" href="/css/tw-elements.min.css"/> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
      />
      <Navbar />
        <main>
          {/* <!-- Image Gallery --> */}
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-9 mb-11">
                  <div className="section-title">Artwork</div>
                  <p>
                    With Bootstrap grid structure, you can show the gallery as you
                    want. Image gallery lorem ac erat suscipit bibendum. Nullatem
                    volume mollis sapien vel, conseyer turpeutionyer masin libero
                    sempe. Fusceler mollis vestibulum.
                  </p>
                </div>
              </div>
              <div className="row">
                <Lightbox />
              </div>
            </div>
          </section>
          {/* <!-- Price --> */}
          <section className="price-banner menu-book section-padding">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-7 valign">
                  <div className="content">
                    <div className="menu-list">
                      <div className="item">
                        <div className="flex">
                          <div className="title">Tattooing</div>
                          <div className="price">$60</div>
                        </div>
                        <div className="dots"></div>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="item">
                        <div className="flex">
                          <div className="title">Tattoo Cover Up</div>
                          <div className="price">$45</div>
                        </div>
                        <div className="dots"></div>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="item">
                        <div className="flex">
                          <div className="title">Piercing</div>
                          <div className="price">$30</div>
                        </div>
                        <div className="dots"></div>
                      </div>
                    </div>
                    <div className="menu-list">
                      <div className="item">
                        <div className="flex">
                          <div className="title">Laser Removal</div>
                          <div className="price">$75</div>
                        </div>
                        <div className="dots"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      <Footer />
      <Script type="text/javascript" strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
      {/* <Script type="text/javascript"  strategy="beforeInteractive" src="/js/tw-elements.umd.min.js"/> */}
    </>
  );
};

export default Artwork;
