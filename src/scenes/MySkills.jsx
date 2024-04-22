import LineGradient from "../components/LineGradient";
//import { useAnimate } from "framer-motion";

import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import reactLogo from "../lotties/reactLogo.json";
import nodeLogo from "../lotties/node.json"
import vueLogo from "../lotties/vueLogo.json"
import reactNative from "../lotties/reactNative.json"
import fireBase from "../lotties/firebaseLogo.json"
import Flutter from "../lotties/flutterLogo.json"
import mongodbLogo from "../lotties/mongodbLogo.json"
import javaScriptLogo from "../lotties/javaScript.json"
import Lottie from "lottie-react";


const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Skills HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-5xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width={"w-1/3"} />
          {}
          <p className="mt-10 mb-7 text-2xl md:text-base font-playfair">
            Skills That Drive My Passion
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
             before:w-full  before:h-full
            before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                    max-w-[400px] md:max-w-[600px]"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 mb-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 1, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-4xl mt-3">
                Web Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />{" "}
            {/*break self closing Div*/}
          </div>

          <p className="mt-5 text-3xl md:text-base">
            Adept at crafting dynamic websites with a strong focus on
            functionality, accessibility, and performance optimization, using a
            range of technologies like React, Tailwindcss, JavaScript, and
            backend frameworks.
          </p>
        </motion.div>

        {/* INOVATION */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold  text-5xl">02</p>
              <p className="font-playfair font-semibold text-4xl md:text-3xl  mt-3">
                Mobile Application
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />{" "}
            {/*break self closing Div*/}
          </div>

          <p className="mt-5 text-3xl md:text-base">
            Experienced in building mobile apps that seamlessly run on both iOS
            and Android platforms, leveraging frameworks like React Native and
            Flutter to ensure a consistent and polished user experience.
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold  text-5xl">03</p>
              <p className="font-playfair font-semibold  text-4xl md:text-3xl mt-3">
                Graphics Design
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />{" "}
            {/*break self closing Div*/}
          </div>

          <p className="mt-5 text-4xl md:text-base">
            Passionate about visual storytelling, I create eye-catching graphics
            and designs, from logos to user interfaces, that captivate users and
            elevate the overall aesthetics of digital content.
          </p>
        </motion.div>
      </div>


       





<p className="text-2xl   mt-40 text-red font-playfair">some introduction to my skills ability is below. LET'S BUILD SOMETHING AWESOME TOGETHER</p>


      <div className=" mt-16 sm:grid grid-cols-2 md:grid-cols-3 gap-y-4 ">
        <div className="m-auto text-center">
          <Lottie animationData={reactLogo} className="w-40" />
          <p className="text-2xl">React</p>
        </div>

        <div  className="m-auto text-center">
          <Lottie animationData={nodeLogo} className="w-40" />
          <p className="text-2xl">Node js</p>
        </div>

        <div  className="m-auto text-center">
          <Lottie animationData={javaScriptLogo} className="w-40" />
          <p cla
          className="text-2xl">JavaScript</p>
        </div>

        <div  className="m-auto text-center">
          <Lottie animationData={mongodbLogo} className="w-40" />
          <p className="text-2xl">MongoDB</p>
        </div>

        {/* <div  className="m-auto text-center">
          <Lottie animationData={htmlLogo} className="w-40" />
          <p className="">HTML&CSS</p>
        </div> */}

        <div  className="m-auto text-center">
          <Lottie animationData={vueLogo} className="w-40" />
          <p className="text-2xl">VUE</p>
        </div>

        <div  className="m-auto text-center">
          <Lottie animationData={reactNative} className="w-40" />
          <p className="text-2xl">React Native</p>
        </div>

        <div  className="m-auto text-center">
          <Lottie animationData={Flutter} className="w-40" />
          <p className="text-2xl">Flutter</p>
        </div>

        <div  className="m-auto text-center">
          <Lottie animationData={fireBase} className="w-40" />
          <p className="text-2xl">FireBase</p>
        </div>
      </div>


      

      
    </section>
  );
};

export default MySkills;
