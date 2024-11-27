import RatingComponents from "@/components/__home_components/RatingComponents/RatingComponents";
import ContactUs from "@/components/bathroom-reno-components/contactUs/ContactUs";
import LocationMap from "@/components/bathroom-reno-components/LocationMap/LocationMap";
import React from "react";
import FAQ from "./FAQ/FAQ";
import Review from "./Review/Review";

const BestConcreteConstructors = () => {
  return (
    <div>
      <section className="bg___color">
        <RatingComponents />
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
