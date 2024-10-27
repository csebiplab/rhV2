"use client";
import React from "react";
import "./RoofingContractorInBrooklyn.css";
import RoofingContractorInBrooklynBanner from "./RoofingContractorInBrooklynBanner/RoofingContractorInBrooklynBanner";
import AboutOur from "./AboutOur/AboutOur";
import Expert from "./Expert/Expert";
import ResidentialRoofing from "./ResidentialRoofing/ResidentialRoofing";
import MetalRoofing from "./MetalRoofing/MetalRoofing";
import SteelRoof from "./SteelRoof/SteelRoof";
import TileRoof from "./TileRoof/TileRoof";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import RoofingContractors from "./RoofingContractors/RoofingContractors";
import CommercialRoofing from "./CommercialRoofing/CommercialRoofing";
import RoofingContractor from "./RoofingContractor/RoofingContractor";
import SmallRoofRepair from "./SmallRoofRepair/SmallRoofRepair";
import StartWithRHConstruction from "./StartWithRHConstruction/StartWithRHConstruction";
import FAQ from "./FAQ/FAQ";
import Review from "@/components/kitchen-remodeling-components/Review/Review";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import WhyChoose from "./WhyChoose/WhyChoose";
import RatingComponents from "@/components/__home_components/RatingComponents/RatingComponents";
import { bHeadingText } from "@/utils/bHeading-text";

const RoofingContractorInBrooklyn = () => {
  return (
    <div className="custom-container">
      <section>
        <RoofingContractorInBrooklynBanner />
      </section>

      <section className="bg___color">
        <RatingComponents />
      </section>

      <section>
        <AboutOur/>
      </section>

      <section>
        <RoofingContractor/>
      </section>

      <section>
        <Expert/>
      </section>

      <section>
        <WhyChoose/>
      </section>

      <section>
        <ResidentialRoofing/>
      </section>

      <section>
        <CommercialRoofing/>
      </section>
      
      <section>
        <MetalRoofing/>
      </section>

      <section>
        <SteelRoof/>
      </section>

      <section>
        <TileRoof/>
      </section>

      <section>
        <SmallRoofRepair/>
      </section>

      <section>
        <RoofingContractors/>
      </section>

      <section>
        <ProjectGallery/>
      </section>

      <section>
        <Review bHeading={bHeadingText.kitchenRemodelingServicesReview__bHeading}/>
      </section>
      
      <section>
        <StartWithRHConstruction/>
      </section>

      <section>
        <FAQ/>
      </section>
      
      <section>
      <LocationMap />
      </section>

      <section>
        <ContactUs />
      </section>

    </div>
  );
};

export default RoofingContractorInBrooklyn;
