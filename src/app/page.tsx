import dynamic from "next/dynamic";
import Image from "next/image";
import Script from 'next/script';

const DynamicComponent = dynamic(() => import("./components/MyComponent"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <link rel="stylesheet" href="/css/tw-elements.min.css"/>
      <DynamicComponent />
      <Script type="text/javascript" strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
      <Script type="text/javascript"  strategy="beforeInteractive" src="/js/tw-elements.umd.min.js"/>
    </>
  );
};

export default Home;
