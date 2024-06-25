import dynamic from "next/dynamic";
import Image from "next/image";
import Script from 'next/script'

const DynamicComponent = dynamic(() => import("./components/MyComponent"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <DynamicComponent />
      <Script type="module" strategy="beforeInteractive" src="/node_modules/tw-elements/src/js/tw-elements.free.umd.js"/>
    </>
  );
};

export default Home;
