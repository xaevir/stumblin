import React from "react";
import styled from 'styled-components';
import logo from './logo.png';


const Container = styled.div`
  max-width: 1178px;
  margin: auto;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`

const Logo = styled.div`
  img {
    margin-top: 20px;
    margin-left: 20px;
    width: 105px;
    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <Logo>
          <img src={logo} />
        </Logo>
      </Container>
    );
  }
}
