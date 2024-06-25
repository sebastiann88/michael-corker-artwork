"use client";
import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Carousel() {
  return (
    <>
      {/* <!-- Slider --> */}
      <header className="header slider-fade">
        <div className="owl-carousel owl-theme">
          {/* <!-- The opacity on the image is made with "data-overlay-dark="number".You can change it using the numbers 0-9. --> */}
          <div
            className="text-left item bg-img"
            data-overlay-dark="2"
            data-background="img/slider/1.jpg"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 mt-60">
                    <div className="o-hidden">
                      <h6>Welcome to the Creative World of Michael Corker</h6>
                      <h1><span>Michael Corker</span></h1>
                      <h2>Artwork Collection</h2>
                      <a href="portfolio.html" className="btn-curve btn-1"
                        ><span>Explore Artwork</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-left item bg-img"
            data-overlay-dark="3"
            data-background="img/slider/3.jpg"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 mt-60">
                    <div className="o-hidden">
                      <h6>Best Pieces of Art</h6>
                      <h1>
                        <span>Michael Corker</span><br />Ink <span>&</span> Colour
                      </h1>
                      <a href="portfolio.html" className="btn-curve btn-1"
                        ><span>Explore Artwork</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-left item bg-img"
            data-overlay-dark="4"
            data-background="img/slider/4.jpg"
          >
            <div className="v-middle caption">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 mt-60">
                    <div className="o-hidden">
                      <h6>Explore the classNameics</h6>
                      <h1><span>Michael Corker</span> classNameics</h1>
                      <a href="portfolio.html" className="btn-curve btn-1"
                        ><span>Explore Artwork</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
