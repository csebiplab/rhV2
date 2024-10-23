import React from 'react';
import Faq from './FAQ/FAQ';
import HomeBanner from './HomeBanner/HomeBanner';
import Review from './Review/Review';
import ProjectGallery from './ProjectGallery/ProjectGallery';

const HomePage = () => {
    return (
        <div>
            {/* banner section  */}
            <section>
                <HomeBanner/>
            </section>

            {/* project gallery section  */}
            <section>
                <ProjectGallery/>
            </section>

            {/* review section  */}
            <section>
                <Review/>
            </section>
            
            {/* faq section  */}
            <section>
                <Faq/>
            </section>
        </div>
    );
};

export default HomePage;