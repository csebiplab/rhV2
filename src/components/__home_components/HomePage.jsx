import React from 'react';
import Faq from './FAQ/FAQ';
import HomeBanner from './HomeBanner/HomeBanner';
import Review from './Review/Review';
import ProjectGallery from './ProjectGallery/ProjectGallery';
import WorkingProcess from './WorkingProcess/WorkingProcess';
import WhyHiring from './WhyHiring/whyHiring';
import RightContractor from './RightContractor/RightContractor';

const HomePage = () => {
    return (
        <div>
            {/* banner section  */}
            <section>
                <HomeBanner/>
            </section>

            {/* working procss section  */}
            <section>
                <WorkingProcess/>
            </section>

            {/* project gallery section  */}
            <section>
                <ProjectGallery/>
            </section>

            {/* why hiring section  */}
            <section>
                <WhyHiring/>
            </section>

            {/* review section  */}
            <section>
                <Review/>
            </section>

            {/* Right Contractor section  */}
            <section>
                <RightContractor/>
            </section>
            
            {/* faq section  */}
            <section>
                <Faq/>
            </section>
        </div>
    );
};

export default HomePage;