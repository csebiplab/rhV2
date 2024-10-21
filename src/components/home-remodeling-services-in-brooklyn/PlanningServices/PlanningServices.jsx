import React from 'react';
import "./PlanningServices.css";
import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const PlanningData = [
    {
      title: "Define Your Goals and Objectives",
    },
    {
      title: "Set a Budget",
    },
    {
      title: "Research and Gather Ideas",
    },
    {
      title: "Prioritize Renovation Areas",
    },
    {
      title: "Find Reliable Contractors and Suppliers",
    },
    {
      title: "Obtain Necessary Permits and Approvals",
    },
    {
      title: "Create a Timeline for the Project",
    },
    {
      title: "Prepare for Potential Challenges and Contingencies",
    },
    {
      title: "Consider Long-Term Maintenance and Sustainability",
    },
    {
      title: "Communicate Effectively with Everyone Involved",
    },
    {
      title: "Consider Design and Aesthetic Preferences",
    },
    {
      title: "Explore Financing Options",
    },
    {
      title: "Ensure Safety Measures are in Place",
    },
    {
      title: "Prepare for the Final Inspection and Completion of the Project",
    }
  ];

const PlanningServices = () => {
    return (
        <div className="container common__padding__top">
            <div className='flex justify-center items-center'>
                <HeadingIcon text={headingIconText.planning__HeadingIconText}/>
            </div>
            <div className="pb-[25px]">
            <h2 className="text-3xl md:text-[32px] lg:text-[33px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center">Considerations for Starting Your <span className="text-primary">Home Remodeling Plan</span></h2>
            <p className="text-lg font-normal text-black leading-[36px] text-center">When starting to plan for a home remodeling in Brooklyn, there are several important considerations to keep in mind. By carefully considering these factors upfront, you can ensure a smoother and more successful renovation process.</p>
            </div>

            {/* cart part  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 5xl:grid-cols-6 justify-items-center gap-[17px]">
                {
                    PlanningData?.map((data, index)=>{
                        return <div key={index} className="planning_cart_bg p-[12px] w-full">
                            <p className="text-lg font-bold text-center leading-normal text-white">{data.title}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default PlanningServices;