import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi';

function Header() {
  const { isShowRegisterPage, showHideRegisterPage } =
    useContext(GlobalContext);
  return (
    <div className="header">
      <div
        className="icon"
        onClick={(e) => showHideRegisterPage(!isShowRegisterPage)}
      >
        {isShowRegisterPage ? <GiHamburgerMenu /> : <BiArrowBack />}
      </div>
      <label>{isShowRegisterPage ? 'Register card form' : 'Menu'}</label>
    </div>
  );
}

export default Header;
