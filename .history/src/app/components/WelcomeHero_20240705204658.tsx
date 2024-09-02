"use client";
import React from "react";
import dynamic from "next/dynamic";
import { PageBlocksWelcomeHero } from "tina/__generated__/types";
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from "tinacms/dist/react";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function WelcomeHero(props: PageBlocksWelcomeHero) {
  return (
    <>
      {/* <!-- Slider --> */}
      <header>
        <div className="banner-header" data-overlay-dark="2">
          {/* <!-- The opacity on the image is made with "data-overlay-dark="number".You can change it using the numbers 0-9. --> */}
          <div
            className="text-left"
            data-background="img/slider/1.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-9 py-12">
                  <div className="o-hidden" data-tina-field={tinaField(props, "message")}>
                    <TinaMarkdown content={ props.message } components={{ 
                      h6: props => <h6 {...props }/>,
                      bold: props => <span className="text-style" { ...props } />
                    }} />
                    <a href="/artwork" className="btn-curve btn-1"
                      ><span>Explore Artwork</span></a
                    >
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
