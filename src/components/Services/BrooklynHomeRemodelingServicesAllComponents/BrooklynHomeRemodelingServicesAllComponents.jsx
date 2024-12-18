// import RatingComponent from "@/components/__home_components/RatingComponent";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import AboutHomeRenovation from "@/components/home-remodeling-services-in-brooklyn/AboutHomeRenovation/AboutHomeRenovation";
import AffordableHome from "@/components/home-remodeling-services-in-brooklyn/AffordableHome/AffordableHome";
import BrooklynHomeRemodelingServiceHero from "@/components/home-remodeling-services-in-brooklyn/BrooklynHomeRemodelingServiceHero/BrooklynHomeRemodelingServiceHero";
import FAQ from "@/components/home-remodeling-services-in-brooklyn/FAQ/FAQ";
import GetReadyWithUs from "@/components/home-remodeling-services-in-brooklyn/GetReadyWithUs/GetReadyWithUs";
import HireUs from "@/components/home-remodeling-services-in-brooklyn/HireUs/HireUs";
import HiringUs from "@/components/home-remodeling-services-in-brooklyn/HiringUs/HiringUs";
import KnowDetails from "@/components/home-remodeling-services-in-brooklyn/KnowDetails/KnowDetails";
import ProjectCost from "@/components/home-remodeling-services-in-brooklyn/ProjectCost/ProjectCost";
import ProjectGallery from "@/components/home-remodeling-services-in-brooklyn/ProjectGallery/ProjectGallery";
import StunningDesign from "@/components/home-remodeling-services-in-brooklyn/StunningDesign/StunningDesign";
import TrustUs from "@/components/home-remodeling-services-in-brooklyn/TrustUs/TrustUs";
import Review from "@/components/kitchen-remodeling-components/Review/Review";
import PlanningServices from "@/components/home-remodeling-services-in-brooklyn/PlanningServices/PlanningServices";


// css file import 
import "./HomeRemodelingServicesAllComponents.css";
import { bHeadingText } from "@/utils/bHeading-text";
import Benefits from "@/components/home-remodeling-services-in-brooklyn/Benefits/Benefits";
import RatingComponents from "@/components/__home_components/RatingComponents/RatingComponents";

const BrooklynHomeRemodelingServicesAllComponents = ({backgroundColor}) => {
  return (
    <div className="custom-container homeRemodelingServices__bg">

      <section>
        <BrooklynHomeRemodelingServiceHero />
      </section>

      <section>
        {/* <RatingComponent classNames={{bg : "homeRemodelingServices__bg"}}/> */}
        <RatingComponents classNames={{bg : "homeRemodelingServices__bg"}} />
      </section>

      <section>
        <AboutHomeRenovation />
      </section>
      
      <section>
        <TrustUs />
      </section>

      <section>
        <HiringUs />
      </section>

      <section>
        <StunningDesign />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section>
        <KnowDetails />
      </section>

      <section>
        <ProjectCost/>
      </section>

      <section>
        <PlanningServices/>
      </section>

      {/* =============== Review  Section================= */}
      <section>
      <Review bHeading={bHeadingText.homeRemodelingServicesReview__bHeading} classNames={{bg: "homeRemodelingServices__bg"}}/>
      </section>
      

      <section>
        <GetReadyWithUs/>
      </section>

      <section>
        <Benefits/>
      </section>

      <section>
        <AffordableHome/>
      </section>

      <section>
        <HireUs/>
      </section>


      <section>
        <FAQ/>
      </section>

      {/* =============== LocationMap  Section================= */}
      <section>
      <LocationMap classNames={{bg: "homeRemodelingServices__bg"}}/>
      </section>
      

      {/* =============== ContactUs  Section================= */}
      <section>
      <ContactUs classNames={{bg: "homeRemodelingServices__bg"}}/>
      </section>
      
    </div>
  );
};

export default BrooklynHomeRemodelingServicesAllComponents;
