"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
const faqQuestionsNAns = [
  {
    id: 1,
    question:
      "What types of home renovation services does RH Construction USA Inc. offer?",
    answer:
      "We specialize in a wide range of home renovation services, including kitchen remodeling, bathroom renovations, room additions, and complete home makeovers. We equip our expert team to handle projects of various sizes and complexities.",
  },
  {
    id: 2,
    question:
      "Is RH Construction USA Inc. licensed and insured?",
    answer:
      "Yes, RH Construction USA Inc. is fully licensed and insured. We prioritize the safety and security of our clients, and our credentials reflect our commitment to professionalism and quality service.",
  },
  {
    id: 3,
    question:
      "What is the typical timeline for a home renovation project with RH Construction USA Inc.?",
    answer:
      "The timeline for a home renovation project can vary based on the scope and complexity of the work. We will provide you with a detailed timeline outlining the different phases of your project, allowing you to have a clear understanding of the expected duration.",
  },
  {
    id: 4,
    question:
      "How does RH Construction USA Inc. handle budget considerations for home renovations?",
    answer:
      "We understand the importance of budgeting for home renovations. Our home renovator will discuss your budget constraints and work to develop a plan that maximizes value while staying within your financial parameters.",
  },
  {
    id: 5,
    question:
      "Can I see examples of RH Construction USA Inc.'s previous renovation projects?",
    answer:
      "Certainly! Visit our website's portfolio section to view a selection of our completed projects. These examples showcase the diversity of our work and the quality of craftsmanship you can expect from our company.",
  },
  {
    id: 6,
    question:
      "Do you provide free estimates?",
    answer:
      "Yes, we provide free, no-obligation estimates for all home renovation projects. During our consultation, we assess your needs, discuss design ideas, and provide a detailed cost estimate to help you make an informed decision.",
  },
  {
    id: 7,
    question:
      "Can I live in my home during my home renovation period?",
    answer:
      "In most cases, you can continue living in your home during the renovation. However, depending on the nature of the work, certain areas may be temporarily off-limits. We work to minimize disruptions and ensure the safety and comfort of your household throughout the process.",
  },
  {
    id: 8,
    question:
      "Do you offer eco-friendly renovation options?",
    answer:
      "Yes, we incorporate sustainable practices into our renovation projects. We can recommend eco-friendly materials, energy-efficient appliances, and designs that reduce waste and promote environmental sustainability.",
  },
  {
    id: 9,
    question:
      "How do you ensure that my renovation project stays on budget?",
    answer:
      "We provide a detailed project plan and cost estimate upfront to avoid surprises. Throughout the process, we maintain transparent communication and work within your agreed-upon budget. We discuss any changes or adjustments with you before proceeding.",
  },
  {
    id: 10,
    question:
      "How can I begin my home renovation project?",
    answer:
      "Getting started is easy! Simply contact RH Construction USA Inc. to schedule a consultation. We'll discuss your ideas, assess your space, and provide a customized plan to bring your renovation vision to life.",
  },
  {
    id: 11,
    question:
      "What makes RH Construction USA Inc. different from other contractors?",
    answer:
      "RH Construction USA Inc. stands out for our commitment to quality craftsmanship, personalized service, and seamless communication. We prioritize your satisfaction, delivering exceptional results on time and within budget. Our team brings years of expertise and attention to detail to every project, ensuring you get the best possible renovation experience.",
  },
  {
    id: 12,
    question:
      "Can you help with design ideas for my renovation?",
    answer:
      " Absolutely! RH Construction USA Inc. offers expert design assistance to help you achieve the look and feel you want for your home. Whether you have a specific vision or need inspiration, our team can provide recommendations on layouts, materials, color schemes, and more.",
  },
  {
    id: 13,
    question:
      "Do you deal with renovation permits and inspections?",
    answer:
      "Yes, we take care of all necessary permits and coordinate inspections to ensure your renovation project complies with local building codes. You can rely on us to handle these details, allowing you to focus on the exciting transformation of your home.",
  },
  {
    id: 14,
    question:
      "What measures do you take to ensure cleanliness and safety during the renovation?",
    answer:
      " We prioritize both cleanliness and safety on every job site. Our team takes steps to protect your home from dust and debris, and we follow strict safety protocols to ensure a safe work environment. We clean up daily and conduct a thorough final cleanup once the renovation is complete.",
  },
  {
    id: 15,
    question:
      "What payment options do you offer?",
    answer:
      " We offer flexible payment options to make your renovation as convenient as possible. During the initial consultation, we'll discuss payment terms and schedules to ensure you're comfortable with the financial plan.",
  },
  {
    id: 16,
    question:
      "What areas do you serve?",
    answer:
      "RH Construction USA Inc. primarily serves Brooklyn and the surrounding New York City boroughs. If you're located in the area and interested in our home renovation services, feel free to contact us to confirm that we serve your specific location.",
  },
  {
    id: 17,
    question:
      "What is the first step after scheduling a consultation?",
    answer:
      "After scheduling your consultation, one of our experienced team members will visit your home to assess the space, discuss your goals, and gather information about your design preferences and budget. This initial meeting helps us create a customized renovation plan that meets your needs and vision.",
  },
  {
    id: 18,
    question:
      "What kind of materials do you use for renovations?",
    answer:
      "We use high-quality, durable materials from trusted suppliers to ensure your renovation lasts for years to come. Our team can source a wide variety of materials, including eco-friendly and energy-efficient options, to match your design preferences and budget.",
  },
  {
    id: 19,
    question:
      "Can you renovate historic or older homes?",
    answer:
      "Yes, we have experience working with historic and older homes, and we understand the special considerations that come with these projects. We take care to preserve the character and integrity of your home while making modern upgrades to enhance its comfort and functionality.",
  },
  {
    id: 20,
    question:
      "How do you handle structural renovations?",
    answer:
      " Our team comprises experienced professionals who ensure safety and compliance with local building codes during structural renovations like wall removal or extension additions. We also coordinate with structural engineers when necessary to guarantee the safety and stability of your home.",
  },
  {
    id: 21,
    question:
      "What is your process for handling unexpected issues, such as hidden damage?",
    answer:
      "In older homes, or during renovations, hidden issues such as water damage, electrical problems, or structural defects can arise. When we encounter such issues, we assess the situation, inform you immediately, and provide solutions to address the problem while keeping the project on track.",
  },
  {
    id: 22,
    question:
      "Can you help with small renovations or repairs?",
    answer:
      "Yes, RH Construction USA Inc. is pleased to take on projects of all sizes, from minor repairs and upgrades to full-scale home remodels. Whether you need a fresh coat of paint, a new countertop, or a complete home renovation, we are ready to assist with any project.",
  },
  {
    id: 23,
    question:
      "How do I prepare my home before the renovation starts?",
    answer:
      " Before the renovation starts, we recommend clearing out the affected areas and removing any valuable or fragile items to protect them from dust or damage. Our team will provide detailed instructions on any additional preparations, depending on the scope of your project.",
  },
  {
    id: 24,
    question:
      "Will you help with post-renovation clean-up?",
    answer:
      " Yes, we take care of all post-renovation clean-up. Our team meticulously cleans the site after the work is complete, removing all debris, dust, and construction materials, so you can immediately enjoy your newly renovated space.",
  },
  {
    id: 25,
    question:
      "How do you handle noise and disruptions during renovations?",
    answer:
      "We understand that home renovations can be disruptive, and we do our best to minimize the impact on your daily life. We work efficiently, adhere to a clear schedule, and take measures to control noise and dust. Our team is respectful of your home and committed to making the renovation process as smooth as possible.",
  },
  {
    id: 26,
    question:
      "Can you help me renovate my home to accommodate aging-in-place or accessibility requirements?",
    answer:
      "Yes, RH Construction USA, Inc., can assist with renovations aimed at improving accessibility and making your home more comfortable as you age. We offer solutions like installing wider doorways, grab bars, non-slip flooring, and walk-in showers to ensure your home remains safe and functional for all stages of life.",
  },
  
];
const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <div className="container common__padding__top">
      <div className="flex flex-col justify-center items-center ">
              <div>
              <HeadingIcon text={headingIconText.faq__HeadingIconText}/>
              </div>

              <div>
                <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center pb-2">
                FAQ about RH Construction USA Inc.'s Home Renovators.
                </h3>
              </div>
            </div>
            <>
              {faqQuestionsNAns.map(({ question, answer, id }, idx) => (
                <Accordion
                  key={id}
                  open={open === id}
                  className="mb-1 text-white bg-black"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(id)}
                    className=" relative"
                  >
                    <div
                      className={`text-white  border-b-0 transition-colors py-sm px-5`}
                    >
                      <span className="text-white text-base font-bold">
                        {question}
                      </span>
                    </div>
                    <div className="absolute right-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                      >
                        <path
                          d="M7.85438 8.80353L0.908939 1.3452C0.432523 0.833597 0.795322 -9.06148e-07 1.4944 -8.7698e-07L14.5803 -3.30987e-07C15.2793 -3.01819e-07 15.6421 0.833599 15.1657 1.3452L8.22029 8.80353C8.12142 8.9097 7.95324 8.9097 7.85438 8.80353Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </AccordionHeader>
                  <AccordionBody className="px-3 py-1 text-base font-normal bg-white text-black border border-black">
                    {answer}
                  </AccordionBody>
                </Accordion>
              ))}
            </>
      </div>
    </div>
  );
};

export default FAQ;
