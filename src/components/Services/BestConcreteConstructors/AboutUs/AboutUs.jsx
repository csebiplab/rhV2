import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
                <div className="md:col-span-1">
                    <Image src="/assets/bestConcreteConstructor/aboutUs.png" alt='about us' width={804} height={640}/>
                </div>
                <div className="md:col-span-1">
                    <div>
                        <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-normal text-black text-center md:text-left'>About Our Concrete Constructors in Brooklyn</h2>
                    <p className='text-base 5xl:text-lg font-normal text-center md:text-left text-black leading-normal 5xl:leading-[40px] mt-[5px]'>With a team of skilled professional concrete contractors, RH Construction USA Inc. delivers top-notch concrete construction services tailored to each project's unique needs. Whether residential, commercial, or industrial construction, our company has established a reputation for completing projects on time and within budget. Our attention to detail and dedication to customer satisfaction make us a trusted choice for clients seeking reliable concrete contractors in Brooklyn. We bring decades of expertise to every concrete project in Brooklyn.
                    At our company, we believe in transparency. Eliminating any hidden fees or surprises for our clients, our pricing structures are straightforward. This commitment to transparency extends to our project timelines, ensuring that clients are well informed about the progress of their projects every step of the way. From foundation construction and repairs to sidewalks, driveways, and custom concrete features, our team ensures durability, functionality, and aesthetic appeal in every project. We use only top-grade materials and industry-leading techniques to deliver results that stand the test of time. With RH Construction USA Inc., you can trust that your concrete work is in skilled hands.</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;