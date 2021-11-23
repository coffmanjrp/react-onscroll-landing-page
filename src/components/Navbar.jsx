import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.scss';

const Navbar = ({ navLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked((prev) => !prev);
  };

  return (
    <div className="navbar">
      <span className="navbar__logo">travell</span>
      {menuClicked ? (
        <FiX size={25} className={'navbar__menu'} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={'navbar__menu'}
          onClick={toggleMenuClick}
        />
      )}
      <ul
        className={
          menuClicked ? 'navbar__list navbar__list--active' : 'navbar__list'
        }
      >
        {navLinks.map((item) => (
          <li key={item.id} className="navbar__item">
            <a href={item.url} className="navbar__link">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
