import { useEffect, useState } from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const navItems = [
  // { id: 1, name: "Home", url: "introduction" },
  // { id: 2, name: "About", url: "profile" },
  // { id: 3, name: "Process", url: "work-process" },
  // { id: 4, name: "Portfolio", url: "portfolio" },
  // { id: 5, name: "Insights", url: "blog" },
  // { id: 6, name: "Services", url: "services" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeStyle={{
        backgroundColor: "#9929fb",
        color: "white",
      }}
      className={`hover:text-picto-primary px-5 py-3 mx-1`}
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
              Satish Kumar
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center gap-3 sm:gap-5">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <div className="hidden xs:flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+918870340888"
              aria-label="Phone"
              className="hidden lg:flex items-center gap-2 pe-1 text-sm font-medium text-gray-700 hover:text-picto-primary transition-colors"
            >
              <span className="w-8 h-8 sm:w-10 sm:h-10 center rounded-full bg-[#EDD8FF80] text-picto-primary shrink-0">
                <FontAwesomeIcon icon={faPhone} className="text-sm sm:text-base" />
              </span>
              +91 88703 40888
            </a>
            <a
              href="tel:+918870340888"
              aria-label="Phone"
              className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EDD8FF80] text-picto-primary hover:bg-picto-primary hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faPhone} className="text-sm sm:text-base" />
            </a>
            <a
              href="mailto:sathishkumar.official@gmail.com"
              aria-label="Email"
              className="w-8 h-8 sm:w-10 sm:h-10 center rounded-full bg-[#EDD8FF80] text-picto-primary hover:bg-picto-primary hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-sm sm:text-base" />
            </a>
            <a
              href="https://linkedin.com/in/satishkumardhinakaran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 sm:w-10 sm:h-10 center rounded-full bg-[#EDD8FF80] text-picto-primary hover:bg-picto-primary hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-sm sm:text-base" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
