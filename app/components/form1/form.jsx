import React from 'react';
import styled from 'styled-components';
import Label from './label'

// Variables
const colorGrey = '#eee';
const colorGreyLight = '#f5f5f5';
const colorPrimary = '#ffab00';
const radius = '3px';

const FormStyled = styled.form`
  padding: 32px;
  margin-top: 32px;
  margin-right: auto;
  margin-left: auto;
  max-width: 380px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
`;

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 52px;
  text-align: center;
  font-size: 26px;
`;

const FormGroup = styled.div`
  padding: 0;
  border: 0;

  & + & {
    margin-top: 16px;
  }
`;



const Input = styled.input`
  display: block;
  padding: 8px 12px;
  width: 100%;
  font-size: 16px;
  line-height: 1.25;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid ${colorGrey};
  border-left: 0;
  border-radius: ${radius};
  transition: all .25s cubic-bezier(.4,0,1,1);

  &:focus {
    outline: 0;
    border-bottom-color: ${colorPrimary};
  }
`;

const Btn = styled.button`
  display: inline-block;
  padding: 12 16;
  margin-top: 26px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  vertical-align: middle;
  white-space: nowrap;
  background-color: ${colorPrimary};
  border: 1px solid transparent;
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
  cursor: pointer;
  user-select: none;
  transition: all .25s cubic-bezier(.4,0,1,1);

  &:focus,
  &:hover {
    background-color: #ffc142;
    box-shadow: 0 18px 35px rgba(50,50,93,.1),0 8px 15px rgba(0,0,0,.07);
  }

  &:focus {
    outline: 0;
  }
`;


export default class Form extends React.Component {
  render() {
    return null
  }

}
