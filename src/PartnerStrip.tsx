import React from "react";
import styled from "styled-components";

const PartnerStrip = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #fafafa;
`;
const DivContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;

  img {
    margin: 0 25px;
    height: 45px;
  }
`;

const P = styled.p`
  text-align: center;
  margin: 20px 0 0 0;
  font-style: italic;
  opacity: 0.6;
  font-size: 20px;
`;

const Map: React.FunctionComponent<{}> = () => {
  return (
    <PartnerStrip>
      <P>Powering next generation of FinTech</P>
      <DivContainer>
        <img src="./assets/imgs/FpMainLogo.png" width="auto" alt="FP Logo" />
        <img src="./assets/imgs/FpMainLogo.png" width="auto" alt="FP Logo" />
        <img src="./assets/imgs/FpMainLogo.png" width="auto" alt="FP Logo" />
      </DivContainer>
    </PartnerStrip>
  );
};

export default Map;
