import React, { useState } from "react";
import { buses } from "../../../assets/images";
import { RiQuestionnaireLine } from "react-icons/ri";
import data from './data'

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 w-full lg:grid-cols-2 gap-[50px] h-auto p-[30px]">
      <div className="w-[100%] con max-w-[1000px] flex items-center justify-center">
        <div className="header_bus faq-img1 -mt-[15px] rounded-[10px] w-[80%] h-[400px]"></div>
        <div className="w-[40%] faq-img2 -ml-[150px] mt-[220px] min-h-[200px]">
          <img src={buses} alt="buses" />
        </div>
      </div>
      <div className="mt-[30px]">
        <div className="flex gap-[15px] p flex-col">
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px] items-center">
              <div className="flex justify-center bg-[#0E385C] text-white rounded-[8px] items-center border p-[6px]">
                <RiQuestionnaireLine size={"2rem"} />
              </div>
              <p className=" leading-[27px] font-[400] text-[18px] text-black">
                FAQ Question
              </p>
            </div>
            <p className="font-[600] text-[26px] leading-[54px] text-[#0E385C]">
              Frequently Asked Questions
            </p>
          </div>
          <div>
            {data.map((item, i) => (
              <div
                key={i}
                className={`font-[400] border-b border-b-[#EDEDED] text-[18px] border-l-4  leading-[27.27px] mb-[20px]  text-[#424242] ${
                  selected == i ? "border-l-[#0E385C]" : ""
                }`}
              >
                <div
                  onClick={() => toggle(i)}
                  className="text-black items-center flex justify-between p-[10px] cursor-pointer"
                >
                  <p
                    className={selected == i ? "font-[500] text-[#0E385C]" : ""}
                  >
                    {item.question}
                  </p>
                  <span className="px-[10px] text-[20px]">
                    {selected == i ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={`content px-[10px] p-[5px] ${
                    selected == i
                      ? "content2 show text-[#666C89] font-[500]"
                      : "content2"
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
