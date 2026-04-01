
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Lottie from "lottie-react";

import reactLogo from "../lotties/reactLogo.json";
import nodeLogo from "../lotties/node.json";
import vueLogo from "../lotties/vueLogo.json";
import reactNative from "../lotties/reactNative.json";
import fireBase from "../lotties/firebaseLogo.json";
import Flutter from "../lotties/flutterLogo.json";
import mongodbLogo from "../lotties/mongodbLogo.json";
import javaScriptLogo from "../lotties/javaScript.json";

const skills = [
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "JavaScript", logo: javaScriptLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "Vue", logo: vueLogo },
  { name: "React Native", logo: reactNative },
  { name: "Flutter", logo: Flutter },
  { name: "Firebase", logo: fireBase },
];

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="skills" className="pt-16 pb-24 px-6">
      {/* HEADER */}
      <div className="md:flex md:justify-between md:gap-16 mt-24 items-center">
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-playfair font-semibold text-5xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>

          <LineGradient width={"w-1/3"} />

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I use to build scalable applications and
            deliver great user experiences.
          </p>
        </motion.div>

        {/* IMAGE */}
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="hover:scale-105 transition duration-500 z-10 w-full
                max-w-[400px] md:max-w-[520px]"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILL CATEGORIES */}
      <div className="md:flex md:justify-between mt-20 gap-16">
        {/* Web Dev */}
        <motion.div
          className="md:w-1/3 mt-10 bg-white dark:bg-light-blue shadow-xl p-8 rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-4xl font-playfair text-blue mb-4">01</p>
          <p className="font-playfair text-2xl mb-4 font-semibold">
            Web Development
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Building modern web applications using React, TailwindCSS,
            JavaScript, and scalable backend technologies.
          </p>
        </motion.div>

        {/* Mobile */}
        <motion.div
          className="md:w-1/3 mt-10 bg-white dark:bg-light-blue shadow-xl p-8 rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-4xl font-playfair text-red mb-4">02</p>
          <p className="font-playfair text-2xl mb-4 font-semibold">
            Mobile Development
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Developing cross-platform mobile applications with React Native and
            Flutter for smooth performance.
          </p>
        </motion.div>

        {/* Design */}
        <motion.div
          className="md:w-1/3 mt-10 bg-white dark:bg-light-blue shadow-xl p-8 rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-4xl font-playfair text-yellow mb-4">03</p>
          <p className="font-playfair text-2xl mb-4 font-semibold">
            UI / Graphics Design
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            Creating beautiful visual experiences including UI design, branding,
            and creative graphics.
          </p>
        </motion.div>
      </div>

      {/* BEAUTIFUL INTRO SECTION */}
      <div className="text-center mt-32 mb-16">
        <p className="text-3xl md:text-4xl font-playfair font-semibold">
          Technologies I Work With
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-3">
          Tools that power my development workflow
        </p>
      </div>

      {/* AUTO SLIDER */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="min-w-[150px] text-center 
              rounded-xl p-4 shadow-lg hover:scale-105 transition"
            >
              <Lottie animationData={skill.logo} className="w-24 mx-auto" />
              <p className="mt-2 font-semibold">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;