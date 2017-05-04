import React from "react";
import styled from 'styled-components';


const JumbotronStyled = styled.div`
  max-width: 800px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Subtitle = styled.h2`
  margin-top: 120px;
  letter-spacing: 3px;
  color: #b0afb2;
  font-size: 12px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-family: Caslon;
  font-weight: normal;
  line-height: 1.2;
  margin-top: 60px;
  color: #111;
  @media (min-width: 768px) {
    font-size: 36px;
    /* padding: 10px; */
    /*background-color: #fff;*/
  }
`;

export default class Jumbotron extends React.Component {
  render() {
    return (
      <JumbotronStyled>
        <Subtitle>WELCOME</Subtitle>
        <Title>We are a family business recently created by two Irishmen who want to clean up and recycle all of the pallets cluttering warehouses.</Title>
      </JumbotronStyled>
    );
  }
}
