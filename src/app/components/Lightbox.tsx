"use client";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
  { src: "/img/gallery/1.jpg", width: 634, height: 799 },
  { src: "/img/gallery/2.jpg", width: 634, height: 799 },
  { src: "/img/gallery/3.jpg", width: 1000, height: 667 },
  { src: "/img/gallery/4.jpg", width: 1000, height: 667 },
  { src: "/img/gallery/5.jpg", width: 634, height: 799 },
  { src: "/img/gallery/7.jpg", width: 1920, height: 1280 },
  { src: "/img/gallery/8.jpg", width: 1920, height: 1280 },
  { src: "/img/gallery/9.jpg", width: 1920, height: 1280 },
  { src: "/img/gallery/10.jpg", width: 1280, height: 853 },
  { src: "/img/gallery/11.jpg", width: 1920, height: 1280 },
  { src: "/img/gallery/12.jpg", width: 1920, height: 1280 },
  { src: "/img/gallery/13.jpg", width: 1920, height: 1280 },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum photos={photos} layout="masonry" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
