import LineGradient from "../components/LineGradient";
//import { useAnimate } from "framer-motion";

import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import reactLogo from "../lotties/reactLogo.json";
import nodeLogo from "../lotties/node.json"
import vueLogo from "../lotties/vueLogo.json"
import reactNative from "../lotties/reactNative.json"
import fireBase from "../lotties/firebaseLogo.json"
import Flutter from "../lotties/flutterLogo.json"
import mongodbLogo from "../lotties/mongodbLogo.json"
import javaScriptLogo from "../lotties/javaScript.json"
import Lottie from "lottie-react";


const MyEducation = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">

     {/* Education HEADER AND IMAGE SECTION */}
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
            MY <span className="text-red">Education</span>
          </p>
          <LineGradient width={"w-1/3"} />
          {}
          {/* <p className="mt-10 mb-7 text-2xl md:text-base">
            Skills That Drive My Passion
          </p> */}
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
                    max-w-[400px] md:max-w-[600px] h-200"
                src="assets/education1.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>


      {/* education */}
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
                Bahirdar University
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />{" "}
            {/*break self closing Div*/}
          </div>

          <p className="mt-5 text-3xl md:text-base">
          Holding a degree in Information Systems from Bahirdar University
          , I have developed a robust foundation in both technical and analytical skills, 
          empowering me to drive efficient and innovative solutions in the digital space.
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
                Cisco
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />{" "}
            {/*break self closing Div*/}
          </div>

          <p className="mt-5  mb-5 text-3xl md:text-base">
            
Certified in CCNA: Introduction to Networks by Cisco, I possess a comprehensive 
understanding of networking fundamentals, enabling me to design and manage secure,
 scalable network infrastructures.
          </p>

          <a
              className=" p-3 rounded-2xl shadow-md text-2xl md:text-base  bg-yellow font-semibold text-deep-blue hover:bg-red hover:text-white transition duration-500"
              type="submit"
              href="https://www.credly.com/badges/b24d19c9-89b4-413f-9d08-54418f45fe12/public_url"
            >
              View My badge
            </a>
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
                Adobe Photoshop
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />{" "}
            {/*break self closing Div*/}
          </div>

          <p className="mt-5 text-3xl md:text-base">
            Passionate about visual storytelling, I create eye-catching graphics
            and designs, from logos to user interfaces, that captivate users and
            elevate the overall aesthetics of digital content.
          </p>
        </motion.div>
      </div>


       



     


      

      
    </section>
  );
};

export default MyEducation;
