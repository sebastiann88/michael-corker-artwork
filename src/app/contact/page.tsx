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
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      {/* <link rel="stylesheet" href="/css/tw-elements.min.css"/> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
      />
      <Navbar />
        <main>
          {/* <!-- Contact --> */}
          <section className="contact section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-30">
                  <h5>Michael Corker Artwork</h5>
                  <p className="mb-30">
                    Our firm nisl sodales sit amet sapien idea placeran sodales
                    orcite. Vivamus ne miss rhoncus felis into Artefact Tattoo Studio.
                    Lorem arena nuam enim mi obortis esen the uctus ametion in the
                    auctor orci done vitae.
                  </p>
                  <div className="item">
                    <span className="icon ti-location-pin"></span>
                    <div className="cont">
                      <h6>Address</h6>
                      <p>0665 Broadway NY, 10001 USA</p>
                    </div>
                  </div>
                  <div className="item">
                    <span className="icon ti-mobile"></span>
                    <div className="cont">
                      <h6>Phone</h6>
                      <p><a href="tel:8551004444">855 100 4444</a></p>
                    </div>
                  </div>
                  <div className="item">
                    <span className="icon ti-email"></span>
                    <div className="cont">
                      <h6>e-Mail</h6>
                      <p>info@tattoo.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <h5>Contact Form</h5>
                  <form method="post" className="contact__form" action="mail.php">
                    {/* <!-- Form message --> */}
                    <div className="row">
                      <div className="col-12">
                        <div
                          className="alert alert-success contact__msg"
                          style={{display: 'none'}}
                          role="alert"
                        >
                          Your message was sent successfully.
                        </div>
                      </div>
                    </div>
                    {/* <!-- Form elements --> */}
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          name="name"
                          type="text"
                          placeholder="Your Name *"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          name="email"
                          type="email"
                          placeholder="Your Email *"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Your Number *"
                          required
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject *"
                          required
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <textarea
                          className="text-area"
                          name="message"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Message *"
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-12">
                        <input name="submit" type="submit" value="Send Message" />
                      </div>
                    </div>
                  </form>
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

export default Contact;
