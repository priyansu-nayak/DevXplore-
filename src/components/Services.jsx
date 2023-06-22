import React from "react";

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-[#192c28] to-[#121315] text-white flex flex-col md:flex-row py-10 items-center space-y-5 snap-center" id="services">
      <div className="left md:w-[55%] px-10 flex flex-col justify-start space-y-1">
        <p className="text-[#647f76] font-semibold">OUR SERVICES</p>
        <h2 className="capitalize text-4xl">
          What we <span className="text-[#73d5ba]">Do</span>.
        </h2>
        <div className="line w-16 h-0.5 bg-[#7c8b86]"></div>
        <div className="para space-y-5">
          <p className="mt-5">
            At DevXplore, we provide a wide range of development and teaching services to help individuals and businesses optimize their performance and achieve their goals. Our services include custom software development, personalized training programs, and guidance on modern development approaches. We also offer expertise in areas such as project management, quality assurance, and software architecture. Our mission is to provide exceptional service and support to help our clients succeed in today's fast-paced and constantly evolving technology landscape.
          </p>
          <p>
            "DevXplore offers custom software development, personalized training, and modern development guidance. We provide expert support to help clients succeed."
          </p>
        </div>
      </div>
      <div className="right flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 w-full md:w-[45%]">
        <div className="dabba1 space-y-3">
          <div className="chhota-dabba w-full md:w-[250px] h-[200px] bg-[#0b0b0b] flex flex-col items-center justify-center text-center p-2 space-y-2 shadow-inner ">
            <p>icon</p>
            <h3 className="text-2xl font-semibold">Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              maiores?
            </p>
          </div>
          <div className="chhota-dabba w-full md:w-[250px] h-[200px] bg-gradient-to-b from-[#010101] via-[#132a28] to-[#132a28] flex flex-col items-center justify-center text-center p-2 space-y-2 shadow-lg ">
            <p>icon</p>
            <h3 className="text-2xl font-semibold">Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              maiores?
            </p>
          </div>
        </div>
        <div className="dabba2 space-y-3 my-6 md:my-0">
          <div className="chhota-dabba w-full md:w-[250px] h-[200px] bg-gradient-to-b from-[#010101] via-[#132a28] to-[#132a28] flex flex-col items-center justify-center text-center p-2 space-y-2 shadow-lg ">
            <p>icon</p>
            <h3 className="text-2xl font-semibold">Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              maiores?
            </p>
          </div>
          <div className="chhota-dabba w-full md:w-[250px] h-[200px] bg-[#0b0b0b] flex flex-col items-center justify-center text-center p-2 space-y-2 shadow-inner ">
            <p>icon</p>
            <h3 className="text-2xl font-semibold">Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              maiores?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
