import Link from "next/link";
import { useState } from "react";
import HeaderMenu from "../header-menu";
import MenuOpen from "../menu-icon/menuOpen";

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
                width="50px"
                height="50px"
              >
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
              </svg>
            </div>

            {/* Popup menu  */}

            <div
              className={
                "fixed w-96 h-96 left-1/2 -translate-x-2/4 transition-all duration-700 bg-base-color " +
                (menuOpen ? "top-0" : "-top-96")
              }
            >
              <div className="flex justify-between items-center p-5 border-b mb-3">
                <div className="logo">Logo</div>
                <div
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    fill="#ffffff"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                  >
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                  </svg>
                </div>
              </div>

              <div className="menu">
                <ul className="flex flex-wrap justify-center items-center text-center">
                  <li className="w-1/2 inline-block transition-all duration-700 hover:bg-base-hover">
                    <a className="block p-10" href="">
                      Home
                    </a>
                  </li>
                  <li className="w-1/2 inline-block transition-all duration-700 hover:bg-base-hover">
                    <a className="block p-10" href="">
                      About
                    </a>
                  </li>
                  <li className="w-1/2 inline-block transition-all duration-700 hover:bg-base-hover">
                    <a className="block p-10" href="">
                      portfolio
                    </a>
                  </li>
                  <li className="w-1/2 inline-block transition-all duration-700 hover:bg-base-hover">
                    <a className="block p-10" href="">
                      Contact
                    </a>
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
