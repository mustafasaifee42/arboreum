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
  width: 100%;
  background-color: #fafafa;
`;

const DivContainer = styled.div`
  margin: 0 auto;
  width: 100%;
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
  width: 100%;
  flex-wrap: wrap;
  align-items: stretch;
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
            Leverage our Technology to Create Cheaper, Faster {"&"} Safer Loans
          </h1>
          <TitleOutline />
        </TitleContainer>
        <ContentContainer>{feartureCard}</ContentContainer>
      </DivContainer>
    </HowItworksContainer>
  );
};

export default Map;
