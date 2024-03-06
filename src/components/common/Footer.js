import React from "react";
import { FooterBg, FooterBus, FooterWrap } from "../../styles/basic";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterWrap>
      <FooterBus onClick={() => navigate("/about")} />
      <FooterBg>
        <Link to="/about">copyright 떡잎방범대</Link>
      </FooterBg>
    </FooterWrap>
  );
};

export default Footer;
