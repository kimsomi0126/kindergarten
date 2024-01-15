import React from "react";
import { FooterBus, FooterWrap } from "../../styles/basic";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrap>
      <FooterBus />
      <Link to="/">copyright 떡잎방범대</Link>
    </FooterWrap>
  );
};

export default Footer;
