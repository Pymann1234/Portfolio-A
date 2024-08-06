import { useState } from "react"; // Importing useState for managing component state
import { Link } from "react-router-dom"; // Importing Link for navigation between routes
import { styles } from "../styles"; // Importing custom styles
import { navLinks } from "../constants"; // Importing navigation links
import { logo, menu, close } from "../assets"; // Importing images for logo and menu icons

const Navbar = () => {
  // State for tracking the currently active link
  const [active, setActive] = useState("");
  // State for toggling the mobile menu
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX}  bg-[#200e47]/60 w-full flex items-center py-5 fixed top-0 z-20 rounded-b-[5px] backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and title section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="rounded-full w-[65px] h-[65px] object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Sam&nbsp;
            <span className="sm:block hidden">| Front-End Developer</span>
          </p>
        </Link>
        {/* Desktop navigation links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
              ${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title); // Set the clicked link as active
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu} // Switch between close and menu icon based on toggle state
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)} // Toggle the menu visibility
          />
        </div>

        {/* Mobile menu */}
        <div
          className={`${!toggle ? "hidden" : "flex"} 
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`
              ${active === link.title ? "text-white" : "text-secondary"}
               font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle); // Close the menu when a link is clicked
                  setActive(link.title); // Set the clicked link as active
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
