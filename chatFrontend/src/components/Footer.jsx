import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="Footer w-full py-8 bg-black text-white">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text">Made by: Emiliano Lopez</p>
        <div className="social-links flex items-center gap-4">
          <div className="linkedin-link flex items-center gap-1">
            <Icon
              icon="bi:linkedin"
              style={{ fontSize: "30px", color: "#3772FF" }}
            />
            <a className="smallText" href="#">LinkedIn</a>
          </div>
          <div className="gitub-link flex items-center gap-1">
          <Icon
              icon="mdi:github"
              style={{ fontSize: "30px", color: "#3772FF" }}
            />
            <a className="smallText" href="#">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
