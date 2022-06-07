import Link from "next/link";
import { useState } from "react";
import Home from "../../public/icons/home.svg";
import About from "../../public/icons/about.svg";
import Portfolio from "../../public/icons/portfolio.svg";
import Contact from "../../public/icons/contact.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-around">
          <div className="w-1/4">
            <Link href="/">
              <a>Logo</a>
            </Link>
          </div>
          <div className="w-3/4 text-right">
            <div
              className="cursor-pointer inline-block"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                fill="#000000"
                viewBox="0 0 50 50"
                width="30px"
                height="30px"
              >
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
              </svg>
            </div>

            {/* Popup menu  */}

            <div
              className={
                "fixed w-96 left-1/2 -translate-x-2/4 transition-all duration-500 bg-base-color rounded-sm " +
                (menuOpen ? "top-0" : "-top-full")
              }
            >
              <div className="flex justify-between items-center p-5 border-b-2 border-menu-border">
                <div className="logo">Logo</div>
                <div
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    fill="#ffffff"
                    viewBox="0 0 50 50"
                    width="30px"
                    height="30px"
                  >
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                  </svg>
                </div>
              </div>

              <div className="menu">
                <ul className="flex flex-wrap justify-center items-center text-center">
                  <li className="w-1/2 inline-block transition-all duration-700 hover:bg-base-hover">
                    <Link href="/">
                      <a className="block p-12 font-dosis font-bold text-white text-xl uppercase letter tracking-widest border-b border-r border-menu-border flex items-center justify-center flex-col">
                        <Home
                          height="30"
                          width="30"
                          fill="#ffffff"
                          className="mb-1"
                        />
                        <span>Home</span>
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2 inline-block transition-all duration-700 hover:bg-base-hover">
                    <Link href="/about">
                      <a className="block p-12 font-dosis font-bold text-white text-xl uppercase letter tracking-widest border-b border-menu-border flex items-center justify-center flex-col">
                        <About
                          height="30"
                          width="30"
                          fill="#ffffff"
                          className="mb-1"
                        />
                        <span>About</span>
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2 inline-block transition-all duration-700 hover:bg-base-hover">
                    <Link href="/portfolio">
                      <a className="block p-12 font-dosis font-bold text-white text-xl uppercase letter tracking-widest border-b border-r border-menu-border flex items-center justify-center flex-col">
                        <Portfolio
                          height="30"
                          width="30"
                          fill="#ffffff"
                          className="mb-1"
                        />
                        <span>Portfolio</span>
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2 inline-block transition-all duration-700 hover:bg-base-hover">
                    <Link href="/contact">
                      <a className="block p-12 font-dosis font-bold text-white text-xl uppercase letter tracking-widest border-b border-menu-border flex items-center justify-center flex-col">
                        <Contact
                          height="30"
                          width="30"
                          fill="#ffffff"
                          className="mb-1"
                        />
                        <span>Contact</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* popup menu end  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
