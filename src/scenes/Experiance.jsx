
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const experiences = [
  {
    year: "Oct 2025 - Present",
    role: "Full Stack Developer",
    company: "Haron Computer",
    description:
      "Design and develop custom applications using Frappe Framework and ERPNext.Build backend logic using Python and frontend components using JavaScript and React.Customize DocTypes, workflows, permissions, and reports based on busine.",
  },
  {
    year: "2023 - 2024",
    role: "System Administrator",
    company: "Haron Computer",
    description:
      "Manage and maintain systems built on Frappe and ERPNext.Provide user training to ensure effective system usage.Administer user accounts, permissions, and system updates.Collaborate with technical and non-technical teams to solve issues.",
  },
  {
    year: "Jul 2023 - Sep 2023",
    role: "IT Support Intern",
    company: "Ethiopia Road Administration",
    description:
      "Provided IT support by troubleshooting hardware/software issuesand maintaining computer and printer functionality.Performed system updates, formatted and activated Windows, andinstalled essential drivers and software.Managed network-related tasks such as IP configuration, CitrixWorkspace setup, and RJ45 Ethernet cable preparation.Strengthened problem-solving skills and technical expertise throughpractical, hands-on experience",
  },
];

const Experiance = () => {
  return (
    <section id="experiance" className="pt-24 pb-24">
      {/* HEADER */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-playfair font-semibold text-5xl">
          WORK <span className="text-red">EXPERIENCE</span>
        </p>

        <div className="flex justify-center mt-5">
          <LineGradient width={"w-1/3"} />
        </div>

        <p className="mt-6 text-3xl md:text-base">
          My Professional Journey
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto mt-20">
        {/* vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-grey h-full" />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`mb-20 flex justify-between items-center w-full ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* CONTENT */}
              <div className="w-5/12">
                <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-105 transition duration-500">
                  <p className="text-red font-semibold">{exp.year}</p>
                  <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
                  <p className="text-blue font-semibold mt-1">{exp.company}</p>
                  <p className="mt-4 text-gray-600">{exp.description}</p>
                </div>
              </div>

              {/* CIRCLE */}
              <div className="relative">
                <div className="w-6 h-6 bg-red rounded-full border-4 border-white shadow-md z-10" />
              </div>

              <div className="w-5/12" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiance;