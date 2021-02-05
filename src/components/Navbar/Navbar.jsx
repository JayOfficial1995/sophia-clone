import React from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";

import {
  accountsData,
  menubarData,
  socialMediaData,
} from "../../mockData/NavbarData";
import { PhoneIcon } from "../../svgs";
import {
  NavbarStyle,
  MenubarStyle,
  SiteMenuStyle,
  SocialIconsMenuStyle,
} from "./Navbar.style";

const SocialIconsMenu = () => {
  const { Option } = Select;

  return (
    <SocialIconsMenuStyle>
      <article className="social-icon-wrapper">
        {socialMediaData.map((socialData, index) => {
          const { icon, url } = socialData;
          return (
            <Link to={url} key={index} className="social-icon">
              {icon}
            </Link>
          );
        })}
      </article>

      <article className="currency-changer-wrapper">
        <Select defaultValue="rupiah">
          <Option value="rupiah">RUPIAH</Option>
          <Option value="ruppes">RUPEES</Option>
          <Option value="dollar">DOLLAR</Option>
        </Select>
      </article>
    </SocialIconsMenuStyle>
  );
};

const SiteMenu = () => {
  return (
    <SiteMenuStyle>
      <ul className="menu-items-wrapper">
        {menubarData.map((menuData, index) => {
          const { linkText, url } = menuData;
          return (
            <li className="menu-item" key={index}>
              <Link to={url} className="menu-item-link">
                {linkText}
              </Link>
            </li>
          );
        })}
      </ul>

      <article className="menubar-wrapper">
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </article>
    </SiteMenuStyle>
  );
};

const Menubar = () => {
  return (
    <MenubarStyle>
      <SiteMenu />

      <Link to="/" className="site-logo-wrapper">
        <img
          src="./images/site-logo.png"
          alt="Site logo"
          className="site-logo"
        />
      </Link>

      <SocialIconsMenu />
    </MenubarStyle>
  );
};

function Navbar() {
  return (
    <NavbarStyle>
      <article className="navbar-belt">
        <article className="navbar-container">
          <article className="phone-details">
            <span className="phone-icon">
              <PhoneIcon />
            </span>
            <p className="phone-no">Call: +92 311 5506699</p>
          </article>

          <ul className="account-options-wrapper">
            {accountsData.map((data, index) => {
              const { linkText, url } = data;
              return (
                <li className="account-option" key={index}>
                  <Link to={url && url} className="account-link">
                    {linkText}
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>
      </article>

      <Menubar />
    </NavbarStyle>
  );
}

export default Navbar;
