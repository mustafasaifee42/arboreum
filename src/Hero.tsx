import React from "react";
import styled from "styled-components";

interface ButtonProps {
  type: string;
}
const DivContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px 0 20px;
`;

const TextContainer = styled.div`
  margin: 0 40px 0 0;
  max-width: 420px;
`;

const ButtonBlock = styled.div`
  display: flex;
  div {
    margin: 0 10px 0 0;
  }
`;
const Button = styled.div<ButtonProps>`
  display: flex;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 50px;
  border: ${(props: ButtonProps) =>
    props.type === "Primary" ? "none" : "1px solid #ed135a"};
  color: ${(props: ButtonProps) =>
    props.type === "Primary" ? "#fff" : "#ed135a"};
  background-color: ${(props: ButtonProps) =>
    props.type === "Primary" ? "#ed135a" : "#fff"};
  box-shadow: 0 0px 10px -3px rgba(0, 0, 0, 0.4);
`;

const ImageContainer = styled.div`
  width: 50%;
  max-width: 720px;
  margin-left: 40px;
  margin-bottom: -6px;
`;

const Map: React.FunctionComponent<{}> = () => {
  return (
    <DivContainer>
      <TextContainer>
        <h1 className="bold">​Peer To Peer Lending</h1>
        <h2 style={{ color: "#9098A6" }}>
          Made cheaper, safer, easier and faster
        </h2>
        <p>
          At Arboreum, we're working to create peer-to-peer lending networks
          that are more appealing to lenders and borrowers alike, with reduced
          risk, lower interest rates, and easier access to capital.
        </p>
        <ButtonBlock>
          <Button type="Primary">Request Demo</Button>
          <Button type="Secondary">Talk To Expert</Button>
        </ButtonBlock>
      </TextContainer>
      <ImageContainer>
        <img
          src="./assets/imgs/HeaderImage.png"
          width="100%"
          alt="Hero Banner"
        />
      </ImageContainer>
    </DivContainer>
  );
};

export default Map;
