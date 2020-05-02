import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  margin: 0 auto;
  margin: 20px;
  min-width: 240px;
  flex: 1 1 calc(33% - 80px);
  background-color: #fff;
  padding: 20px;
  font-size: 16px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.11);
`;

const ImageContainer = styled.div`
  margin: 20px auto;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
`;

const H3 = styled.h3`
  font-weight: bold;
  margin: 0;
  margin-top: 20px;
`;

const HR = styled.hr`
  background-color: #aaa;
`;

const P = styled.p`
  color: #999;
`;

const Map: React.FunctionComponent<{
  title: string;
  icon: string;
  description: string;
}> = (props) => {
  return (
    <DivContainer>
      <ImageContainer>
        <img src={props.icon} width="100%" alt={`${props.icon} icon`} />
      </ImageContainer>
      <HR />
      <div>
        <H3>{props.title}</H3>
        <P>{props.description}</P>
      </div>
    </DivContainer>
  );
};

export default Map;
