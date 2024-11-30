import React from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "./DoAndDont.css";

const ourRenovatorData1 = [
  {
    id: 1,
    title: (
      <>
        Ensure proper site <br/> preparation
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        Use high-quality <br/> materials.
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        Follow design <br/>  specifications accurately.
      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
         Implement safety <br/> protocols.
      </>
    ),
  },
  {
    id: 5,
    title: (
      <>
        Conduct regular <br/> inspections.
      </>
    ),
  },
  {
    id: 6,
    title: (
      <>
        Employ skilled labor.
      </>
    ),
  },
  {
    id: 7,
    title: (
      <>
        Maintain equipment <br/> properly.
      </>
    ),
  },
  {
    id: 8,
    title: (
      <>
        Ensure proper curing <br/> techniques.
      </>
    ),
  },
];
const ourRenovatorData2 = [
  {
    id: 1,
    title: (
      <>
        Lack of proper planning
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        Insufficient site <br/> preparation
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
         Poor quality control
      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
         Ignoring safety protocols
      </>
    ),
  },
  {
    id: 5,
    title: (
      <>
        Inadequate training for <br/> workers
      </>
    ),
  },
  {
    id: 6,
    title: (
      <>
        Use of substandard <br/> materials
      </>
    ),
  },
  {
    id: 7,
    title: (
      <>
        Failure to adhere to <br/> building codes
      </>
    ),
  },
  {
    id: 8,
    title: (
      <>
        Neglecting regular <br/> maintenance
      </>
    ),
  },
];

const DoAndDont = () => {
  return (
    <div>
      <div data-aos="zoom-in" className="container common__padding__top">
        <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.doAndDont__headingIconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
          RH's Concrete Constructors Do And Don't
          </h2>
        </div>

        {/* Our Renovators Do's part  */}
        <div className="flex justify-center items-center my-[25px]">
          <buttton className="btn__first text-[20px] 5xl:text-[25px] font-bold leading-normal text-white text-center py-[4px] md:py-[10px] 5xl:py-[17px] px-[50px] lg:px-[140px] 5xl:px-[170px]">
          Our Concrete Constructors Do
          </buttton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[15px] 2xl:gap-[20px] 5xl:gap-[25px]">
          {ourRenovatorData1?.map((data) => {
            return (
              <div
                key={data.id}
                className="flex justify-center items-center how_we_cart___bg py-[14px] px-2"
              >
                <p className="text-lg 5xl:text-[20px] text-center font-bold text-black leading-[25px]">
                  {data.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* second part  */}
        <div className="w-full flex flex-col md:flex-row justify-center mt-[15px] 2xl:mt-[20px] 5xl:mt-[25px] gap-[15px] 2xl:gap-[20px] 5xl:gap-[25px]">
            <div className="w-full md:w-1/4 how_we_cart___bg pt-[14px] pb-[21px] px-2">
              <p className="text-lg 5xl:text-[20px] text-center font-bold text-black leading-[25px]">
              Adhere to environmental <br/> regulations.
              </p>
            </div>
            <div className="w-full md:w-1/4 how_we_cart___bg pt-[14px] pb-[21px] px-2">
              <p className="text-lg 5xl:text-[20px] text-center font-bold text-black leading-[25px]">
              Maintain clear <br/> communication with clients.
              </p>
            </div>
          </div>

        {/* Our Renovators Don’ts part  */}
        <div className="flex justify-center items-center my-[25px]">
          <buttton className="btn__second text-[20px] 5xl:text-[25px] font-bold leading-normal text-white text-center py-[4px] md:py-[10px] 5xl:py-[17px] px-[50px] lg:px-[140px] 5xl:px-[170px]">
          Our Concrete Constructors Don't
          </buttton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[15px] 2xl:gap-[20px] 5xl:gap-[25px]">
          {ourRenovatorData2?.map((data) => {
            return (
              <div
                key={data.id}
                className="flex justify-center items-center how_we_cart___bg pt-[14px] pb-[21px] px-2"
              >
                <p className="text-lg 5xl:text-[20px] text-center font-bold text-black leading-[25px]">
                  {data.title}
                </p>
              </div>
            );
          })}
        </div>
        {/* second part  */}
        <div className="w-full flex flex-col md:flex-row justify-center mt-[15px] 2xl:mt-[20px] 5xl:mt-[25px] gap-[15px] 2xl:gap-[20px] 5xl:gap-[25px]">
            <div className="w-full md:w-1/4 how_we_cart___bg pt-[14px] pb-[21px] px-2">
              <p className="text-lg 5xl:text-[20px] text-center font-bold text-black leading-[25px]">
              Overlooking <br/> environmental impact
              </p>
            </div>
            <div className="w-full md:w-1/4 how_we_cart___bg pt-[14px] pb-[21px] px-2">
              <p className="text-lg 5xl:text-[20px] text-center font-bold text-black leading-[25px]">
              Poor communication among <br/> team members
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default DoAndDont;
