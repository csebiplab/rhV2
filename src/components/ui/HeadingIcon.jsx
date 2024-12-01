import Image from "next/image";

const HeadingIcon = ({ text = "empty text" , classes={} }) => {
  return (
    <div className="flex items-center gap-[15px]">
      {/* <Image src="/assets/icons/heading1.png" alt="heading icon" height={23} width={23}/> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="12"
        viewBox="0 0 23 12"
        fill="none"
      >
        <circle cx="6" cy="6" r="6" fill="#FFB703" />
        <circle cx="16.667" cy="6" r="6" fill="black" />
      </svg>
      <p className={`text-center text-sm md:text-base leading-[18px] font-normal mx-2 ${classes?.textBlack}`}>{text}</p>
      {/* <Image src="/assets/icons/heading2.png" alt="heading icon" height={23} width={23}/> */}
    </div>
  );
};

export default HeadingIcon;