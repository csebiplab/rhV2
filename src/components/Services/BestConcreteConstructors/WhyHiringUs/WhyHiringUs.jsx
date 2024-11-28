"use client";

import Image from "next/image";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const whyHiringData = [
  {
    imgSrc: "/assets/bestConcreteConstructor/why_hiring/wh1.png",
    title: "Proposal & Cost Estimation",
    description: `Based on the assessment, our concrete contractors provide clients with a detailed proposal outlining the necessary repairs. This includes a breakdown of the scope of work, materials required, and a cost estimate for the entire project.`,
  },
  {
    imgSrc: "/assets/bestConcreteConstructor/why_hiring/wh2.png",
    title: "Customized Repair Plans",
    description: `Our concrete repair contractors develop customized repair plans tailored to the specific needs of each project. This may involve addressing issues such as cracks, spalling, corrosion, or other forms of deterioration.`,
  },
  {
    imgSrc: "/assets/bestConcreteConstructor/why_hiring/wh3.png",
    title: "Material Selection",
    description: `Depending on the type and severity of the damage, our contractors select appropriate materials for the repair. This could include concrete patching compounds, epoxy injections, sealants, or other specialized products designed to restore the structural integrity.`,
  },
  {
    imgSrc: "/assets/bestConcreteConstructor/why_hiring/wh4.png",
    title: "Repair Execution",
    description: `Our skilled technicians or laborers execute the repair plan according to industry best practices. This may involve applying repair mortars, installing reinforcement, or utilizing other techniques to address the issues identified during the inspection.`,
  },
  {
    imgSrc: "/assets/bestConcreteConstructor/why_hiring/wh5.png",
    title: "Quality Assurance",
    description: `Contractors implement quality assurance measures throughout the repair process to ensure that the work meets industry and client expectations. This includes regular inspections, material testing, and adherence to safety protocols.`,
  },
  {
    imgSrc: "/assets/bestConcreteConstructor/why_hiring/wh6.png",
    title: "Timely Project Completion",
    description: `Our concrete repair contractors work efficiently to complete projects within agreed-upon timelines. Timely completion is essential to minimize disruptions to the client's operations and prevent further deterioration of the concrete.`,
  },
];

const WhyHiringUs = () => {
  return (
    <div className="">
      <div className="container">
        <div className="common__padding__top">
          <div className="flex justify-center items-center">
            <HeadingIcon text={headingIconText.whyHiring__headingIconText} />
          </div>
          <div className="pb-[25px]">
            <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-center pb-[10px]">
            How do Our Concrete Repair Contractors Work?
            </h2>
            <p className="text-lg font-normal text-black leading-[36px] text-center">
            Concrete repair contractors of RH Construction USA Inc, play a crucial role in maintaining and enhancing the longevity of various structures. Here are some key points outlining how these contractors typically operate: By following these steps, our concrete repair contractors contribute to the sustainability and safety of structures, extending our lifespan and maintaining our functionality
            </p>
          </div>

          <div className="grid gird-cols-1 lg:grid-cols-3 gap-10">
            {whyHiringData.map((data, index) => (
              <div
                key={index}
                className={`relative text-center py-4 lg:py-6 lg:px-8 5xl:px-10`}
              >
                <div className="">
                  <Image
                    src={data.imgSrc}
                    width={129}
                    height={129}
                    alt="hiring us"
                    className="w-[129px] h-[129px] mx-auto"
                  />

                  <div className="text-center pt-[15px]">
                    <p className="text-[22px] 5xl:text-[25px] font-bold pb-[5px] text-black">
                      {data.title}
                    </p>
                    <p className="text-base 5xl:text-lg text-center pb-[20px] 5xl:pb-[28px]  text-black leading-[24px] md:leading-6">
                      {data.description}
                    </p>
                  </div>
                </div>
                <hr className="absolute bottom-0 left-0 right-0 border border-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHiringUs;
