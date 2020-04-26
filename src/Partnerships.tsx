import React, { useState } from "react";
import styled from "styled-components";

const HowItworksContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
`;

const DivContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1272px;
  padding: 150px 20px;
`;

const TitleContainer = styled.div`
  margin: 0 auto 100px auto;
  text-align: center;
  max-width: 720px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const ListContainer = styled.div<{ imagePosition: string }>`
  margin: 15px 0 0 0;
  width: 30%;
  max-width: 320px;
  box-shadow: 0 0px 13px -3px rgba(0, 0, 0, 0.2);
`;

const ListItems = styled.div<{ selected: boolean }>`
  padding: 25px 15px;
  position: relative;
  font-size: 16px;
  border-left: ${(props: { selected: boolean }) =>
    props.selected ? "4px solid #ed135a" : "4px solid #fafafa"};
  border-bottom: 1px solid #eee;
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? "#fff" : "#fafafa"};
  z-index: 10;
  cursor: pointer;
`;

const SliderContainer = styled.div<{ imagePosition: string }>`
  width: 70%;
  max-width: calc(100% - 320px);
  background-color: #fff;
  height: 560px;
  box-shadow: 0 0px 13px -3px rgba(0, 0, 0, 0.2);
`;

const ButtonTitle = styled.div`
  font-weight: bold;
`;

const ButtonText = styled.div`
  font-size: 14px;
  color: #999;
`;

const Map: React.FunctionComponent<{}> = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  return (
    <HowItworksContainer>
      <DivContainer>
        <TitleContainer>
          <h1>Partnerships</h1>
          <h3>
            We partner with businesses, financial institutes, and NGOs to build
            a wide range of smartphone-enabled credit inclusion products
          </h3>
        </TitleContainer>
        <ContentContainer>
          <ListContainer>
            <ListItems
              selected={selectedStep === 1 ? true : false}
              onClick={() => {
                setSelectedStep(1);
              }}
            >
              <ButtonTitle>Inter-network Lending</ButtonTitle>
              <ButtonText>
                Enabling borrowing for individuals or micro, small, medium
                enterprises from their own communities
              </ButtonText>
            </ListItems>
            <ListItems
              selected={selectedStep === 2 ? true : false}
              onClick={() => {
                setSelectedStep(2);
              }}
            >
              <ButtonTitle>Institution-network lending</ButtonTitle>
              <ButtonText>
                Enabling borrowing of larger and/ or safer loans from
                institutional lenders by leveraging network as guarantor
              </ButtonText>
            </ListItems>
            <ListItems
              selected={selectedStep === 3 ? true : false}
              onClick={() => {
                setSelectedStep(3);
              }}
            >
              <ButtonTitle>Business network lending</ButtonTitle>
              <ButtonText>
                Enabling purchase of goods and products on loan from seller
                against instalment-based payment
              </ButtonText>
            </ListItems>
          </ListContainer>
          <SliderContainer></SliderContainer>
        </ContentContainer>
      </DivContainer>
    </HowItworksContainer>
  );
};

export default Map;
