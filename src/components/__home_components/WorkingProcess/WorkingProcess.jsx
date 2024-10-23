import React from "react";
import "./WorkingProcess.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const workingData = [
  {
    id : 1,
    img : "/assets/home_page/new_home_page/working_process/wp1.png",
    title : "Project Planning & Design",
    desc : "We begin by meeting with clients to understand their needs, goals, and budget constraints."
  },
  {
    id : 2,
    img : "/assets/home_page/new_home_page/working_process/wp2.png",
    title : "Material & Resource ",
    desc : "We source high-quality materials and engage skilled laborers and subcontractors as needed."
  },
  {
    id : 3,
    img : "/assets/home_page/new_home_page/working_process/wp3.png",
    title : "Quality & Assurance",
    desc : "Throughout the construction phase, we conduct regular inspections and quality control checks to ensure that work meets our standards & adheres to the agreed-upon specific"
  },
  {
    id : 4,
    img : "/assets/home_page/new_home_page/working_process/wp4.png",
    title : "Communicate & Updates",
    desc : "We maintain open lines of communication with clients, providing regular updates on their projects' progress and addressing any concerns or queries they have."
  },
  {
    id : 5,
    img : "/assets/home_page/new_home_page/working_process/wp5.png",
    title : "Initial Consultation",
    desc : "We begin with an in-depth consultation to understand your project goals, budget, & timeline. We listen closely to your needs and provide expert advice to guide"
  },
  {
    id : 6,
    img : "/assets/home_page/new_home_page/working_process/wp6.png",
    title : "Estimation & Budgeting",
    desc : "We provide a clear and transparent estimate, breaking down the costs for labor, materials, and other project expenses. Our company works within your budget."
  },
  {
    id : 7,
    img : "/assets/home_page/new_home_page/working_process/wp7.png",
    title : "Quality & Assurance",
    desc : "We develop a detailed schedule to guarantee timely completion of the project. We coordinate all phases of the work, from demolition to construction, to meet agreed-upon."
  },
  {
    id : 8,
    img : "/assets/home_page/new_home_page/working_process/wp8.png",
    title : "Timely Completion",
    desc : "Our experienced construction team gets to work, adhering to safety protocols and quality standards. We handle all aspects of the build, including foundation, framing."
  },
  {
    id : 9,
    img : "/assets/home_page/new_home_page/working_process/wp9.png",
    title : "Ongoing Communication",
    desc : "Throughout the construction process, we maintain open communication with our clients. You'll receive updates and can ask questions as the project progresses."
  },
  {
    id : 10,
    img : "/assets/home_page/new_home_page/working_process/wp10.png",
    title : "Inspection & Walkthrough",
    desc : "Upon project completion, we conduct a thorough inspection to ensure everything meets our quality standards. To ensure your satisfaction."
  },
  {
    id : 11,
    img : "/assets/home_page/new_home_page/working_process/wp11.png",
    title : "Construction Support",
    desc : "Our company's commitment doesn't end with project completion. After the work is complete, we provide post-construction support to address."
  },
]

const WorkingProcess = () => {
  return (
    <div className="container common__padding__top">
      <div className="flex justify-center items-center">
        <HeadingIcon text={headingIconText.workingProcess__IconText} />
      </div>
      <div className="pb-[25px]">
        <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[29px] 2xl:text-[30px] 3xl:text-[32px] 4xl:text-[34px] 5xl:text-[36px] text-black font-bold leading-normal text-center pb-[10px]">
        Our General Contractor's Working Process in Brooklyn
        </h2>
        <p className="text-lg font-normal text-black leading-[36px] text-center">
        By following this comprehensive working process, we aim to deliver exceptional construction projects that exceed our clients's expectations while contributing positively to the Brooklyn community.
        </p>
      </div>

      {/* benefit data  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 5xl:grid-cols-4 gap-[15px]">
        {
          workingData?.map((data)=>{
              return <div key={data.id} className="cart__bg relative mt-10 px-[10px] pb-[24px]">
                  <Image src={data.img} alt="benefit image" width={92} height={92} className="absolute -top-12 left-0 right-0  w-[92px] h-[92px] mx-auto p-2 border-[3px] border-primary-50 rounded-full bg-white"/>
                  <p className="text-center text-[25px] font-bold leading-normal text-black mt-12">{data.title}</p>
                  <p className="text-center text-lg font-normal leading-normal text-black">{data.desc}</p>
              </div>
          })
        }
      </div>
      {/* second div  */}
      {/* <div className="w-full flex justify-center items-center mt-8">
      <div className="w-full md:w-1/2  lg:w-1/3 cart__bg relative mt-12 px-[10px] pb-[34px]">
                  <Image src="/assets/brooklyn_Home/benefits/benefit13.png" alt="benefit image" width={92} height={92} className="absolute -top-12 left-0 right-0  w-[92px] h-[92px] mx-auto p-2 border-[3px] border-black rounded-full bg-white"/>
                  <p className="text-center text-[25px] font-bold leading-normal text-black mt-12">Guaranteed Satisfaction</p>
                  <p className="text-center text-lg font-normal leading-normal text-black">We take pride in our work, and our renovators are committed to ensuring complete customer satisfaction. Our team works closely with you to understand your vision, and we won't consider the job done until you're fully satisfied with the result.</p>
              </div>
      </div> */}
    </div>
  );
};

export default WorkingProcess;
