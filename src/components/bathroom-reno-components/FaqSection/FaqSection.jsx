"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
const faqQuestionsNAns = [
  {
    id: 1,
    question:
      "What sets RH Construction USA Inc. apart in bath construction projects?",
    answer:
      "Our bathroom renovation company distinguishes itself through a commitment to high-quality craftsmanship, innovative design solutions, and a customer-centric approach. Our experienced team ensures each bath construction project is tailored to meet the unique.",
  },
  {
    id: 2,
    question:
      "How does RH Construction USA Inc. ensure cost-effectiveness in bath construction?",
    answer:
      "We prioritize efficiency in project management and sourcing, allowing us to maintain competitive pricing without compromising on the quality of materials or workmanship. Our transparent pricing structure ensures clients are informed at every step.",
  },
  {
    id: 3,
    question:
      "What steps does RH Construction USA Inc. take to ensure a smooth project timeline?",
    answer:
      "We meticulously plan each bath construction project, considering factors such as material availability, weather conditions, and potential challenges. Our project management team is adept at adapting to unforeseen circumstances to keep timelines on track.",
  },
  {
    id: 4,
    question:
      "Can RH Construction USA Inc. handle both small and large-scale bath construction projects?",
    answer:
      "Absolutely. Whether it's a small bathroom renovation or a large-scale construction project, our team is dedicated to delivering exceptional results.",
  },
  {
    id: 5,
    question:
      "How does RH Construction USA Inc. prioritize sustainability in bath construction projects?",
    answer:
      "Sustainability is a core value at our bathroom remodeling services company in Brooklyn. We source eco-friendly materials, incorporate energy-efficient solutions, and adhere to responsible construction practices to minimize the environmental impact of our projects.",
  },
  {
    id: 6,
    question:
      "What client involvement is encouraged during a bath construction project with RH Construction USA Inc.?",
    answer:
      "We believe in collaborative partnerships with our clients. From the initial design phase to material selection and throughout the construction process, we actively seek and value client input to ensure their vision is realized.",
  },
  {
    id: 7,
    question:
      "What types of bathroom renovations does RH Construction USA Inc. offer?",
    answer:
      "We offer complete bathroom renovations, including design and remodeling, fixture installations, plumbing upgrades, and tiling. Whether you're looking to modernize a small bathroom or create a luxurious master suite, our team can handle all aspects of the renovation.",
  },
  {
    id: 8,
    question: "How long does a typical bathroom remodeling take?",
    answer:
      "The timeline for a bathroom renovation depends on the scope of work, but a typical project can take anywhere from 2 to 4 weeks. We will keep you informed throughout the process to ensure you know exactly what to expect.",
  },
  {
    id: 9,
    question: "Can I customize the design of my bathroom? ",
    answer:
      "Absolutely! We work closely with our clients to create a design that meets their style preferences and functional needs. Whether you want a minimalist look, a spa-like retreat, or something in between, we'll bring your vision to life.",
  },
  {
    id: 10,
    question:
      "Do you handle plumbing and electrical work during the renovation?",
    answer:
      "Yes, we handle all necessary plumbing and electrical work during the renovation. Our licensed professionals guarantee the safety and compliance of all installations with code requirements.",
  },
  {
    id: 11,
    question: "What materials do you recommend for bathroom renovations?",
    answer:
      "We recommend high-quality, durable materials such as porcelain tiles, quartz countertops, and water-resistant fixtures that not only look appealing but can withstand the humid bathroom environment. However, we are flexible and will work with your material preferences.",
  },
  {
    id: 12,
    question: "Do I need a permit for a bathroom renovation? ",
    answer:
      "In most cases, a permit is required for significant renovations, especially if plumbing and electrical systems are involved. RH Construction USA Inc. will manage the permit process on your behalf to guarantee compliance with regulations.",
  },
  {
    id: 13,
    question: "How much does a bathroom renovation typically cost? ",
    answer:
      "The cost of a bathroom renovation varies based on the size of the bathroom, the materials chosen, and the complexity of the project. We offer free consultations to discuss your ideas and provide a detailed estimate based on your specific requirements.",
  },
  {
    id: 14,
    question: "Will I need to leave my home during the renovation? ",
    answer:
      "In most cases, you will not need to leave your home, but there may be disruptions depending on the extent of the work. We do our best to minimize inconvenience and maintain a clean workspace throughout the project.",
  },
  {
    id: 15,
    question:
      "Can you help me choose the right fixtures and finishes for my bathroom? ",
    answer:
      "Yes, we can assist with selecting the best fixtures, finishes, and materials that match your style, budget, and functionality needs. Our team has extensive experience with bathroom design and can offer recommendations based on your preferences.",
  },
  {
    id: 16,
    question:
      "What makes RH Construction USA Inc. the best choice for bathroom renovations?",
    answer:
      "RH Construction USA Inc. is known for our commitment to quality craftsmanship, attention to detail, and excellent customer service. With years of experience in the industry, we guarantee professional results that exceed your expectations.",
  },
  {
    id: 17,
    question: "Do you offer eco-friendly options for bathroom renovations? ",
    answer:
      "Yes, we offer a variety of eco-friendly options for bathroom renovations, including water-saving fixtures, energy-efficient lighting, and sustainable materials such as recycled tiles and countertops. We're committed to helping you create a bathroom that is both stylish and environmentally responsible.",
  },
  {
    id: 18,
    question: "Can you expand or reconfigure the layout of my bathroom? ",
    answer:
      "Absolutely! We can reconfigure your bathroom layout to improve space efficiency, add new features, or accommodate changing needs. Whether you need more storage, a larger shower, or better accessibility, we can customize the layout to meet your requirements.",
  },
  {
    id: 19,
    question: " What should I prepare before starting a bathroom renovation? ",
    answer:
      "Before starting a bathroom renovation, it's important to have a clear idea of your budget, preferred style, and any must-have features. We recommend gathering inspiration and considering how the space will be used. Our team will guide you through every step, from planning to completion.",
  },
  {
    id: 20,
    question: "Will you remove old fixtures and debris during the renovation?",
    answer:
      "Yes, we handle all demolition and debris removal. Our team will safely remove old fixtures, tiles, and other materials to prepare the space for the new renovation. We ensure that your home is kept clean and tidy throughout the process.",
  },
  {
    id: 21,
    question: "How do you handle unexpected issues during the renovation?",
    answer:
      "If any unforeseen issues arise during the renovation, such as hidden plumbing problems or structural concerns, we will promptly inform you and provide solutions. Our team is experienced in managing unexpected challenges while staying on track with the project timeline and budget.",
  },
  {
    id: 22,
    question: "Can you install custom cabinetry or vanities? ",
    answer:
      "Yes, we can design and install custom cabinetry and vanities tailored to your space and storage needs. From sleek, modern designs to traditional cabinetry, we'll help you choose the perfect style that complements your bathroom renovation.",
  },
  {
    id: 23,
    question: "How do I get started with my bathroom renovation project?",
    answer:
      "Getting started is easy! Simply contact us for a free consultation. We'll discuss your ideas, provide expert advice, and create a plan tailored to your needs. From there, we'll guide you through the entire renovation process to ensure a smooth and successful project.",
  },
  {
    id: 24,
    question:
      "Can you work within a specific budget for my bathroom renovation? ",
    answer:
      "Yes, we can work within a budget that suits your financial needs. During our consultation, we will discuss your budget and suggest design ideas, materials, and solutions that meet your goals without compromising quality or style.",
  },
  {
    id: 25,
    question: "Do you offer design consultations before the renovation? ",
    answer:
      "Yes, we offer design consultations to help you plan your ideal bathroom. Our design team will work with you to create a layout that maximizes space, style, and functionality, ensuring that every detail aligns with your vision.",
  },
  {
    id: 26,
    question: "How do you ensure high-quality workmanship on every project?",
    answer:
      "At RH Construction USA Inc., we take pride in delivering exceptional craftsmanship on every project. Our experienced professionals use the highest quality materials, follow industry best practices, and pay close attention to every detail, ensuring a flawless finish.",
  },
  {
    id: 27,
    question: "Will the renovation affect the plumbing in the rest of my home?",
    answer:
      "Typically, bathroom renovations are confined to the space being remodeled, and we take measures to ensure that the plumbing in the rest of your home is not affected. If any disruption to your water supply is necessary, we will coordinate with you in advance to minimize inconvenience.",
  },
  {
    id: 28,
    question:
      "Can you add special features like heated floors or a steam shower?",
    answer:
      "Yes, we can install luxury features such as heated floors, steam showers, rainfall showerheads, or built-in storage to enhance your bathroom's comfort and functionality. We specialize in creating custom designs that meet your specific desires.",
  },
  {
    id: 29,
    question: "Can you make my bathroom more accessible?",
    answer:
      "Absolutely! We offer a range of accessibility solutions, including walk-in showers, grab bars, wider doorways, and adjustable fixtures, to ensure that your bathroom is safe and functional for all users, including those with mobility challenges.",
  },
  {
    id: 30,
    question: "What are the latest trends in bathroom design that you offer?",
    answer:
      "Some of the latest trends we offer include minimalist designs, natural stone finishes, freestanding tubs, smart mirrors with built-in lighting, and matte black fixtures. We stay up-to-date with design innovations to provide modern, stylish bathroom renovations.",
  },
  {
    id: 31,
    question: "How will you communicate progress during the renovation?",
    answer:
      "We maintain clear and open communication throughout the renovation process. You'll have a dedicated project manager who will provide regular updates, answer any questions, and keep you informed of the progress every step of the way.",
  },
];
const FaqSection = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-[#FFFAEE]">
      <div className="container common__padding__top">
        <div className="flex flex-col justify-center items-center">
          <div>
            <HeadingIcon text={headingIconText.faq__IconTxt} />
          </div>

          <div>
            <h2 className="text-3xl lg:text-[32px] xl:text-[34px] 2xl:text-4xl 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] leading-normal font-bold text-black text-center pb-2">
              Bath Construction{" "}
              <span className="text-primary">
                {" "}
                Project Questions And Answers{" "}
              </span>
            </h2>
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
              <AccordionBody className="px-3 py-1 text-base font-normal bg-white text-black">
                {answer}
              </AccordionBody>
            </Accordion>
          ))}
        </>
      </div>
    </div>
  );
};

export default FaqSection;
