import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import map from "../assets/images/mars.jpg";

//Planet
const Sphere = (props) => {
  const base = new THREE.TextureLoader().load(map);
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // ref.current.rotation.x = t * 0.1;
    ref.current.rotation.y = t * 0.1;
  });
  return (
    <mesh visible castShadow ref={ref}>
      <directionalLight intensity={0.5} />
      <sphereGeometry attach="geometry" args={[props.size, 32, 32]}/>
      <meshBasicMaterial map={base} color="white" />
    </mesh>
  );
};

const Banner = () => {
  return (
    <div className="h-[91vh] bg-gradient-to-r from-[#0c0c0c] from-55% to-100% to-[#1f3a35] text-white flex items-center justify-between flex-wrap snap-center">
      <div className="left space-y-3 md:w-[60%] sm:px-32 px-5 md:py-0">
        <p className="text-[#6c827d]">DevXplore</p>
        <h1 className="text-6xl">
          WE ARE <span className="text-[#6ed5bc]">DevXplore</span>
        </h1>
        <div className="line md:w-8 h-0.5 bg-[#7c8b86]"></div>
        <p className="">
          Welcome to DevXplore, the premier development and training agency for
          individuals and businesses alike. Our team of experienced developers
          and educators are dedicated to helping you achieve your goals by
          providing top-notch training and development services.
        </p>
      </div>
      <div className="right md:w-[40%] h-[100%] hidden md:block">
        <Canvas className="">
          <ambientLight />
          <Sphere size={2.7} />
        </Canvas>
      </div>
      <div className="right sm:hidden h-52 flex justify-center relative bottom-12 left-10">
        <Canvas className="">
          <ambientLight />
          <Sphere size={3} />
        </Canvas>
      </div>
      <div className="right hidden sm:block md:hidden sm:w-[40%] h-[50%] relative mx-auto">
        <Canvas className="">
          <ambientLight />
          <Sphere size={3} />
        </Canvas>
      </div>
    </div>
  );
};

export default Banner;
