import dynamic from "next/dynamic";
import Image from "next/image";

const DynamicComponent = dynamic(() => import("./components/MyComponent"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <DynamicComponent />
    </>
  );
};

export default Home;
