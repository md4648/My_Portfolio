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

const Design = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center p-16 text-deep-blue`;
  const projcetTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
    <a href={`assets/${projcetTitle}o.jpg`}>
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">View</p>
        <p className="mt-7">
         🥇
        </p>
      </div></a>
      <img src={`assets/${projcetTitle}.jpg`} alt="Project Title" />
    </motion.div>
  );
};

const Designs = () => {
  return (
    <section id="design" className="pt-48 pb-48">
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
            <span className="text-red">DES</span>IGNS & PHOTOGRAPHY
            

          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width={"w-1/3"} />
          </div>
        </div>

        <p className="mt-10 mb-10 text-4xl md:text-base">
        Explore My Photo Design
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
            AMAZING PHOTOGRAPHY
          </div>
          
          <Design title="design 1"/>
          <Design title="design 2" /> 
          {/* ROW 2 */}
          {/* <Design title="design 3" />  */}
          <Design title="design 7" /> 
          <Design title="design 5" /> 
          <Design title="design 4" /> 
          <Design title="design 8" />
     
          {/* ROW 3 */}
          {/* <Design title="design 6" /> 
          <Design title="design 7" /> 
          <Design title="design 8" />  */}
            {/* ROW 4 */}
          {/* <Design title="project 1" /> 
          <Design title="project 2" /> 
          <Design title="project 3" />  */}
         
         
          
          
         

          {/* For static element at botom */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue  
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            {/* For static element at top */}
           AWESOME GRAPHICS
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Designs;
