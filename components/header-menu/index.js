import MenuClose from "../menu-icon/menuClose";

const HeaderMenu = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-white flex justify-center">
      <div className="w-96 h-96 bg-base-color relative">
        <div className="flex justify-between items-center p-5 border-b mb-3">
          <div className="logo">Logo</div>
          <div className="close">
            <MenuClose menuClose={menuClose} />
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
    </div>
  );
};

export default HeaderMenu;
