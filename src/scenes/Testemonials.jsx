import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
const Testemonial = () => {
  const testimonialStyles = `mx-auto relative max-w-[500px] h-[400px] md:max-w-[400px] md:h-[350px] flex flex-col
    justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 `;

  return (
    <section id="testemonial" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-5xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width={" mx-auto w-2/4"} />
        <p className="mt-10 mb-7 text-2xl md:text-base ">
        Words from Satisfied Clients
        </p>
      </motion.div>

      {/*TESTIMONIAL */}
      <div className="md:flex md:justify-between  gap-8 ">
        <motion.div
          className={`bg-blue ${testimonialStyles}before:content-person1 ` }
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-5xl">"</p>
          <p className="text-center text-2xl md:text-base">
          I was thoroughly impressed with your web development skills 
           your work on my website exceeded all expectations. You truly are
            a master of your craft!
          </p>
        </motion.div>

        <motion.div
          className={`bg-red ${testimonialStyles}  before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-5xl">"</p>
          <p className="text-center text-2xl md:text-base ">
          Your graphic design work is sheer magic; 
          you turned my vision into a mesmerizing and 
          enchanting visual masterpiece.
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${testimonialStyles}before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-5xl">"</p>
          <p className="text-center text-2xl md:text-base">
          Your mobile application development expertise has taken my business to
          the next level. The app you built is not only user-friendly but also
          beautifully designed
         
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testemonial;
