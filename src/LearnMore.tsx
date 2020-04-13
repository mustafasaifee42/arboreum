import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #fafafa;
  padding: 50px 0 0 0;
`;

const CardContainer = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 0;
  padding: 0 20px;
`;

const Card = styled.div`
  max-width: 460px;
  font-size: 20px;
  margin: 0 20px;
`;

const CardTitle = styled.div`
  margin: auto;
  padding: 10px 20px;
  background-color: #252d44;
  color: #fff;
  font-size: 16px;
  display: table;
  position: relative;
  z-index: 10;
  border-radius: 5px;
`;

const CardContent = styled.div`
  margin-top: -25px;
  padding: 40px 20px 20px 20px;
  background-color: #fff;
  box-shadow: 0 0px 13px -3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 150px;
`;

const H2 = styled.h2`
  color: #ed135a;
  font-weight: normal;
  margin-bottom: 0px;
`;

const H3 = styled.h3`
  font-size:24px;
  margin-top: 5px;
  margin-bottom: 0;
`;

const ContactText = styled.div`
  margin-right: 75px;
`;

const Button = styled.div`
  display: flex;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 50px;
  color: #fff;
  background-color: #ed135a;
  box-shadow: 0 0px 10px -3px rgba(0, 0, 0, 0.4);
  margin-left: 75px;
`;

const Map: React.FunctionComponent<{}> = () => {
  return (
    <DivContainer>
      <CardContainer>
        <Card>
          <CardTitle>Pitch Deck</CardTitle>
          <CardContent>
            Learn more about the challenge we face, our novel solution, and our
            overall business strategy
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Whitepaper</CardTitle>
          <CardContent>
            Learn more about the underlying concepts and technical detials that
            power our solution
          </CardContent>
        </Card>
      </CardContainer>
      <ContactContainer>
        <ContactText>
          <H2>Partner with us</H2>
          <H3>Get in touch to find out how we can help you.</H3>
        </ContactText>
        <Button>Contact Us</Button>
      </ContactContainer>
    </DivContainer>
  );
};

export default Map;
