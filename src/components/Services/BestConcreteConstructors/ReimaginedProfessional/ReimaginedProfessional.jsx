import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const ReimaginedProfessional = () => {
    return (
        <div className="full__section_r_p pl-3 md:pl-0 common__padding__top">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
                <div className="md:col-span-1">
                    <Image src="/assets/bestConcreteConstructor/professional.png" alt='professional' width={803} height={727}/>
                </div>
                <div className="md:col-span-1">
                    <div>
                        <HeadingIcon text={headingIconText.reimaginedProfessional__headingIconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[34px] 5xl:text-[36px] font-bold leading-normal text-black text-center md:text-left'>We've Reimagined Professional Concrete Services</h2>
                    <p className='text-base 5xl:text-lg font-normal text-center md:text-left text-black leading-normal 5xl:leading-[40px] mt-[5px]'>At RH Construction USA Inc, we've redefined what professional concrete services should be. With precision, quality, and durability at the forefront, our team of experts combines innovative techniques with top-grade materials to deliver exceptional concrete solutions. Whether it's foundation work, driveways, sidewalks, or decorative concrete finishes, we cater to residential and commercial projects with a commitment to excellence. We pride ourselves on transforming spaces with concrete solutions built to last while adhering to strict safety standards and project timelines. In the realm of professional concrete services, we've embarked on a transformative journey, reimagining the way we approach every project.
                    Our commitment to innovation and excellence has propelled us to reshape the traditional landscape of concrete services. From cutting-edge techniques to avant-garde designs, we bring a fresh perspective to the industry, ensuring that each client's vision is realized and surpassed. With a focus on quality, durability, and sustainability, our reimagined approach to concrete services sets us apart as industry trailblazers, dedicated to exceeding expectations and leaving a lasting impression on every project we undertake. Choose RH Construction USA Inc and experience concrete craftsmanship reimagined.</p>
                </div>
            </div>

        </div>
    );
};

export default ReimaginedProfessional;