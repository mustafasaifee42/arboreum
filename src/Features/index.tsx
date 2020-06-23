import React from "react";
import styled from "styled-components";
import Features from "./assets/data/copy.json";
import FeatureCard from "./FeatureCard";

interface feature {
  title: string;
  description: string;
  icon: string;
}

const HowItworksContainer = styled.div`
  margin: 0 auto;
  background-color: #fafafa;
`;

const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 1272px;
  padding: 120px 20px;
`;

const TitleContainer = styled.div`
  margin: 0 auto 40px auto;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0 -20px;
`;

const TitleOutline = styled.div`
  width: 75px;
  height: 3px;
  background-color: #ed135a;
  margin: 20px 0;
`;

const Map: React.FunctionComponent<{}> = () => {
  let feartureCard = Features.map((d: feature, i: number) => {
    return (
      <FeatureCard
        title={d.title}
        description={d.description}
        icon={d.icon}
        key={i}
      />
    );
  });
  return (
    <HowItworksContainer>
      <DivContainer>
        <TitleContainer>
          <h1>
            Our technology enables safe, affordable {"&"} socially inclusive lending opportunities.
          </h1>
          <TitleOutline />
        </TitleContainer>
        <ContentContainer>{feartureCard}</ContentContainer>
      </DivContainer>
    </HowItworksContainer>
  );
};

export default Map;
