import { useState, useRef } from "react"; // Import React hooks for state management and DOM manipulation
import { motion } from "framer-motion"; // Import Framer Motion for animations
import emailjs from "@emailjs/browser"; // Import emailjs for sending emails
import { styles } from "../styles"; // Import custom styles
import { EarthCanvas } from "./canvas"; // Import custom EarthCanvas component
import { SectionWrapper } from "../hoc"; // Import higher-order component for section wrapping
import { slideIn } from "../utils/motion"; // Import custom motion variants
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

// Contact component: Manages contact form and handles sending emails
const Contact = () => {
  const formRef = useRef(); // Create a reference for the form element

  // State for form fields and loading state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Handle change in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading to true

    // Send email using emailjs
    emailjs
      .send(
        "service_zoapexs", // Service ID
        "template_mysasjh", // Template ID
        {
          from_name: form.name,
          to_name: "Sam", // Recipient's name
          from_email: form.email,
          to_email: "samhonkd007@gmail.com", // Recipient's email
          message: form.message,
        },
        "XtnyxCo9t7Rj2AsmZ" // Public key for emailjs
      )
      .then(
        () => {
          setLoading(false); // Set loading to false
          alert("Thank you, I will get back to you as soon as possible."); // Success message

          // Reset form fields
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false); // Set loading to false
          console.log(error); // Log error
          alert("Something went wrong"); // Error message
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* Left section with contact form */}
      <motion.div
        // The Contact and Get in touch Slides in from the "left" side!!
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#1E3163] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}{" "}
              {/* Button text based on loading state */}
            </button>
            <Link
              to="https://drive.google.com/file/d/1pB5L6t9o1RmHPvkzZZcHsVojlHE46SQ3/view?usp=sharing"
              target="_blank"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              Resume
            </Link>
          </div>
        </form>
      </motion.div>

      {/* Right section with EarthCanvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// id = {contact} Just like anchor tag
export default SectionWrapper(Contact, "contact"); // Wrapping the Contact component with SectionWrapper HOC and exporting it
