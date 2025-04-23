import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; // Timeline components for displaying vertical timeline
import { motion } from "framer-motion"; // For animations
import "react-vertical-timeline-component/style.min.css"; // Import CSS for timeline component
import { styles } from "../styles"; // Custom styles
import { experiences } from "../constants"; // Experience data
import { SectionWrapper } from "../hoc"; // Higher-order component for section wrapping
import { textVariant } from "../utils/motion"; // Custom motion variant for text animation

// ExperienceCard component for displaying individual experience
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1E3163", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] rounded-full object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point} {/* Description of each experience point */}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Main Experience component to display the timeline of experiences
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What Have I Done So Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
            //  Render each experience
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Export the Experience component wrapped with SectionWrapper for consistent styling and structure
export default SectionWrapper(Experience, "work");
