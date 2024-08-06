import { Tilt } from "react-tilt"; // Importing Tilt for tilt effect on the project cards
import { motion } from "framer-motion"; // Importing motion for animations
import { styles } from "../styles"; // Importing custom styles
import { github } from "../assets"; // Importing GitHub icon for source code links
import { SectionWrapper } from "../hoc"; // Importing higher-order component for section wrapping
import { projects } from "../constants"; // Importing project data
import { fadeIn, textVariant } from "../utils/motion"; // Importing animation utilities

// Component for displaying individual project cards
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Tilt effect for the project card */}
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#1E3163] p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* GitHub icon for source code link */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          {/* Project name */}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {/* Project description */}
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Component for displaying all projects
const Works = () => {
  return (
    <>
      {/* Section title and subtitle */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      {/* Section description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following porjects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories, reflecting my ability to solve errors,
          work with different technologies and manage projects effectively.
        </motion.p>
      </div>
      {/* List of project cards */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// Wrapping the Works component with SectionWrapper HOC and exporting it
export default SectionWrapper(Works, "");
