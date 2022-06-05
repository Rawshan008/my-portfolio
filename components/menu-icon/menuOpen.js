const MenuOpen = ({ clickMenu }) => {
  return (
    <div className="cursor-pointer inline-block" onClick={clickMenu}>
      <svg fill="#000000" viewBox="0 0 50 50" width="50px" height="50px">
        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
      </svg>
    </div>
  );
};

export default MenuOpen;
