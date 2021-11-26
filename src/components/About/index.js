import React from 'react';
import headshot from './headshot.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <div><img src={headshot} alt ="headshot"></img></div> 

        </div>
        <p>
        Giovanni Malcolm is a 24 year-old Bachelors graduate of Georgia Tech's Civil Engineering program. He is originally born and raised in Brooklyn, New York. Post-graduation, Giovanni has worked for McCarthy Building Comapnies, fulfilling roles of both a pre-construction estimator and on-site project engineer. Giovanni has worked with subcontractors on many different projects in the ATL area to schedule, plan, and budget all details of each respective ensured scope of work. On the field, he has worked in the renewables division of the company. Here, Giovanni took on a wide range of responsibilities from developing and managing work crews to completing inspections and daily quality control walks. Today, Giovanni is enrolled in the GT Coding Bootcamp with aspirations to transition into a new industry with more opportunity.
</p>
      </div>
    </section>
  );
}

export default About;
