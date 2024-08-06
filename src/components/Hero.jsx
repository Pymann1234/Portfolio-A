import { motion } from "framer-motion"; // Importing motion for animations from framer-motion library
import { styles } from "../styles"; // Importing custom styles from the styles module
import { ComputersCanvas } from "./canvas"; // Importing the ComputersCanvas component

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Container for the main hero section */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Container for the decorative element and text content */}
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Decorative circle */}
          <div className="w-5 h-5 rounded-full bg-[#7337f5]" />
          {/* Decorative vertical line with gradient */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="">
          {/* Main heading */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#5f2bcf]">Sam</span>
          </h1>
          {/* Subheading */}
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop, better user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      {/* Canvas component for displaying 3D content */}
      <ComputersCanvas />

      {/* Scroll down indicator */}
      <div className="absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          {/* Scroll down button container */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            {/* Animated indicator */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
