"use client";
import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import { PageBlocksAbout } from "tina/__generated__/types";
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { useTina } from 'tinacms/dist/react';
import { tinaField } from "tinacms/dist/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Script from 'next/script';

// const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
//   ssr: false,
// });

// COMPONENTS
import Navbar from "@/components/Navbar";
import AboutMike from "@/components/AboutMike";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";

<<<<<<< Updated upstream
export default function About(props: PageBlocksAbout) {
=======
<<<<<<< HEAD
// export default function About(props: PageBlocksAbout) {

export default function About() {
=======
export default function About(props: PageBlocksAbout) {
>>>>>>> a87a55c1f19ae09d3ce6bb84bc1df41c7e349757
>>>>>>> Stashed changes
  return (
    <>
      {/* <link rel="stylesheet" href="/css/tw-elements.min.css"/> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
      />
      <Navbar />
        <main>
          {/* <!-- Slider --> */}
          <hr className="line-vr-section" />
          {/* <!-- Team --> */}
          <section className="team section-padding">
            <div className="container">
              <div className="row mb-30">
                <div className="section-head col-md-12 text-center">
                  <div className="section-subtitle">Michael Corker</div>
                  <div className="section-title white">Visual <span>Artist</span></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="item right">
                    <figure>
                      <img src="img/team/7.jpg" alt="" className="img-fluid" />
                    </figure>
                    <div className="caption padding-left" data-tina-field={tinaField(props, "message")}>
                      <TinaMarkdown content={ props.message } components={{
                        h4: props => <h4 className="name" {...props}/>,
                        h6: props => <h6 className="subname" {...props}/>,
                        p: props => <p {...props}/>,
                      }} />
                    </div>
                    {/* <div className="caption padding-left" data-tina-field={tinaField(props, "message")}>
                      <TinaMarkdown content={ props.message } components={{
                        h4: props => <h4 className="name" {...props}/>,
                        h6: props => <h6 className="subname" {...props}/>,
                        p: props => <p {...props}/>,
                      }} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <AboutMike />
          {/* <!-- hr --> */}
          <hr className="line-vr-section" />
          {/* <!-- Services --> */}
          <section className="services section-padding">
            <div className="container">
              <div className="row mb-30">
                <div className="section-head col-md-12">
                  <div className="section-subtitle">Artwork Creation</div>
                  <div className="section-title white">My Process</div>
                </div>
              </div>
              <div className="row mb-30">
                <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                  <div className="img left">
                    <a href="services-page.html"
                      ><img src="img/services/1.jpg" alt=""
                    /></a>
                  </div>
                </div>
                <div
                  className="col-md-6 valign animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="content">
                    <div className="date">
                      <h1>01</h1>
                    </div>
                    <div className="cont">
                      <h5>Brainstorming</h5>
                      <p>
                        Lorem arena nuam enim mi obortis esen the uctus accumsan
                        golden alisuame amet auctor orci done vitae vehicula risus
                        duise nun sapien accumsan imauris ullamcorper rutrum asuam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-30">
                <div
                  className="col-md-6 order2 valign animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="content">
                    <div className="date">
                      <h1>02</h1>
                    </div>
                    <div className="cont">
                      <h5>Sketching</h5>
                      <p>
                        Lorem arena nuam enim mi obortis esen the uctus accumsan
                        golden alisuame amet auctor orci done vitae vehicula risus
                        duise nun sapien accumsan imauris ullamcorper rutrum asuam.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 order1 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="img left">
                    <a href="services-page.html"
                      ><img src="img/services/4.jpg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div className="row mb-30">
                <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                  <div className="img left">
                    <a href="services-page.html"
                      ><img src="img/services/3.jpg" alt=""
                    /></a>
                  </div>
                </div>
                <div
                  className="col-md-6 valign animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="content">
                    <div className="date">
                      <h1>03</h1>
                    </div>
                    <div className="cont">
                      <h5>Refining</h5>
                      <p>
                        Lorem arena nuam enim mi obortis esen the uctus accumsan
                        golden alisuame amet auctor orci done vitae vehicula risus
                        duise nun sapien accumsan imauris ullamcorper rutrum asuam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Faqs --> */}
          <section className="section-padding">
            <div className="container">
              <Accordion />
            </div>
          </section>
        </main>
      <Footer />
      <Script type="text/javascript" strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
      {/* <Script type="text/javascript"  strategy="beforeInteractive" src="/js/tw-elements.umd.min.js"/> */}
    </>
  );
<<<<<<< Updated upstream
};
=======
<<<<<<< HEAD
};
=======
};
>>>>>>> a87a55c1f19ae09d3ce6bb84bc1df41c7e349757
>>>>>>> Stashed changes
