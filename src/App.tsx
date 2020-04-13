import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Hero from "./Hero";
import PartnerStrip from "./PartnerStrip";
import Section from "./Section";
import HowItWorks from "./HowItWorks";
import Team from "./Team";
import LearnMore from "./LearnMore";
import Footer from "./Footer";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 1.5;
    font-size: 16px;
    color:#252D44;
    margin: 0;
    padding: 0;
  }
  
  h1 {
    font-size: 40px;
    line-height: 1.25;
    margin:0 0 10px 0;
    font-weight: normal;
  }

  h2 {
    font-size: 30px;
    line-height: 1.25;
    margin:0 0 10px 0;
    font-weight: normal;
  }

  h3 {
    font-weight: normal;
    font-size: 20px;
  }

  h4 {
    font-weight: bold;
    font-size: 16px;
  }

  .bold {
    font-weight: bold;
  }

`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Hero />
      <PartnerStrip />
      <Section imagePos="right" />
      <HowItWorks />
      <Team />
      <LearnMore />
      <Footer />
    </AppContainer>
  );
}

export default App;
