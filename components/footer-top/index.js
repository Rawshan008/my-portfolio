import Link from "next/link";
import Home from "../../public/icons/home.svg";
import About from "../../public/icons/about.svg";
import Portfolio from "../../public/icons/portfolio.svg";
import Contact from "../../public/icons/contact.svg";

const FooterTop = () => {
  return (
    <div className="py-3 mt-8">
      <ul className="border-t border-t-menu-border">
        <li>
          <Link href="/">
            <a className="font-dosis font-bold text-body-color text-xl uppercase letter tracking-widest flex items-center justify-start border-b border-b-menu-border px-5 py-5 transition-all duration-300 hover:bg-white">
              <Home height="20" width="20" fill="#444444" className="mr-1" />
              <span className="ml-2">Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="font-dosis font-bold text-body-color text-xl uppercase letter tracking-widest flex items-center justify-start border-b border-b-menu-border px-5 py-5 transition-all duration-300 hover:bg-white">
              <About height="20" width="20" fill="#444444" className="mr-1" />
              <span className="ml-2">About</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a className="font-dosis font-bold text-body-color text-xl uppercase letter tracking-widest flex items-center justify-start border-b border-b-menu-border px-5 py-5 transition-all duration-300 hover:bg-white">
              <Portfolio
                height="20"
                width="20"
                fill="#444444"
                className="mr-1"
              />
              <span className="ml-2">Portfolio</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="font-dosis font-bold text-body-color text-xl uppercase letter tracking-widest flex items-center justify-start border-b border-b-menu-border px-5 py-5 transition-all duration-300 hover:bg-white">
              <Contact height="20" width="20" fill="#444444" className="mr-1" />
              <span className="ml-2">Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterTop;
