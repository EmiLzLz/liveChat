import React from "react";
import { Icon } from "@iconify/react";

function About() {
  return (
    <div className="aboutApp">
      <div className="container mx-auto">
        <div className="description pb-10">
          <div className="title pb-4">
            <h2 className="text-xl font-bold">ABOUT</h2>
            <h2 className="text-xl font-bold">THE APP</h2>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            aliquam inventore, numquam ullam facere adipisci error molestiae, ad
            voluptates accusantium saepe at perspiciatis incidunt porro rem
            mollitia natus, sequi deserunt.
          </p>
        </div>
        <div className="app-links flex items-center gap-8 py-6">
          <div className="figma-link flex flex-col items-center">
            <Icon
              icon="logos:figma"
              style={{ fontSize: "60px" }}
            />
            <a href="#">Go to the Figma file</a>
          </div>
          <div className="githubApp-link flex flex-col items-center">
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
