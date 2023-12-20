import React from "react";

import { Img, Text } from "components";

const HeroSection = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[38px] items-center justify-start w-full">
          <Text
            className="leading-[90.00px] md:text-5xl text-[90px] text-center text-white-A700_e5 tracking-[-3.00px] w-full"
            size="txtInterSemiBold90"
          >
            <span className="text-white-A700_e5 font-inter font-semibold">
              Web
            </span>
            <span className="text-gray-300 font-inter font-semibold">
              3Makr
            </span>
            <span className="text-white-A700_e5 font-inter font-semibold">
              {" "}
              Redefining How You Create
            </span>
          </Text>
          <Text
            className="leading-[34.00px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700_b2 tracking-[-0.40px] w-[63%] sm:w-full"
            size="txtInterMedium30"
          >
            Unlock the blockchain potential to create Web3 Applications
          </Text>
        </div>
        <Img
          className="h-[83px] w-[82px]"
          src="images/img_overflowmenu.svg"
          alt="overflowmenu"
        />
      </div>
    </>
  );
};

HeroSection.defaultProps = {};

export default HeroSection;
