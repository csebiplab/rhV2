import RatingComponents from "@/components/__home_components/RatingComponents/RatingComponents";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import React from "react";
import FAQ from "./FAQ/FAQ";
import Review from "./Review/Review";
import BestConcreteConstructorsBanner from "./BestConcreteConstructorsBanner/BestConcreteConstructorsBanner";
import AboutUs from "./AboutUs/AboutUs";
import AffordableConcreteServices from "./AffordableConcreteServices/AffordableConcreteServices";
import ReimaginedProfessional from "./ReimaginedProfessional/ReimaginedProfessional";
import Reputed from "./Reputed/Reputed";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import SpecialConcreteServices from "./SpecialConcreteServices/SpecialConcreteServices";
import WhyHiringUs from "./WhyHiringUs/WhyHiringUs";
import TurnKey from "./TurnKey/TurnKey";
import DoAndDont from "./DoAndDont/DoAndDont";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const BestConcreteConstructors = () => {
  return (
    <div>
        <section>
            <BestConcreteConstructorsBanner/>
        </section>

      <section className="bg___color">
        <RatingComponents />
      </section>

      <section>
        <AboutUs/>
      </section>

      <section>
        <AffordableConcreteServices/>
      </section>

      <section>
        <TurnKey/>
      </section>

      <section>
        <ReimaginedProfessional/>
      </section>

      <section>
        <SpecialConcreteServices/>
      </section>

      <section>
        <Reputed/>
      </section>

      <section>
        <WhyHiringUs />
      </section>

      <section>
        <DoAndDont />
      </section>

      <section>
        <ProjectGallery/>
      </section>

      <section>
        <WhyChooseUs/>
      </section>

      <section>
        <Review/>
      </section>

      <section>
        <FAQ/>
      </section>

      {/* =============== LocationMap  Section================= */}
      <section>
        <LocationMap classNames={{ bg: "homeRemodelingServices__bg" }} />
      </section>

      {/* =============== ContactUs  Section================= */}
      <section>
        <ContactUs classNames={{ bg: "homeRemodelingServices__bg" }} />
      </section>
    </div>
  );
};

export default BestConcreteConstructors;
