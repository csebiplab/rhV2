import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const StartYourProject = () => {
    return (
        <div className="full__section_l_p pr-3 md:pr-0 common__padding__top">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
                <div className="order-1 md:order-2 md:col-span-1">
                    <Image src="/assets/bestConcreteConstructor/startYourProject.png" alt='start your project' width={940} height={673}/>
                </div>
                <div className="order-2 md:order-1 md:col-span-1">
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingIconText.startYourProject__headingIconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-normal text-black text-center md:text-left'>Ready to Start Your Project <br className="block md:hidden"/>  with Our Concrete <br className="block md:hidden"/>  Constructors</h2>
                    <p className='text-base 5xl:text-lg font-normal text-center md:text-left text-black leading-normal 5xl:leading-[40px] mt-[5px]'>We understand that concrete is not merely a construction material but a canvas waiting to be transformed. Our team of skilled professional concrete constructors, equipped with the latest technologies and a passion for their craft, collaborates closely with clients to bring their ideas to life. Whether crafting intricate patterns, experimenting with textures, or incorporating eco-friendly elements, our redefined approach ensures that each project reflects a unique blend of functionality and aesthetics.
                    </p>
                    <p className='text-base 5xl:text-lg font-normal text-center md:text-left text-black leading-normal 5xl:leading-[40px]'>Elevate your expectations and experience the difference with our avant-garde concrete services—where imagination meets precision and the ordinary becomes extraordinary. At RH Construction USA Inc, we're here to turn your vision into reality. From concept to completion, our skilled team is committed to delivering quality craftsmanship, attention to detail, and reliable project management in every job we undertake. Whether it's a new construction, renovation, or remodeling project, we bring expertise, efficiency, and a customer-first approach to ensure your satisfaction. So you can now choose RH Construction USA Inc. and start your project with us.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default StartYourProject;