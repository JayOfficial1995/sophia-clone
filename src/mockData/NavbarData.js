import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "../svgs";

export const accountsData = [
  {
    linkText: "WELCOME MSG!",
  },
  {
    linkText: "MY ACCOUNT",
    url: "/account",
  },
  {
    linkText: "MY WHISTLIST",
    url: "/item-list",
  },
  {
    linkText: "LOGIN",
    url: "/login",
  },
];

export const menubarData = [
  {
    linkText: "Home",
    url: "/",
  },
  {
    linkText: "Fashion",
    url: "/fachion",
  },
  {
    linkText: "Footware",
    url: "/footware",
  },
  {
    linkText: "Accessories",
    url: "/accessories",
  },
  {
    linkText: "Homeware",
    url: "/homeware",
  },
];

export const socialMediaData = [
  {
    icon: <FacebookIcon />,
    url: "/facebook",
  },

  {
    icon: <TwitterIcon />,
    url: "/twitter",
  },

  {
    icon: <PinterestIcon />,
    url: "/pinterest",
  },

  {
    icon: <InstagramIcon />,
    url: "/instagram",
  },
];
