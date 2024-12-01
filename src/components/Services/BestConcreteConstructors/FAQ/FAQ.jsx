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
      "What concrete construction services does RH Construction USA Inc. offer?",
    answer:
      "We offer comprehensive concrete construction services, including foundation work, slab construction, and vertical structures.",
  },
  {
    id: 2,
    question: "Can RH Construction USA Inc. handle residential and commercial concrete projects?",
    answer:
      "Our company is equipped to handle various projects, including residential homes, commercial buildings, and industrial facilities.",
  },
  {
    id: 3,
    question:
      "What sets RH Construction USA Inc. apart from other concrete companies?",
    answer:
      "Our company distinguishes itself through its commitment to quality craftsmanship, timely project delivery, and customer satisfaction.",
  },
  {
    id: 4,
    question:
      "Does RH Construction USA Inc. provide custom concrete solutions for unique project requirements?",
    answer:
      "We work closely with clients to understand their needs and offer tailored concrete solutions to meet project requirements.",
  },
  {
    id: 5,
    question:
      "What safety measures does RH Construction USA Inc. implement during concrete construction projects?",
    answer:
      "Our company prioritizes safety, adhering to industry standards and regulations, and employs rigorous safety protocols to ensure a secure working environment.",
  },
  {
    id: 6,
    question: "How does RH Construction USA Inc. handle concrete repair and restoration projects?",
    answer:
      "Our contractors offer concrete repair and restoration services, addressing issues such as cracks, deterioration, and other structural concerns with effective solutions.",
  },
  {
    id: 7,
    question: "Do you offer free estimates for concrete projects?",
    answer:
      "Yes, we provide free, no-obligation estimates for all concrete projects. Simply contact us, and one of our experts will visit your site to assess the scope of work and provide a detailed quote.",
  },
  {
    id: 8,
    question: "How long does it take to complete a concrete project?",
    answer:
      "The timeline for completing a concrete project depends on the size and complexity. Typically, smaller projects like driveways may take a few days, while larger projects like foundations or commercial spaces may take longer. We will provide a clear timeline during the estimate.",
  },
  {
    id: 9,
    question: "Is your concrete work guaranteed?",
    answer:
      "Yes, we stand behind our work with a satisfaction guarantee. We use only the best materials and the latest techniques to ensure long-lasting results. If there are any issues, we will address them promptly.",
  },
  {
    id: 10,
    question: "What types of concrete do you use for different projects?",
    answer:
      "We use high-quality concrete that is suitable for various applications. Depending on the project, we offer standard, high-strength, or decorative concrete to meet your needs.",
  },
  {
    id: 11,
    question:
      "Do you offer concrete sealing services?",
    answer:
      "We provide sealing services to protect your concrete surfaces from the elements and wear. Sealing enhances the durability and appearance of your concrete, making it easier to maintain.",
  },
  {
    id: 12,
    question: "How does RH Construction USA Inc. manage project timelines and deadlines?",
    answer:
      "Our concrete constructors employ effective project management strategies to ensure timelines are met and deadlines are adhered to, maintaining efficiency throughout the construction process.",
  },
  {
    id: 13,
    question: "How can I get started with RH Construction USA Inc.?",
    answer:
      "Getting started is simple! Contact us today to schedule a consultation and receive a free estimate. Our team will walk you through the process and provide all the information you need to begin your concrete project.",
  },
  {
    id: 14,
    question:
      "Do you handle the demolition and removal of old concrete?",
    answer:
      "Yes, we offer demolition and removal services for old concrete structures. If you have an existing driveway, sidewalk, or slab that needs to be replaced, our team can safely remove and dispose of the old concrete before installing the new one.",
  },
  {
    id: 15,
    question: "What is the process for installing a concrete foundation?",
    answer:
      "The process begins with an initial consultation and site assessment. Afterward, we prepare the site by clearing debris and leveling the ground. Then, we pour the concrete, ensuring proper curing time and reinforcing it. Finally, we conduct a quality check to ensure the foundation is solid and durable.",
  },
  {
    id: 16,
    question: "Do you offer concrete lifting or mudjacking services?",
    answer:
      "Yes, we offer concrete lifting and mudjacking services. If your concrete slabs or driveway have sunk or are uneven, we can raise and level them to restore their appearance and function.",
  },
  {
    id: 17,
    question: "Are your concrete contractors licensed and insured?",
    answer:
      "Yes, our concrete contractors are fully licensed, bonded, and insured. We adhere to industry standards and local regulations to ensure a safe and professional job site.",
  },
  {
    id: 18,
    question: "Can I request a specific color or finish for my concrete project?",
    answer:
      "Absolutely! We offer a variety of colors, textures, and finishes, including stamped concrete, stained concrete, and exposed aggregate. Let us know your preferences, and we will customize the design to match your vision.",
  },
  {
    id: 19,
    question: "Will my concrete project require permits?",
    answer:
      "Certain projects, especially larger ones like foundations, driveways, or sidewalks, may require permits based on local building codes and regulations. We can help you navigate the permit process and ensure everything complies with Brooklyn's requirements.",
  },
  {
    id: 20,
    question: "What are the benefits of choosing concrete for my project?",
    answer:
      "Concrete is a durable, cost-effective, and versatile material that is suitable for a variety of projects. It can withstand heavy traffic and extreme weather conditions and is low-maintenance. Additionally, concrete offers a range of aesthetic options, including decorative finishes, to enhance the overall look of your property.",
  },
  {
    id: 21,
    question:
      "What should I do if my concrete cracks after installation?",
    answer:
      "While concrete is extremely durable, minor cracking can sometimes occur due to settling or temperature changes. If you notice cracks, it's important to contact us right away. We offer concrete repair services to address and fix any issues, ensuring the integrity of your concrete surfaces.",
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
            <HeadingIcon text={headingIconText.faq__HeadingIconText} />
          </div>

          <div>
            <h3 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center pb-2">
            FAQ For RH Concrete Constructor
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
