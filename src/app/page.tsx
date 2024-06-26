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
import About from "@/components/About";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

// const DynamicComponent = dynamic(() => import("./components/Navbar"), {
//   ssr: false,
// });

const Home = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
      />
      <Navbar />
      <Carousel />
        <main>
          <hr className="line-vr-section" />
          {/* <!-- Mike --> */}
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
                  <div>
                    <div className="item right">
                      <figure>
                        <img src="img/team/7.jpg" alt="" className="img-fluid" />
                      </figure>
                      <div className="caption padding-left">
                        <div className="name">Michael Corker</div>
                        <div className="subname">Visual Artist</div>
                        <p>
                          Tattoo aliquet miss orci elit gene on tristique in the dream
                          vitaen aliuam lorem tincidunt felis sed gravida aliquam the
                          neque miss blue hendren mavition duru sapien mana amenta the
                          mollis.
                        </p>
                        <a href="/about" className="btn-curve btn-1 mt-10"
                          ><span>Learn More</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <About />
          {/* <!-- hr --> */}
          <hr className="line-vr-section" />
          {/* <!-- Blog --> */}
          <section className="blog section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-30">
                  <div className="section-head text-center">
                    <div className="section-subtitle">Blog Articles</div>
                    <div className="section-title white">Latest News</div>
                  </div>
                </div>
              </div>
              <div className="row grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="item">
                  <div className="post-img">
                    <a href="post.html">
                      <div className="img"><img src="img/news/1.jpg" alt="" /></div>
                    </a>
                  </div>
                  <div className="cont">
                    <h4><a href="post.html">Top Ten Creative Art Styles</a></h4>
                    <div className="info">
                      <a href="blog.html"><span>Blog</span></a>
                      <a href="blog.html">December, 29</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-img">
                    <a href="post.html">
                      <div className="img"><img src="img/news/2.jpg" alt="" /></div>
                    </a>
                  </div>
                  <div className="cont">
                    <h4><a href="post.html">Best Art Ideas</a></h4>
                    <div className="info">
                      <a href="blog.html"><span>Blog</span></a>
                      <a href="blog.html">December, 27</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-img">
                    <a href="post.html">
                      <div className="img"><img src="img/news/3.jpg" alt="" /></div>
                    </a>
                  </div>
                  <div className="cont">
                    <h4><a href="post.html">Best All-Around Art Ideas</a></h4>
                    <div className="info">
                      <a href="blog.html"><span>Blog</span></a>
                      <a href="blog.html">December, 25</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-img">
                    <a href="post.html">
                      <div className="img"><img src="img/news/4.jpg" alt="" /></div>
                    </a>
                  </div>
                  <div className="cont">
                    <h4><a href="post.html">Top Seven Art Styles</a></h4>
                    <div className="info">
                      <a href="blog.html"><span>Blog</span></a>
                      <a href="blog.html">December, 24</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-img">
                    <a href="post.html">
                      <div className="img"><img src="img/news/1.jpg" alt="" /></div>
                    </a>
                  </div>
                  <div className="cont">
                    <h4><a href="post.html">Top Ten Creative Art Styles</a></h4>
                    <div className="info">
                      <a href="blog.html"><span>Blog</span></a>
                      <a href="blog.html">December, 29</a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-img">
                    <a href="post.html">
                      <div className="img"><img src="img/news/2.jpg" alt="" /></div>
                    </a>
                  </div>
                  <div className="cont">
                    <h4><a href="post.html">Best Art Ideas</a></h4>
                    <div className="info">
                      <a href="blog.html"><span>Blog</span></a>
                      <a href="blog.html">December, 27</a>
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
      <Script type="text/javascript" src="/js/js/custom.js"/>
    </>
  );
};

export default Home;
