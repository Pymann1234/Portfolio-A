import { Tilt } from "react-tilt"; // Importing the Tilt component for tilt effects
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import { styles } from "../styles"; // Importing custom styles
import { services } from "../constants"; // Importing the services data
import { fadeIn, textVariant } from "../utils/motion"; // Importing animation variants
import { SectionWrapper } from "../hoc"; // Importing a higher-order component for section wrapping

// ServiceCard component: displays an individual service card with tilt and animation effects
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=" bg-[#1E3163] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About component: displays an overview section with an introduction and a list of services
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a highly skilled Front-End developer, I bring extensive experience in
        HTML, CSS, TailwindCSS, JavaScript, along with expertise in frameworks
        such as React, Next.js. My proficiency extends to working with Node.js,
        Express.js, MongoDB. A quick learner with a passion for acquiring new
        skills and knowledge. I thrive on working closely with my team to
        develop efficient, scalable, and user-friendly solutions that address
        real-world challenges. Let's join forces to turn your ideas into
        reality!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
