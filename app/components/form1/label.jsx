import React from 'react';
import styled from 'styled-components';


const LabelStyled = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 12px;
  text-transform: uppercase;
  touch-action: manipulation;
`;

export default class Label extends React.Component {
 constructor() {
  super();
 }

 render() {
  return(
   <LabelStyled htmlFor={this.props.htmlFor}>{this.props.title}</LabelStyled>
  )
 }
}
