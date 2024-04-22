import SocialMediaIcons from "../components/SocialMediaIcons"
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
// import AnchorLink from "react-anchor-link-smooth-scroll"

const Landing = ({ setSelectPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-36" //md is above mid screen
    >
      {/* 1st IMAGE SECTION b/c when size is decrease the image apear first*/}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
            before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
            before:border-2 before:border-blue before:z-[-1] "
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-100 transition duration-500 z-10 w-full
                    max-w-[400px] md:max-w-[600px] rounded-t-[700px]  "
              src="assets/propic4.jpg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-100 transition duration-500 z-10 w-full
                    max-w-[500px] md:max-w-[600px] rounded-t-[700px] mb-5 "
            src="assets/propic4.jpg"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl  font-playfair z-10 text-center md:text-start">
            MD {""}
            <span
              className="xs:relative  xs:text-deep-blue xs:font-semibold z-20 
                xs:before:content-brush   before:absolute before:-left-[20px]
                before:-top-[95px] before:z-[-1]  "
            >
              Software
            </span>
          </p>
          <p className="mt-16 mb-7 text-4xl md:text-2xl text-center md:text-start paragraph    ">
          Welcome ! My name is Muluneh Debebe,I live in Ethiopia, Addis Ababa, I'm a passionate web and mobile app developer and Graphics Designer dedicated to turning innovative 
          ideas into interactive digital experiences.Explore my work and see how I can bring your vision to life.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start text-4xl md:text-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 2.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainbow text-deep-blue rounded-sm py-3 px-7 font-semibold
        hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectPage("contact")}
            href="#contact"
          >
            contact Me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5"
            onClick={() => setSelectPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
          justify-center font-playfair px-10"
            >
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1, duration: 2.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons/>
        </motion.div>

      </div>
    </section>
  );
};

export default Landing;
