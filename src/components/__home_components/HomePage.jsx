import React from 'react';
import Faq from './FAQ/FAQ';
import HomeBanner from './HomeBanner/HomeBanner';
import Review from './Review/Review';
import ProjectGallery from './ProjectGallery/ProjectGallery';
import WorkingProcess from './WorkingProcess/WorkingProcess';
import RightContractor from './RightContractor/RightContractor';
import LeadingConstruction from './LeadingConstruction/LeadingConstruction';
import AboutUs from './AboutUs/AboutUs';
import Experienced from './Experienced/Experienced';
import ToolsAndEquipment from './ToolsAndEquipment/ToolsAndEquipment';
import ArchitecturalDesign from './ArchitecturalDesign/ArchitecturalDesign';
import LocationMap from './LocationMap/LocationMap';
import RatingComponents from './RatingComponents/RatingComponents';
import ContactUs from './ContactUs/ContactUs';
import WhyHiringUs from './WhyHiringUs/WhyHiringUs';
import TrustUs from './TrustUs/TrustUs';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import ExceptionalServices from './ExceptionalServices/ExceptionalServices';

const HomePage = () => {
    return (
        <div>
            {/* banner section  */}
            <section>
                <HomeBanner/>
            </section>

            {/* rating section  */}
            <section>
                <RatingComponents />
            </section>

            {/* leading construction section  */}
            <section>
                <LeadingConstruction/>
            </section>

            {/* about us section  */}
            <section>
                <AboutUs />
            </section>

            {/* trust us section  */}
            <section>
                <TrustUs />
            </section>

            {/* Experienced section  */}
            <section>
                <Experienced/>
            </section>

            {/* why choose us section  */}
            <section>
                <WhyChooseUs/>
            </section>

            {/* Tools And Equipment section  */}
            <section>
                <ToolsAndEquipment/>
            </section>

            {/* Exceptional Services section  */}
            <section>
                <ExceptionalServices/>
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
                <WhyHiringUs/>
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