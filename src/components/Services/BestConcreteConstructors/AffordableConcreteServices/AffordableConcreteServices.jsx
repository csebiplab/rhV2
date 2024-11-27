import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AffordableConcreteServices = () => {
    return (
        <div className="full__section_l_p pr-3 md:pr-0 common__padding__top">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
                <div className="order-2 md:col-span-1">
                    <Image src="/assets/bestConcreteConstructor/affordable.png" alt='affordable' width={804} height={767}/>
                </div>
                <div className="order-1 md:col-span-1">
                    <div>
                        <HeadingIcon text={headingIconText.affordableConcreateServices__headingIconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-normal text-black text-center md:text-left'>Dream Affordable Concrete Services at Your Fingertips</h2>
                    <p className='text-base 5xl:text-lg font-normal text-center md:text-left text-black leading-normal 5xl:leading-[40px] mt-[5px]'>RH Construction USA Inc. is your trusted partner for top-quality concrete services that blend durability with affordability. From foundations and patios to sidewalks and driveways, our expert team in Brooklyn brings your concrete dreams to life with precision and care. We pride ourselves on using premium materials and the latest techniques to ensure lasting results that elevate your space. Our company is the epitome of affordable and top-notch concrete services, offering a dreamlike experience to clients seeking quality craftsmanship without breaking the bank. Our concrete constructors team at RH Construction USA Inc. takes pride in providing a seamless experience for clients by combining affordability with exceptional service.
                    We understand that dreams often come with budget constraints, so we've curated a range of cost-effective solutions without compromising on the quality of our work. Whether it's a small repair job or a large-scale concrete construction project, our skilled professionals are dedicated to delivering outstanding results that exceed expectations. With a proven track record of completing a diverse range of construction projects, our company has earned a stellar reputation for providing superior craftsmanship and durability in every undertaken cement project. Clients consistently praise our company for its attention to detail, adherence to timelines, and transparent communication throughout construction.</p>
                </div>
            </div>

        </div>
    );
};

export default AffordableConcreteServices;