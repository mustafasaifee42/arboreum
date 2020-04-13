import React from "react";
import styled from "styled-components";
import Logo from "./assets/imgs/ArboreumLogoLight.svg";

const AppFooter = styled.footer`
  padding: 20px;
  background-color: #1A2943;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  height: 20px;
  width: auto;
`;

const P = styled.p`
  font-size: 14px;
  color:#fff;
  opacity: 0.7;
  margin: 0;
`;

const Map: React.FunctionComponent<{}> = () => {
  return (
    <AppFooter>
      <FooterContainer>
        <LogoImage src={Logo} alt="Arboreum Logo" />
        <P>© 2020 Arboreum. All rights reserved.</P>
      </FooterContainer>
    </AppFooter>
  );
};

export default Map;
