import React, { useState } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import Icon from "./assets/imgs/fractalIcon.svg";

interface H3Props {
  align: string;
}

const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 80px 20px 100px 20px;
`;

const TitleContainer = styled.div`
  margin: 0 auto 75px auto;
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
  padding: 0 40px 40px 40px;
  border-radius: 5px;
  width: max-content;
  margin: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.11);
`;

const H3 = styled.h3<H3Props>`
  font-weight: bold;
  text-align: ${(props: H3Props) => props.align};
  margin: 20px 0;
  padding-top: 20px;
`;

const CardContainer = styled.div`
  margin: 25px auto 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  min-width: 320px;
  flex: 1 1 100%;
  max-width: 960px;
`;

const Card = styled.div`
  flex: 0 1 calc(50% - 25px);
  max-width: 460px;
  font-size: 20px;
`;

const CardContent = styled.div`
  padding: 30px 20px 10px 20px;
  background-color: #fff;
  font-size: 18px;
  align-items: stretch;
  box-shadow: 0 0px 13px -3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: all 0.5s ease;
  height: calc(100% - 40px);
  &:hover {
    box-shadow: 0 0px 13px 0px rgba(0, 0, 0, 0.3);
  }
`;

const P = styled.p`
  margin-top: 20px;
`;

const CardTitle = styled.div`
  padding: 10px 20px;
  display: flex;
  font-size: 20px;
  color: #ed145a;
  border: 2px solid #ed145a;
  border-radius: 50px;
  width: max-content;
`;

const Map: React.FunctionComponent<{}> = () => {
  const [windowWidthValue, setWindowWidthValue] = useState(window.innerWidth);
  window.onresize = () => {
    setWindowWidthValue(window.innerWidth);
  };
  const width = windowWidthValue > 1000 ? 880 : windowWidthValue - 140;
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
      <CardContainer>
        <Card>
          <a
            href="./assets/pdfFiles/PitchDeck.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardContent>
              <CardTitle align="left">Pitch Deck</CardTitle>
              <P>
                Learn more about the challenge we face, our novel solution, and
                our overall business strategy
              </P>
            </CardContent>
          </a>
        </Card>
        <Card>
          <a
            href="./assets/pdfFiles/WhitePaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardContent>
              <CardTitle align="left">Whitepaper</CardTitle>
              <P>
                Learn more about the underlying concepts and technical detials
                that power our solution
              </P>
            </CardContent>
          </a>
        </Card>
      </CardContainer>
      <VideoConatiner>
        <H3 align="center">See how it works</H3>
        <YouTube
          videoId="WzBimNSO-U8"
          opts={{
            height: `${(width * 520) / 800}`,
            width: `${width}`,
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </VideoConatiner>
    </DivContainer>
  );
};

export default Map;
