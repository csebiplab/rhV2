import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Reputed = () => {
    return (
        <div className="full__section_l_p pr-3 md:pr-0 common__padding__top">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
                <div className="order-2 md:col-span-1">
                    <Image src="/assets/bestConcreteConstructor/reputed.png" alt='Reputed' width={812} height={720}/>
                </div>
                <div className="order-1 md:col-span-1">
                    <div>
                        <HeadingIcon text={headingIconText.reputed__headingIconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-normal text-black text-center md:text-left'>Reputed Cement Contractors in Brooklyn</h2>
                    <p className='text-base 5xl:text-lg font-normal text-center md:text-left text-black leading-normal 5xl:leading-[40px] mt-[5px]'>RH Construction USA Inc. stands out as one of the most reputed cement contractor companies in Brooklyn, known for its unwavering commitment to quality and excellence. Our team of highly skilled professionals is well-versed in the latest industry techniques and utilizes cutting-edge technology to ensure precision and efficiency in every cement project. Committed to customer satisfaction, we work closely with clients to bring their vision to life, making them a go-to choice for cement contracting in Brooklyn. This commitment to client satisfaction has not only solidified our company's standing as a reputed cement contractor in Brooklyn but has also garnered a loyal clientele who appreciate the company's dedication to delivering exceptional results.</p>
                    <p className='text-base 5xl:text-lg font-normal text-center md:text-left text-black leading-normal 5xl:leading-[40px] mt-0'>RH Construction USA Inc is a trusted name for cement contracting in Brooklyn, known for exceptional quality and reliable service. With years of experience in concrete and cement work, we bring expertise to each project, ensuring durability, precision, and a flawless finish. We take pride in its ability to handle projects of varying scales, from residential foundations to commercial structures, demonstrating versatility and expertise. Specializing in cement installations, repairs, and decorative concrete solutions, RH Construction USA Inc meets residential and commercial needs with professionalism and attention to detail.</p>
                </div>
            </div>

        </div>
    );
};

export default Reputed;