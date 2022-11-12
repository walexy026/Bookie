import React, { Component, useState } from "react";
import Slider from "react-slick";
import "./TestimonialCarousel.css";
import Testimonialsimg from "../../Assets/testimonialImg.svg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const TestimonialCarousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // slidesToScroll: 3,
    // initialSlide: 2,
    centerMode: true,
    centerPadding: "0",
    className: "center",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange :(current, next ) => setImageIndex(next)
  };

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
    {
      id: 4,
      image: "../../Assets/testimonialImg.svg",
      coment:
        "“Bookie is a very easy platform which allow users, save money ,buy books and other educational Material ”",
      name: "-Adewale  0",
    },
  ];

  return (
    <div className="test">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className={index === imageIndex ? "slide activeslide" : "slide"}>
            <img src={Testimonialsimg} alt="" className="testImage" />
            <p>{slide.name}</p>
            <i>{slide.coment}</i>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
