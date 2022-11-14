import React from "react";
import "./Footer.css";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <footer className="padding">
      <Socials />
      <div className="copyright text-center">&copy;2020 Nseko Christian</div>
    </footer>
  );
};

export default Footer;
