"use client";
import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Script from 'next/script';

// COMPONENTS
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
		/>
		<Navbar />
    <section
      className="banner-header section-padding valign bg-img bg-fixed"
      data-overlay-dark="2"
      data-background="img/slider/1.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-left caption mt-90">
            <h5 className="animate-box" data-animate-effect="fadeInUp">
              <a href="index.html">Home</a> / Blog
            </h5>
            <h1 className="animate-box" data-animate-effect="fadeInUp">
              Top Ten Art Styles
            </h1>
            <hr className="animate-box" data-animate-effect="fadeInUp" />
            <p className="animate-box" data-animate-effect="fadeInUp">
              Quisque pretium fermentum quam, sit amet cursus ante sollicitudin
              vel. Morbi consequat risus consequat, porttitor orci sit amet,
              iaculis nisl. Integer quis sapien nec elit ultrices euismod sit
              amet id lacus.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- hr --> */}
    <hr className="line-vr-section" />
    {/* <!-- Post --> */}
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-15">
            <p className="mb-30">
              Quisque pretium fermentum quam, sit amet cursus ante sollicitudin
              vel. Morbi consequat risus consequat, porttitor orci sit amet,
              iaculis nisl. Integer quis sapien nec elit ultrices euismod sit
              amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus
              dictum hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus
              tincidunt. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Integer tristique sem eget leo faucibus porttitor.
            </p>
            <img src="img/slider/2.jpg" className="mb-30" alt="" />
            <p>
              Nulla vitae metus tincidunt, varius nunc quis, porta nulla.
              Pellentesque vel dui nec libero auctor pretium id sed arcu. Nunc
              consequat diam id nisl blandit dignissim. Etiam commodo diam
              dolor, at scelerisque sem finibus sit amet. Curabitur id lectus
              eget purus finibus laoreet. Nam eget lectus ac sem luctus
              hendrerit sed nec magna. Maecenas vulputate magna sed nunc
              pellentesque, in consectetur nisi condimentum.
            </p>
          </div>
          <div className="col-md-6">
            <img src="img/news/1.jpg" className="mb-30" alt="" />
          </div>
          <div className="col-md-6">
            <img src="img/news/2.jpg" className="mb-30" alt="" />
          </div>
        </div>
        <div className="artefact-comment-section">
          <div className="row">
            {/* <!-- Comment --> */}
            <div className="col-md-6">
              <div className="artefact-post-comment-wrap">
                <div className="artefact-user-comment">
                  <img src="img/team/1.jpg" alt="" />
                </div>
                <div className="artefact-user-content">
                  <h6>Robert Misse<span> 29 October 2023</span></h6>
                  <p>
                    Photography ultricies nibh non dolor maximus scee the inte
                    molliser faubs neque nec tincidunte aliquam erat volutpat.
                    Praeser tem malade.
                  </p>
                  <a className="artefact-repay" href="#"
                    >Reply<i className="ti-back-left"></i
                  ></a>
                </div>
              </div>
            </div>
						<Form />
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Prev-Next Post --> */}
    <section className="artefact-post-prev-next">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div className="artefact-post-prev-next-left">
                <a href="post.html">
                  <i className="ti-arrow-left"></i> Previous Post</a
                >
              </div>
              <a href="blog.html"><i className="ti-layout-grid3-alt"></i></a>
              <div className="artefact-post-prev-next-right">
                <a href="post.html">Next Post <i className="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
		<Footer />
		<Script type="text/javascript" strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
    </>
  )
}
