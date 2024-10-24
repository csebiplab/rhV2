import React from 'react';
import Faq from './FAQ/FAQ';
import HomeBanner from './HomeBanner/HomeBanner';
import Review from './Review/Review';
import ProjectGallery from './ProjectGallery/ProjectGallery';
import WorkingProcess from './WorkingProcess/WorkingProcess';
import WhyHiring from './WhyHiring/whyHiring';
import RightContractor from './RightContractor/RightContractor';
import LeadingConstruction from './LeadingConstruction/LeadingConstruction';
import AboutUs from './AboutUs/AboutUs';
import Experienced from './Experienced/Experienced';
import ToolsAndEquipment from './ToolsAndEquipment/ToolsAndEquipment';
import ArchitecturalDesign from './ArchitecturalDesign/ArchitecturalDesign';
import ContactUs from './ContactUs/ContactUs';
import LocationMap from './LocationMap/LocationMap';
// import RatingComponents from './RatingComponents/RatingComponents';

const HomePage = () => {
    return (
        <div>
            {/* banner section  */}
            <section>
                <HomeBanner/>
            </section>

            {/* banner section  */}
            {/* <section>
                <RatingComponents />
            </section> */}

            {/* about us section  */}
            <section>
                <AboutUs />
            </section>
            
            {/* leading construction section  */}
            <section>
                <LeadingConstruction/>
            </section>

            {/* about us section  */}
            <section>
                <AboutUs/>
            </section>

            {/* Experienced section  */}
            <section>
                <Experienced/>
            </section>

            {/* Tools And Equipment section  */}
            <section>
                <ToolsAndEquipment/>
            </section>

            {/* working procss section  */}
            <section>
                <WorkingProcess/>
            </section>

            {/* Architectural Design section  */}
            <section>
                <ArchitecturalDesign/>
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

            {/* location area section  */}
            <section>
                <LocationMap/>
            </section>

            {/* contact us section  */}
            <section>
                <ContactUs/>
            </section>
        </div>
    );
};

export default HomePage;