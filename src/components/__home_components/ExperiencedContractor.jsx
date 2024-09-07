import cleaning from "@/components/__home_components/Images/cleaning.png";
import cleaning1 from "@/components/__home_components/Images/cleaning1.png";
import smallClean1 from "@/components/__home_components/Images/smallClean1.png";
import smallClean2 from "@/components/__home_components/Images/smallClean2.png";
import { smHeadingTexts } from "@/constants/smHeadingTexts";
import Image from "next/image";
import SmallHeadingWithIcon from "../ui/SmallHeadingWithIcon";

const ExperiencedContractor = () => {
  return (
    <div className="section-bg">
      <div className="py-9 md:py-10 lg:py-12 5xl:py-[120px] container overflow-y-auto">
        <div className="md:flex gap-4 lg:gap-10 xl:gap-12 3xl:gap-x-16 5xl:gap-x-20">
          {/* =========== Desktop View ============ */}
          <div className="max-h-screen md:flex w-full md:w-1/2 gap-0 md:gap-[22px]">
            <div className="hidden md:block">
              <Image
                src={cleaning1}
                width={807}
                height={608}
                className="md:w-full md:h-full lg:w-[399px] lg:h-full"
                alt="cleaning1"
              />
            </div>
            <div className="hidden md:block">
              <div className="text-center yellow-border py-3 md:py-8 my-2 md:my-0">
                <p className="text-2xl lg:text-[80px] lg:leading-10">15+</p>
                <p className="text-lg lg:text-[30px] leading-normal mt-2 md:mt-4 px-0 md:px-1">
                  Successful <br /> Years
                </p>
              </div>
              <Image
                src={cleaning}
                width={807}
                height={608}
                className="w-full md:w-full md:h-3/4 lg:w-[386px] lg:h-auto mt-2 lg:mt-2.5"
                alt="cleaning"
              />
            </div>
          </div>

          {/* ============= Mobile view ================ */}

          <div className="block md:hidden">
            <div>
              <Image
                src={smallClean1}
                width={370}
                height={280}
                className="w-full"
                alt="cleaning1"
              />
            </div>

            <div className="text-center yellow-border py-3 my-3">
              <p className="text-2xl lg:text-[80px] lg:leading-10">15+</p>
              <p className="text-lg lg:text-[30px] leading-normal mt-2 md:mt-4 px-0 md:px-1">
                Successful <br /> Years
              </p>
            </div>
            <div>
              <Image
                src={smallClean2}
                width={370}
                height={230}
                className="w-full"
                alt="cleaning"
              />
            </div>
          </div>

          <div className="mt-[26px] md:mt-0 w-full md:w-1/2 overflow-y-auto">
            <div className="flex justify-center md:block">
              <SmallHeadingWithIcon
                smallHeadingText={smHeadingTexts.expContractor}
              />
            </div>
            <h2 className="lg:leading-10 mb-1 mt-2 md:mt-0 lg:py-4 text-lg lg:text-4xl md:text-start text-center">
              EXPERIENCED BROOKLYN GENERAL CONTRACTOR
            </h2>
            <p className="md:text-[16px] text-black mx-auto text-start mt-[10px] md:mt-3 text-[12px] leading-[208%] lg:leading-[250%]">
              With years of expertise and a solid educational background, our
              Brooklyn-based general contracting firm stands out as a reliable
              partner for your construction projects. Our team comprises
              seasoned professionals who bring a wealth of knowledge and
              hands-on experience to every job site. From residential
              renovations to commercial builds, we have successfully delivered
              projects of varying scales, earning a reputation for excellence
              and integrity within the community
            </p>
            <p className="md:text-[16px] text-black mx-auto text-start mt-[10px] md:mt-3 text-[12px] leading-[208%] lg:leading-[250%]">
              At our core, we prioritize client satisfaction by combining our
              technical prowess with clear communication and meticulous
              attention to detail. Our commitment to staying abreast of industry
              advancements ensures that we employ the latest techniques and
              technologies to optimize project efficiency and quality. Whether
              you're envisioning a modern urban renovation or a timeless
              architectural masterpiece, our well-experienced and educated team
              is dedicated to bringing your vision to life with precision and
              professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencedContractor;
