import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {}, //initial
  visible: {
    //final
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 }, //initial for each child
  visible: { opacity: 1, scale: 1 }, //final for each child
};

const Project = ({ title,discription }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center p-16 text-deep-blue`;
  const projcetTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{discription}</p>
        <p className="mt-7">
         🥇
        </p>
      </div>
      <a href="www.facebook.com"><img src={`assets/${projcetTitle}.jpeg`} alt="Project Title"  /></a>
      
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}

      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-5xl ">
            <span className="text-red">PRO</span>JECTS
            

          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width={"w-1/3"} />
          </div>
        </div>

        <p className="mt-10 mb-10 text-4xl md:text-base">
        Explore My Portfolio Projects
        </p>
      </motion.div>

      {/*PROJECTS  */}

      <div className="flex justify-center">
        <motion.div
          className="sm:grid grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red  
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            {/* For static element at top */}
            BEAUTIFUL USER INTERFACES
          </div>
          
          <Project title="Project 11" discription="Drum Kit Project" />
          <Project title="Project 8"  discription="Vist Ethiopia, everthing knows about Ethiopia"/> 
          <Project title="Project 13"  discription="AI powered Prompts"/>
          {/* ROW 2 */}
          <Project title="Project 19"  discription="It's My Blog website" />
          <Project title="Project 14" discription="Dice Game"/>
          <Project title="Project 3" />
          {/* ROW 3 */}
          <Project title="Project 4" />
          {/* <Project title="Project 7" /> */}
          
          
         

          {/* For static element at botom */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue  
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            {/* For static element at top */}
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
