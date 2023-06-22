import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white snap-center" id="contact">
      <div className="box p-10 flex flex-col items-center space-y-4">
        <h1 className="text-center">
          Do you have any query or projects?{" "}
          <span className="underline max-sm:block">Contact US</span>
        </h1>
        <div className="flex flex-col text-center">
          <a href="">Mail us @ devxplore202@gmail.com</a>
          <a href="">Call or Whatsapp us @ +91 9827053173</a>
          <p>Fb Insta Linkedin Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;