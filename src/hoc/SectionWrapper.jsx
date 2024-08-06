// Import necessary modules
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Higher-Order Component (HOC) definition

// Takes a component and an idName as arguments
//                         About, "about"
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      // Use motion.section for animated sections
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Span with a dynamic id for section anchor */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* Render the passed component */}
        <Component />
      </motion.section>
    );
  };

// Export the SectionWrapper HOC as default
export default SectionWrapper;
