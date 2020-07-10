import React from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";
import TeamMembers from "./assets/data/team.json";
import Advisory from "./assets/data/advisory.json";

interface members {
  name: string;
  position: string;
  description: string;
  linkedin?: string;
  linkedinURL: string;
  photo: string;
}

const HowItworksContainer = styled.div`
  margin: 0 auto;
  background-color: #fafafa;
`;

const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 1272px;
  padding: 120px 20px 50px 20px;
`;

const TitleContainer = styled.div`
  margin: 0 auto 40px auto;
`;

const ContentContainer = styled.div`
  flex-wrap: wrap;
`;

const TitleOutline = styled.div`
  width: 75px;
  height: 3px;
  background-color: #ed135a;
  margin: 20px 0;
`;

const H4 = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 0 -20px 40px -20px;
`;

const Map: React.FunctionComponent<{}> = () => {
  const teamCards = TeamMembers.map((d: members, i: number) => {
    return (
      <TeamCard
        key={i}
        name={d.name}
        description={d.description}
        position={d.position}
        linkedin={d.linkedin}
        linkedinURL={d.linkedinURL}
        photo={d.photo}
      />
    );
  });
  const advisoryCards = Advisory.map((d: members, i: number) => {
    return (
      <TeamCard
        key={i}
        name={d.name}
        description={d.description}
        position={d.position}
        linkedin={d.linkedin}
        linkedinURL={d.linkedinURL}
        photo={d.photo}
      />
    );
  });
  return (
    <HowItworksContainer>
      <DivContainer>
        <TitleContainer>
          <h1>Led By A Team Of Experts</h1>
          <TitleOutline />
          <h3>
            The Arboreum leadership and advisory board combines years of world-class experience in econometrics,
            data science, mathematics, blockchain technology, program verification and management consultancy.
          </h3>
        </TitleContainer>
        <ContentContainer>
          <H4>Leadership</H4>
          <TeamContainer>{teamCards}</TeamContainer>
        </ContentContainer>
        <ContentContainer>
          <H4>Advisory</H4>
          <TeamContainer>{advisoryCards}</TeamContainer>
        </ContentContainer>
      </DivContainer>
    </HowItworksContainer>
  );
};

export default Map;
