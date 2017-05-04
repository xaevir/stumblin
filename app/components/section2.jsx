import React from "react";
import styled from 'styled-components';
import bgImg from './pallets-colorful.jpg';

const Section2Styled = styled.section`
  /*margin-top: 200px;*/
  padding-top: 250px ;
  padding-bottom: 200px;
  background: url(${bgImg}) no-repeat center center;
  background-size: cover;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  max-width: 800px;
  margin: auto;
  font-size: 44px;
  padding: 20px;
  text-align: center;
  font-weight: 700;
  display: inline-block;
  color: #fff;
  @media (min-width: 768px) {
    background-color: #fff;
    color: #000;
  }
`;

export default class Section2 extends React.Component {
  render() {
    return (
      <Section2Styled>
        <Title>We'd love to clean<br /> up your pallets</Title>
      </Section2Styled>
    );
  }
}
