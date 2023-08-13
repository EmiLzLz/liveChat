import React from "react";
import { Icon } from "@iconify/react";

function About() {
  return (
    <div className="aboutApp">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="description pb-10">
          <div className="title-container pb-4">
            <h2 className="subtitle font-bold text-[#14FFF7]">ABOUT</h2>
            <h2 className="subtitle font-bold text-[#14FFF7]">THE APP</h2>
          </div>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            aliquam inventore, numquam ullam facere adipisci error molestiae, ad
            voluptates accusantium saepe at perspiciatis incidunt porro rem
            mollitia natus, sequi deserunt.
          </p>
        </div>
        <div className="app-links flex flex-col md:flex-row items-center justify-around w-full gap-12 pt-10">
          <div className="figma-link flex flex-col gap-6 items-center">
            <Icon
              icon="logos:figma"
              style={{ fontSize: "60px" }}
            />
            {/* AGREGAR LINKS */}
            <a href="#">Go to the Figma file</a>
          </div>
          <div className="githubApp-link flex flex-col gap-6 items-center">
            <Icon
              icon="mdi:github"
              style={{ fontSize: "60px", color: "black" }}
            />
            <a href="#">Check the code</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
