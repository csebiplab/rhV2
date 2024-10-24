import achievement from "@/components/__home_components/Images/Achieve.png";
import Image from "next/image";

const Achievement = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 md:gap-2">
        <div className="flex gap-2">
          <div className="w-full h-auto md:w-[180px] md:h-[147.98px] md:flex-0  my-class rounded-[8px] px-2 lg:px-11 py-5 md:py-0 md:px-0 md:pt-[31.25px] text-center">
            <p className="lg:text-[38px] font-bold text-lg lg:leading-[47.25px] xs:mb-0 md:mb-[5px] text-center">
              96%
            </p>
            <p className="lg:text-base text-xs font-bold lg:leading-[22.5px] text-center ">
              Recommended
            </p>
          </div>
          <div className="w-full h-auto md:w-[180px] md:h-[147.98px] md:flex-0  my-class rounded-[8px] px-2 lg:px-11 py-5 md:py-0 md:px-0 md:pt-[31.25px] text-center">
            <p className="lg:text-[38px] font-bold text-lg lg:leading-[47.25px] xs:mb-0 md:mb-[5px]">
              15
            </p>
            <p className="lg:text-base text-xs font-semibold lg:leading-[22.5px]">
              Years In Business
            </p>
          </div>
        </div>
        <div className="md:w-[604px] md:h-[147.98px]  my-class rounded-[8px] px-[22.5px] pt-2">
          <p className="text-base lg:text-lg font-bold lg:leading-[27px] mb-[5px]">
            Achievements
          </p>
          <Image
            src={achievement}
            width={559}
            height={82.98}
            alt="achievement"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Achievement;
