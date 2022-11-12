import React from "react";
import  "./Testimonials.css";
import Testimonialsimg from "../../Assets/testimonialImg.svg";

const Testimonials = () => {
  const slides = [
    {
      id: 1,
      image: "../../Assets/testimonialImg.svg",
      coment:
        "“Bookie is a very easy platform which allow users, save money ,buy books and other educational Material ”",
      name: "-Adewale  0",
    },
    {
      id: 2,
      image: "../../Assets/testimonialImg.svg",
      coment:
        "“Bookie is a very easy platform which allow users, save money ,buy books and other educational Material ”",
      name: "-Adewale  0",
    },
    {
      id: 3,
      image: "../../Assets/testimonialImg.svg",
      coment:
        "“Bookie is a very easy platform which allow users, save money ,buy books and other educational Material ”",
      name: "-Adewale  0",
    },
  ];
  return (
    <div>
      Testimonials
      {/* <img src={Testimonialsimg} alt="" /> */}
     {slides.map((slide, index) => (
        <div className="test">
          <img src={Testimonialsimg} alt="" />
           <p>{slide.name}</p>
          <p>{slide.coment}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
