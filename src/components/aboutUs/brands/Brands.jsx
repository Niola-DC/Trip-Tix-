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
import { motion } from "framer-motion";

const Brands = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="p-[40px] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2 text-[#757575] w-full p-[10px]">
        <hr className="w-[33%]" />
        <p className="font-[400] text-[18px] leading-[27.27px]">
          Brands with NIIT BUs Buddy
        </p>
        <hr className="w-[33%]" />
      </div>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="carousel w-full bg-white px-[40px]"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel w-full bg-white"
        >
          <motion.div className="flex ml-[150px] mx-[100px] w-full  justify-center mt-[40px] gap-[40px] items-center">
            <div className="flex justify-center items-center">
              <picture>
                <source media="(max-width: 768px)" srcSet={jaguar} />
                <img className="max-w-[100px]" src={jaguar} alt="jaguar" />
              </picture>
            </div>
            <div className=" flex justify-center items-center">
              <picture>
                <source media="(max-width: 768px)" srcSet={mazda} />
                <img className="max-w-[100px]" src={mazda} alt="mazda" />
              </picture>
            </div>
            <div className=" flex justify-center items-center">
              <picture>
                <source media="(max-width: 768px)" srcSet={bmw} />
                <img className="max-w-[57px]" src={bmw} alt="bmw" />
              </picture>
            </div>
            <div className=" flex justify-center items-center">
              <picture>
                <source media="(max-width: 768px)" srcSet={gtr} />
                <img className="max-w-[75px]" src={gtr} alt="gtr" />
              </picture>
            </div>
            <div className=" flex justify-center items-center">
              <picture>
                <source media="(max-width: 768px)" srcSet={hyundai} />
                <img className="max-w-[100px]" src={hyundai} alt="hyundai" />
              </picture>
            </div>
            <div className=" flex justify-center items-center">
              <picture>
                <source media="(max-width: 768px)" srcSet={peugeot} />
                <img className="max-w-[100px]" src={peugeot} alt="peugeot" />
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
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Brands;
