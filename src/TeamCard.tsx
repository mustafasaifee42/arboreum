import React from "react";
import styled from "styled-components";
import LinkedinLogo from "./assets/imgs/Linkedin.svg";

const DivContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  margin: 10px;
  max-width: 400px;
  min-width: 320px;
  background-color: #fafafa;
  padding: 20px;
  display: flex;
  font-size:14px;
`;

const ImageContainer = styled.div`
  margin: 0 20px 0 0;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  img {
    border-radius: 100px;
  }
`;
const H3 = styled.h3`
  font-weight: bold;
  margin: 0;
`;
const H4 = styled.h4`
  color: #ed135a;
  margin: 0;
`;

const LinkedIn = styled.img`
  height: 40px;
  width: auto;
`;

const Map: React.FunctionComponent<{
  name: string;
  description: string;
  position: string;
  photo: string;
  linkedin?: string;
}> = (props) => {
  return (
    <DivContainer>
      <ImageContainer>
        <img src={props.photo} width="100%" alt={`${props.name} photograph`} />
      </ImageContainer>
      <div>
        <H3>{props.name}</H3>
        <H4>{props.position}</H4>
        <p>{props.description}</p>
        {props.linkedin ? (
          <LinkedIn src={LinkedinLogo} alt="Linkedin Icon" />
        ) : null}
      </div>
    </DivContainer>
  );
};

export default Map;
