"use client";
import Services from "../components/Services";

const About = () => {
  return (
    <div className="page-wrapper">
      <Services {...{ servicePage: true }} />
    </div>
  );
};

export default About;
