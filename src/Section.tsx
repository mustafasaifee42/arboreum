import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 100px 20px;
`;

const TitleContainer = styled.div`
  margin: 0 auto 100px auto;
  text-align: center;
  max-width: 720px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div<{ imagePosition: string }>`
  margin: ${(props: { imagePosition: string }) =>
    props.imagePosition === "right" ? "0 40px 0 0" : "0 0 0 40px"};
  max-width: 420px;
`;

const ImageContainer = styled.div<{ imagePosition: string }>`
  width: 50%;
  max-width: 720px;
  margin: ${(props: { imagePosition: string }) =>
    props.imagePosition === "right" ? "0 0 0 40px" : "0 40px 0 0"};
`;

const ButtonBlock = styled.div`
  display: flex;
  div {
    margin: 0 10px 0 0;
  }
`;
const Button = styled.div`
  display: flex;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 50px;
  color: #fff;
  background-color: #ed135a;
  box-shadow: 0 0px 10px -3px rgba(0, 0, 0, 0.4);
`;

const Map: React.FunctionComponent<{ imagePos: string }> = (props) => {
  return (
    <DivContainer>
      <TitleContainer>
        <h1>Decentralising Peer to Peer Lending</h1>
        <h3>
          Leading the way in combining machine learning, swarm intelligence, and
          distributed ledger technology to create the first decentralised,
          many-to-many credit networks
        </h3>
      </TitleContainer>
      <ContentContainer>
        {props.imagePos === "right" ? (
          <>
            <TextContainer imagePosition={props.imagePos}>
              <p>
                We're empowering individuals to assess risk, give and receive
                loans, and earn interest on savings, without relying on banks or
                other financial intermediaries.
              </p>
              <p>
                We're working towards creating micro-credit grids for
                financially underserved communities via trust networks.
              </p>
              <ButtonBlock>
                <Button>Pitch Deck</Button>
              </ButtonBlock>
            </TextContainer>
            <ImageContainer imagePosition={props.imagePos}>
              <img
                src="./assets/imgs/AdobeStock_236666680_Preview.jpg"
                width="100%"
                alt="Peer to peer lending graphic"
              />
            </ImageContainer>
          </>
        ) : (
          <>
            <ImageContainer imagePosition={props.imagePos}>
              <img
                src="./assets/imgs/AdobeStock_236666680_Preview.jpg"
                width="100%"
                alt="Peer to peer lending graphic"
              />
            </ImageContainer>
            <TextContainer imagePosition={props.imagePos}>
              <p>
                We're empowering individuals to assess risk, give and receive
                loans, and earn interest on savings, without relying on banks or
                other financial intermediaries.
              </p>
              <p>
                We're working towards creating micro-credit grids for
                financially underserved communities via trust networks.
              </p>
              <ButtonBlock>
                <Button>Pitch Deck</Button>
              </ButtonBlock>
            </TextContainer>
          </>
        )}
      </ContentContainer>
    </DivContainer>
  );
};

export default Map;
