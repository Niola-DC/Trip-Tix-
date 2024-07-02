import React, { useEffect, useRef, useState } from "react";
import {
  bmw,
  gtr,
  honda,
  hyundai,
  jaguar,
  lambor,
  mazda,
  mercedes_benz,
  mitsubishi,
  peugeot,
  suzuki,
  toyota,
  nissan,
} from "../../../assets/images";
import Slider from "react-slick";

const Brands = () => {
  const settings = {
    infinite: false,
    speed: 500,

    slidesToScroll: 8,
    slidesToShow: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
    ],
  };

  return (
    <div className="p-[40px] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2 text-[#757575] w-full p-[10px]">
        <hr className="w-[33%]" />
        <p className="font-[400] text-[18px] leading-[27.27px]">
          Brands with TripTrix
        </p>
        <hr className="w-[33%]" />
      </div>
      <div
        className="carousel w-full mt-6 bg-white px-[10px] lg:px-[40px]"
      >
        <Slider
          {...settings}
        >

          <div className="flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={jaguar} />
              <img className="max-w-[100px]" src={jaguar} alt="jaguar" />
            </picture>
          </div>
          <div className="flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={mazda} />
              <img className="max-w-[100px]" src={mazda} alt="mazda" />
            </picture>
          </div>
          <div className="flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={bmw} />
              <img className="max-w-[57px]" src={bmw} alt="bmw" />
            </picture>
          </div>
          <div className="flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={gtr} />
              <img className="max-w-[75px]" src={gtr} alt="gtr" />
            </picture>
          </div>
          <div className="flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={hyundai} />
              <img className="max-w-[100px]" src={hyundai} alt="hyundai" />
            </picture>
          </div>
          <div className="flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={peugeot} />
              <img className="max-w-[67px]" src={peugeot} alt="peugeot" />
            </picture>
          </div>
          <div className=" flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={nissan} />
              <img className="max-w-[70px]" src={nissan} alt="nissan" />
            </picture>
          </div>
          <div className=" flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={mercedes_benz} />
              <img className="max-w-[100px]" src={mercedes_benz} alt="benz" />
            </picture>
          </div>
          <div className=" flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={honda} />
              <img className="max-w-[85px]" src={honda} alt="honda" />
            </picture>
          </div>
          <div className=" flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={mitsubishi} />
              <img
                className="max-w-[46px]"
                src={mitsubishi}
                alt="mitsubishi"
              />
            </picture>
          </div>
          <div className=" flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={lambor} />
              <img className="max-w-[52px]" src={lambor} alt="lambor" />
            </picture>
          </div>
          <div className=" flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={toyota} />
              <img className="max-w-[80px]" src={toyota} alt="toyota" />
            </picture>
          </div>
          <div className=" flex justify-center items-center">
            <picture>
              <source media="(max-width: 768px)" srcSet={suzuki} />
              <img className="max-w-[60px]" src={suzuki} alt="suzuki" />
            </picture>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default Brands;
