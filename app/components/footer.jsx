import React from "react";
import styled from 'styled-components';


const StyledFooter = styled.footer`
  background-color: #333;
  padding: 30px;
`

const Copyright = styled.p`
  color: #777e83;
  font-size: 11px;
`

export default class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Copyright>
          All rights reserved.
          Copyright &copy; {new Date().getFullYear()} Stumblin Irishmen
        </Copyright>
      </StyledFooter>
    );
  }
}
