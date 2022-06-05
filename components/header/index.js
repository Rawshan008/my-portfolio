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
            <MenuOpen clickMenu={() => setMenuOpen(true)} />
            {menuOpen ? (
              <HeaderMenu menuClose={() => setMenuOpen(false)} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
