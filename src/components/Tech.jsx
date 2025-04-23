import { BallCanvas } from "./canvas"; // Importing the BallCanvas component to display 3D models
import { SectionWrapper } from "../hoc"; // Importing a higher-order component for section wrapping
import { technologies } from "../constants"; // Importing technology data
import { styles } from "../styles"; // Importing custom styles

const Tech = () => {
  return (
    <>
      {/* Section title */}
      <span className={`${styles.heroSubText} flex justify-center py-10`}>
        Tech Stacks
      </span>
      {/* Container for displaying technology icons */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {/* Mapping over the technologies array to display each technology */}
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* Rendering the BallCanvas component with the technology icon */}
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

// Wrapping the Tech component with SectionWrapper HOC and exporting it
export default SectionWrapper(Tech, "");
