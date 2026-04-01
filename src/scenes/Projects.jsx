import LineGradient from "../components/LineGradient";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

/* ---------------- PROJECT DATA ---------------- */

const projectDetails = {
  "Project 1": {
    title: "Forex Management System",
    description:
      "Developed using Frappe to manage foreign currency transactions,exchange rates, and financial reporting.",
    tech: ["ERPNext", "Python", "React"],
    images: [
      "assets/projects/forex 2.png",
      "assets/projects/forex 3.png",
     "assets/projects/forex 4.png",
    ],
    repo: "https://github.com/",
    demo: "",
  },

  "Project 2": {
    title: "Visit Ethiopia",
    description:
      "Tourism website showcasing Ethiopian culture, destinations, and history with modern responsive UI.",
    tech: ["React", "Tailwind", "API"],
    images: [
       "assets/projects/haronerp2.png",
       "assets/projects/haronerp3.png",
       "assets/projects/haronerp4.png",
    ],
    repo: "",
    demo: "",
  },

  "Project 3": {
    title: "Maintenance Management System",
    description:
      "Developed using Frappe to manage item sales, maintenance tasks, and machine status tracking.Enabled technicians to request spare parts with multi-level approval workflows.Automated updates for machine maintenance status from reception to completion.",
    tech: ["Frappe,", "ERPNext", "Python"],
    images: [
       "assets/projects/maintenace4.png",
       "assets/projects/maintenance2.png",
       "assets/projects/maintenance3.png",
    ],
    repo: "",
    demo: "",
  },

  "Project 4": {
    title: "Ecommerce Site",
    description:
      "A full-featured ecommerce web application built with Django, featuringREST APIs, authentication, cart, wishlist, OTP-based password reset,and secure order management.",
    tech: ["React", "Firebase"],
    images: [
      "assets/projects/project-4.png",
      "assets/projects/ecommerce 2.png",
      "assets/projects/ecommerce 3.png",
    ],
    repo: "",
    demo: "",
  },

  "Project 5": {
    title: "Library Management System",
    description:
      "Developed a Frappe-based system to manage books, users, borrowing records, and reservations.Implemented custom HTML templates for an enhanced UI experience.Enabled secure book deletion with role-based permissions and authentication.Added automated email notifications to alert users of overdue books",
    tech: ["JavaScript", "CSS"],
    images: [
      "assets/projects/library book.png",
      "assets/projects/library loan list.png",
      "assets/projects/library login.png",
      "assets/projects/library dashboard.png",    
    ],
    repo: "",
    demo: "",
  },
};

/* ---------------- PROJECT CARD ---------------- */

const Project = ({ title, discription, openModal }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center p-16 text-deep-blue cursor-pointer`;

  // const projcetTitle = title.split(" ").join("-").toLowerCase();
  const projcetTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className="relative cursor-pointer"
      onClick={() => openModal(title)}
    >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{discription}</p>
        <p className="mt-6 text-3xl">🔎</p>
      </div>

      <img
        src={`assets/projects/${projcetTitle}.png`}   
        alt={projcetTitle}
        className="rounded-md"
      />
    </motion.div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setImageIndex(0);
  };

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === projectDetails[selectedProject].images.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0
        ? projectDetails[selectedProject].images.length - 1
        : prev - 1
    );
  };

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADER */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-5xl">
          <span className="text-red">PRO</span>JECTS
        </p>

        <div className="flex justify-center mt-5">
          <LineGradient width={"w-1/3"} />
        </div>

        <p className="mt-10 mb-10 text-4xl md:text-base">
          Explore My Portfolio Projects
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1, duration: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[500px] max-h-[500px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project title="Project 1" discription="Forex Management System" openModal={setSelectedProject} />
          <Project title="Project 2" discription="ERP System" openModal={setSelectedProject} />
          <Project title="Project 3" discription="Maintenance Management System" openModal={setSelectedProject} />
          <Project title="Project 4" discription="Ecommerce" openModal={setSelectedProject} />
          <Project title="Project 5" discription="Library Management System" openModal={setSelectedProject} />
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && projectDetails[selectedProject] && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#0f172a] text-white max-w-4xl w-full rounded-2xl p-8 relative border border-gray-700 shadow-2xl"
              initial={{ scale: 0.7, y: 80 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.7, y: 80 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-5 text-2xl"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold mb-4">
                {projectDetails[selectedProject].title}
              </h2>

              {/* IMAGE SLIDER */}
              <div className="relative mb-6">
                <img
                  src={projectDetails[selectedProject].images[imageIndex]}
                  alt="project"
                  className="rounded-lg w-full"
                />

                {projectDetails[selectedProject].images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 bg-black/60 px-3 py-1 rounded"
                    >
                      ◀
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 bg-black/60 px-3 py-1 rounded"
                    >
                      ▶
                    </button>
                  </>
                )}
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mb-6">
                {projectDetails[selectedProject].description}
              </p>

              {/* TECH STACK */}
              <div className="mb-6">
                <p className="font-semibold mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {projectDetails[selectedProject].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* LINKS */}
              <div className="flex gap-4">
                {projectDetails[selectedProject].repo && (
                  <a
                    href={projectDetails[selectedProject].repo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-red px-5 py-2 rounded-lg"
                  >
                    GitHub Repo
                  </a>
                )}

                {projectDetails[selectedProject].demo && (
                  <a
                    href={projectDetails[selectedProject].demo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue px-5 py-2 rounded-lg"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;