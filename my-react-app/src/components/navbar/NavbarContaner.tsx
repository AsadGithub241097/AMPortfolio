import React from 'react';
import AMLogo from "../../icons/AMLogo"  

interface NavbarProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onLabClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onHomeClick,
  onAboutClick,
  onLabClick,
}) => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">
        <AMLogo height={60} width={90}/>
          {/* <a href="#" onClick={onHomeClick}>
            Home
          </a> */}
        </div>
        <div className="space-x-4">
          <a
            href="#"
            className="hover:text-gray-400 transition-colors duration-300"
            onClick={onAboutClick}
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition-colors duration-300"
            onClick={onLabClick}
          >
            Lab
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
