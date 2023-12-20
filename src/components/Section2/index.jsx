import React from "react";

import { Button, Img, Text } from "components";

const Section2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-end my-auto p-[159px] md:px-10 sm:px-5 right-[0] w-[77%]"
          style={{ backgroundImage: "url('images/img_group13.svg')" }}
        >
          <div className="h-[925px] md:h-[967px] mb-4 mt-[26px] relative w-[99%] md:w-full">
            <div className="h-[925px] m-auto w-full">
              <div className="h-[925px] m-auto w-full">
                <div className="h-[925px] m-auto w-full">
                  <div className="h-[925px] m-auto w-full">
                    <Img
                      className="h-[925px] m-auto object-cover w-full"
                      src="images/img_rectangle51.png"
                      alt="rectangleFiftyOne"
                    />
                    <Img
                      className="absolute bottom-[38%] h-[63px] left-[19%]"
                      src="images/img_user_gray_900_01.svg"
                      alt="user"
                    />
                    <Img
                      className="absolute bottom-[29%] h-[76px] left-[9%]"
                      src="images/img_user_gray_900_01.svg"
                      alt="user_One"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[29%] h-[126px] left-[13%]"
                    src="images/img_rectangle66.svg"
                    alt="rectangleSixtySix"
                  />
                </div>
                <div className="absolute bottom-[30%] flex flex-row gap-4 items-start justify-center left-[12%] w-[8%]">
                  <Img
                    className="h-[70px] mt-[49px]"
                    src="images/img_lightbulb.svg"
                    alt="lightbulb"
                  />
                  <Img
                    className="h-[71px] mb-12"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                </div>
              </div>
              <Img
                className="absolute bottom-[27%] h-[26px] left-[5%]"
                src="images/img_question.svg"
                alt="question"
              />
            </div>
            <div className="absolute bottom-[23%] flex flex-col gap-2 items-start justify-start left-[3%] w-[13%]">
              <Img
                className="h-[37px]"
                src="images/img_maximize.svg"
                alt="maximize"
              />
              <Img
                className="h-[43px]"
                src="images/img_rectangle65.svg"
                alt="rectangleSixtyFive"
              />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[30%]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="leading-[65.00px] md:text-5xl text-[65px] text-black-900_02 tracking-[-2.40px]"
                size="txtInterSemiBold65Black90002"
              >
                <>
                  Create
                  <br />
                  your own Web3 Masterpiece{" "}
                </>
              </Text>
              <Text
                className="leading-[34.00px] mt-10 md:text-3xl sm:text-[28px] text-[32px] text-gray-500 tracking-[-0.30px] w-[97%] sm:w-full"
                size="txtInterMedium32"
              >
                Most entrepreneurs want to create their own web3 sites,
                unfortunately, they dont know much about creating one. Web3Makr
                makes it easier for newbies to create a blockchain-based
                collectibles solution without the hassle of leaving their
                favorite creation tools and by simple drag and drop
                functionality.
              </Text>
              <Button
                className="bg-cover bg-no-repeat cursor-pointer font-inter font-semibold h-[49px] leading-[normal] min-w-[182px] mt-[50px] py-3.5 text-base text-center text-gray-50 tracking-[-0.40px]"
                style={{ backgroundImage: "url('images/img_group38.svg')" }}
              >
                Start building
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Section2.defaultProps = {};

export default Section2;
