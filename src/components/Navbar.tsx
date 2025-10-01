import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#7D121B] shadow-md relative z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center min-w-0 flex-1 md:flex-initial">
            <Link className="flex items-center min-w-0" to="/">
              {/* Full text on larger screens */}
              <span className="hidden sm:block text-white text-xl md:text-2xl font-bold">
                Seminole Innovators
              </span>
              {/* Abbreviated text on very small screens */}
              <span className="block sm:hidden text-white text-lg font-bold">
                SI
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-center md:space-x-4 relative z-50">
            <NavLinks mobile={false} />
          </div>

          {/* Hamburger button */}
          <div className="flex md:hidden relative z-50 ml-2 flex-shrink-0">
            <button
              onClick={() => {
                console.log("Hamburger clicked");
                setIsOpen(!isOpen);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#8D222B] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#7D121B] relative z-50">
          <NavLinks mobile={true} />
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  mobile: boolean;
}

const NavLinks = ({ mobile }: NavLinksProps) => {
  const navigate = useNavigate();

  const handleClick = (path: string): void => {
    console.log(`Clicked ${path}`);
    try {
      navigate(path);
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback to window.location if navigate fails
      window.location.href = path;
    }
  };

  const baseClass =
    "text-white px-3 py-2 hover:bg-[#FFD700] transition-colors duration-200 cursor-pointer border-2 border-transparent hover:border-white hover:border-b-4 hover:border-r-4";
  const mobileClass =
    "text-white block px-3 py-2 hover:bg-[#FFD700] transition-colors duration-200 cursor-pointer w-full text-left border-2 border-transparent hover:border-white hover:border-b-4 hover:border-r-4";
  const linkClass = mobile ? mobileClass : baseClass;

  return (
    <>
      <button
        className={linkClass}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClick("/");
        }}
      >
        Home
      </button>
      <button
        className={linkClass}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClick("/events");
        }}
      >
        Events
      </button>
      <button
        className={linkClass}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClick("/projects");
        }}
      >
        Projects
      </button>
      <button
        className={linkClass}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClick("/about");
        }}
      >
        About
      </button>
    </>
  );
};

export default Navbar;