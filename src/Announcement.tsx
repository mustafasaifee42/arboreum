import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  font-size: 24px;
  text-decoration: underline;
  color: #fff;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #1a2943;
`;

const P = styled.p`
  margin: 0 15px 0 0;
`;

const DivBorder = styled.div`
  width: 100%;
  height: 10px;
  background-image: linear-gradient(
    90deg,
    #ed145a 0%,
    #bc5e6b 25%,
    #009893 50%,
    #55b359 75%,
    #73bf44 75%
  );
`;

const Map: React.FunctionComponent<{}> = () => {
  return (
    <DivContainer>
      <Div>
        <P>Consensys grant winner</P>
        <img
          src={"./assets/imgs/consensys-vector-logo.png"}
          width="50px"
          height="50px"
          alt={"logo"}
        />
      </Div>
      <DivBorder />
    </DivContainer>
  );
};

export default Map;
