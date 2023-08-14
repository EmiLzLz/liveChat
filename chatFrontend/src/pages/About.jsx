import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import ThemeContext from "../context/ThemeContext";

function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`aboutApp ${darkMode && "bg-black"}`}>
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="description pb-10">
          <div className="title-container pb-4">
            <h2 className="subtitle font-bold text-[#14FFF7]">ABOUT</h2>
            <h2 className="subtitle font-bold text-[#14FFF7]">THE APP</h2>
          </div>
          <p className={`text ${darkMode && "text-white"}`}>
            This chat was created using React and Socket.io. In addition, I added
            this about section using React Router and Tailwind CSS for
            styling.You may view the figma file where I created the app's
            wireframes and mockups if you'd like.
          </p>
        </div>
        <div className="app-links flex flex-col md:flex-row items-center justify-around w-full gap-12 pt-10">
          <div className="figma-link flex flex-col gap-6 items-center">
            <Icon icon="logos:figma" style={{ fontSize: "60px" }} />
            <a
              className={`text-black ${darkMode && "text-white"}`}
              href="https://www.figma.com/file/8xLtSah6LDtZBMSyVWNSnZ/Chat_App?type=design&mode=design&t=Vsc3j5HMqeiVscmq-1"
              target="_blank"
            >
              Go to the Figma file
            </a>
          </div>
          <div className="githubApp-link flex flex-col gap-6 items-center">
            <Icon
              className={`text-black ${darkMode && "text-white"}`}
              icon="mdi:github"
              style={{ fontSize: "60px" }}
            />
            <a
              className={`text-black ${darkMode && "text-white"}`}
              href="https://github.com/EmiLzLz/liveChat"
              target="_blank"
            >
              Check the code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
