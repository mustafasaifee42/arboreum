import React from "react";
import styled from "styled-components";
import Logo from "./assets/imgs/ArboreumLogoDark.svg";

const AppHeader = styled.header`
  padding: 0 20px;
  box-shadow: 0 4px 13px -3px rgba(0, 0, 0, 0.10196);
`;

const HeaderContainer = styled.div`
  background-color: #fff;
  margin: 0 auto;
  max-width: 1440px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;

const NavContainer = styled.div`
  display: flex;
  font-size: 20px;

  a {
    color: #9098a6;
    text-decoration: none;
    margin: 0 20px;
  }
  a:hover {
    color: #252d44;
  }
`;

const Button = styled.div`
  display: flex;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 50px;
  border: 1px solid #ed135a;
  color: #ed135a;
  box-shadow: 0 0px 10px -3px rgba(0, 0, 0, 0.4);
`;

const Map: React.FunctionComponent<{}> = () => {
  return (
    <AppHeader>
      <HeaderContainer>
        <LogoImage src={Logo} alt="Arboreum Logo" />
        <NavContainer>
          <a href="www.google.com">Home</a>
          <a href="www.google.com">Product</a>
          <a href="www.google.com">Team</a>
          <a href="www.google.com">Partnership</a>
          <a href="www.google.com">Contact</a>
        </NavContainer>
        <Button>Pitch Deck</Button>
      </HeaderContainer>
    </AppHeader>
  );
};

export default Map;
