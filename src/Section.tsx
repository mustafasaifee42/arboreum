import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import Icon from "./assets/imgs/fractalIcon.svg";

const DivContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 80px 20px 100px 20px;
`;

const TitleContainer = styled.div`
  margin: 0 auto 100px auto;
  text-align: center;
  max-width: 720px;
`;

const LogoImage = styled.img`
  height: 42px;
  width: auto;
  margin: auto;
`;

const IconConatiner = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const VideoConatiner = styled.div`
  padding: 20px 40px 40px 40px;
  border-radius: 5px;
  width: max-content;
  margin: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.11);
`;

const H3 = styled.h3`
  font-weight: bold;
  text-align: center;
  margin: 0 0 20px 0;
`;

const Map: React.FunctionComponent<{}> = () => {
  const opts: any = {
    height: "520",
    width: "960",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <DivContainer>
      <IconConatiner>
        <LogoImage src={Icon} alt="Fractal Lending Icon" />
      </IconConatiner>
      <TitleContainer>
        <h1>World’s first fractal lending technology</h1>
        <h3>
          Through fractal lending, borrowing, and underwriting, we spread loan
          risk across networks of businesses or individuals. As every lender’s
          risk lowers, it becomes easier for financially marginalized borrowers
          to access credit. Long chains of people in the network help credit
          move farther
        </h3>
      </TitleContainer>
      <VideoConatiner>
        <H3>See how it works</H3>
        <YouTube videoId="WzBimNSO-U8" opts={opts} />
      </VideoConatiner>
    </DivContainer>
  );
};

export default Map;
