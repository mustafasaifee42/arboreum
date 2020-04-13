import React, { useState } from "react";
import styled from "styled-components";

const HowItworksContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #fafafa;
`;

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
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const ListContainer = styled.div<{ imagePosition: string }>`
  margin: 30px 0 0 0;
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
`;

const SliderContainer = styled.div<{ imagePosition: string }>`
  width: 70%;
  max-width: calc(100% - 320px);
  background-color: #fff;
  height: 500px;
  box-shadow: 0 0px 13px -3px rgba(0, 0, 0, 0.2);
`;

const Map: React.FunctionComponent<{}> = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  return (
    <HowItworksContainer>
      <DivContainer>
        <TitleContainer>
          <h1>How It Works</h1>
          <h3>
            We combine machine learning, swarm intelligence, and distributed
            ledger technology to distribute loans amongst trustors
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
              <div className="bold">Step 1</div>
              <div>Launch and manage your network</div>
            </ListItems>
            <ListItems
              selected={selectedStep === 2 ? true : false}
              onClick={() => {
                setSelectedStep(2);
              }}
            >
              <div className="bold">Step 2</div>
              <div>Launch and manage your network</div>
            </ListItems>
            <ListItems
              selected={selectedStep === 3 ? true : false}
              onClick={() => {
                setSelectedStep(3);
              }}
            >
              <div className="bold">Step 3</div>
              <div>Launch and manage your network</div>
            </ListItems>
          </ListContainer>
          <SliderContainer></SliderContainer>
        </ContentContainer>
      </DivContainer>
    </HowItworksContainer>
  );
};

export default Map;
