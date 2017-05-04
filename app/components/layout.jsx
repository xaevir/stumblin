import React from "react";
import styled from 'styled-components';
import 'sanitize.css/sanitize.css';
import './global-styles';
import bgImgBig from './bg1.jpg'
//import bgImg from './pallots-bw.jpg'
import bgImgSmall from './bg-light.jpg'

import Header from './header';
import Jumbotron from './jumbotron';
import Section2 from './section2';
import Contact from './contact';
import Footer from './footer';

const Section1 = styled.div`
  background: url(${bgImgSmall}) no-repeat left center/cover;
  padding-bottom: 200px;
  @media (min-width: 768px) {
    background: url(${bgImgBig}) no-repeat center center/cover;
  }
`;



export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Section1>
          <Header />
          <Jumbotron />
        </Section1>
        <Contact />
        <Section2 />
        <Footer />
      </div>
    )
  }
}
