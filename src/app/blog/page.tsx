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

const Blog = () => {
  return (
    <>
      {/* <link rel="stylesheet" href="/css/tw-elements.min.css"/> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
      />
      <Navbar />
        <main>
          {/* <!-- Header Banner --> */}
          <section
            className="banner-header section-padding valign bg-img bg-fixed"
            data-overlay-dark="2"
            data-background="/img/slider/1.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-left caption mt-90">
                  <h5 className="animate-box" data-animate-effect="fadeInUp">
                    <a href="index.html">Home</a> / Blog
                  </h5>
                  <h1 className="animate-box" data-animate-effect="fadeInUp">
                    Mike's Blog
                  </h1>
                  <hr className="animate-box" data-animate-effect="fadeInUp" />
                  <p className="animate-box" data-animate-effect="fadeInUp">
                    Grab a cuppa, a doughnut and get comfy to read our latest news &
                    trends. Lorem ipsum potenti fringilla pretium ipsum non blan
                    ipsum.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Blog --> */}
          <section className="blog2 section-padding bg-blck">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="item">
                        <div className="post-img">
                          <a href="post.html">
                            <img src="img/news/1.jpg" alt="" />
                          </a>
                          <div className="date">
                            <a href="post.html"> <span>Dec</span> <i>29</i> </a>
                          </div>
                        </div>
                        <div className="post-cont">
                          <a href="blog.html"><span className="tag">Blog</span></a>
                          <h5><a href="post.html">Top Ten Tattoo Styles</a></h5>
                          <p className="mb-3">
                            Lorem ipsum potenti fringilla pretium ipsum non blandi className="mb-3"t.
                            Vivamus eget nisi non mi iaculis iaculis imperie quiseros
                            sevin elentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis enesta mauris suscipit
                            mis nec est aliquam, a tincidunt eros iacu suscipit risus
                            eu ullamcoren.
                          </p>
                          <a href="post.html" className="btn-curve btn-1"
                            ><span>Read More</span></a
                          >
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="item">
                        <div className="post-img">
                          <a href="post.html">
                            <img src="img/news/2.jpg" alt="" />
                          </a>
                          <div className="date">
                            <a href="post.html"> <span>Dec</span> <i>27</i> </a>
                          </div>
                        </div>
                        <div className="post-cont">
                          <a href="blog.html"><span className="tag">Blog</span></a>
                          <h5><a href="post.html">Best Tattoo Back Ideas</a></h5>
                          <p className="mb-3">
                            Lorem ipsum potenti fringilla pretium ipsum non blandi className="mb-3"t.
                            Vivamus eget nisi non mi iaculis iaculis imperie quiseros
                            sevin elentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis enesta mauris suscipit
                            mis nec est aliquam, a tincidunt eros iacu suscipit risus
                            eu ullamcoren.
                          </p>
                          <a href="post.html" className="btn-curve btn-1"
                            ><span>Read More</span></a
                          >
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="item">
                        <div className="post-img">
                          <a href="post.html">
                            <img src="img/news/3.jpg" alt="" />
                          </a>
                          <div className="date">
                            <a href="post.html"> <span>Dec</span> <i>25</i> </a>
                          </div>
                        </div>
                        <div className="post-cont">
                          <a href="blog3.html"><span className="tag">Blog</span></a>
                          <h5>
                            <a href="post.html">Best Wrap Around Tattoo Ideas</a>
                          </h5>
                          <p className="mb-3">
                            Lorem ipsum potenti fringilla pretium ipsum non blandit.
                            Vivamus eget nisi non mi iaculis iaculis imperie quiseros
                            sevin elentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis enesta mauris suscipit
                            mis nec est aliquam, a tincidunt eros iacu suscipit risus
                            eu ullamcoren.
                          </p>
                          <a href="post.html" className="btn-curve btn-1"
                            ><span>Read More</span></a
                          >
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      {/* <!-- Pagination --> */}
                      <ul className="pagination-wrap align-center mb-30 mt-30">
                        <li>
                          <a href="blog.html#"><i className="ti-angle-left"></i></a>
                        </li>
                        <li><a href="blog.html#">1</a></li>
                        <li><a href="blog.html#" className="active">2</a></li>
                        <li><a href="blog.html#">3</a></li>
                        <li>
                          <a href="blog.html#"><i className="ti-angle-right"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="blog2-sidebar row">
                    <div className="col-md-12">
                      <div className="widget search">
                        <form>
                          <input
                            type="text"
                            name="search"
                            placeholder="Type here ..."
                          />
                          <button type="submit">
                            <i className="ti-search" aria-hidden="true"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="widget">
                        <div className="widget-title">
                          <h6>Recent Posts</h6>
                        </div>
                        <ul className="recent">
                          <li>
                            <div className="thum">
                              <img src="img/news/1.jpg" alt="" />
                            </div>
                            <a href="post.html">Top Ten Tattoos Styles</a>
                          </li>
                          <li>
                            <div className="thum">
                              <img src="img/news/2.jpg" alt="" />
                            </div>
                            <a href="post.html">Best Tattoo Back Ideas</a>
                          </li>
                          <li>
                            <div className="thum">
                              <img src="img/news/3.jpg" alt="" />
                            </div>
                            <a href="post.html">Best Wrap Around Tattoo Ideas</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="widget">
                        <div className="widget-title">
                          <h6>Archives</h6>
                        </div>
                        <ul>
                          <li><a href="#">December 2023</a></li>
                          <li><a href="#">November 2023</a></li>
                          <li><a href="#">October 2023</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="widget">
                        <div className="widget-title">
                          <h6>Categories</h6>
                        </div>
                        <ul>
                          <li>
                            <a href="#"><i className="ti-angle-right"></i>Tattooing</a>
                          </li>
                          <li>
                            <a href="#"><i className="ti-angle-right"></i>Piercing</a>
                          </li>
                          <li>
                            <a href="#"
                              ><i className="ti-angle-right"></i>Laser Removal</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="widget">
                        <div className="widget-title">
                          <h6>Tags</h6>
                        </div>
                        <ul className="tags">
                          <li><a href="#">Tattooing</a></li>
                          <li><a href="#">Piercing</a></li>
                          <li><a href="#">Laser</a></li>
                          <li><a href="#">Care</a></li>
                          <li><a href="#">Removal</a></li>
                        </ul>
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

export default Blog;
