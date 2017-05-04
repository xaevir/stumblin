import React from "react";
import styled from 'styled-components';
import Form from './form';
//import bgImg from './pallets-colorful.jpg';

const ContactUsStyled = styled.section`
  margin: auto;
  background-color: #f5f5f5;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Container = styled.div`
  margin: auto;
  max-width: 850px;
  background: #fff;
  border: 1px solid #f7f7f7;
  border-radius: 3px;
  padding: 10px 10px 80px 10px;
  @media (min-width: 768px) {
    padding: 10px 50px 80px 50px;
  }
`;

const Title = styled.h1`
  margin: 0;
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
    &:before {
    height: 8px;
    width: 80px;
    background-color: #282633;
    content: "";
    display: block;
    margin: auto;
    margin-bottom: 24px;
  }
`;

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 52px;
  font-size: 26px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Col1 = styled.div`
  flex-grow: 1;
  padding: 32px;
  margin-top: 32px;
`
const Col2 = styled.div`
  flex-grow: 1;
`

const Span = styled.span`
  display: block;
  font-size: 14px;
`



export default class ContactUs extends React.Component {
  constructor() {
    super();
/*
    this.sendFormValues = (values) => {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(checkStatus)
      .then(parseJSON)
      .then(function(data) {
        console.log('request succeeded with JSON response', data)
      }).catch(function(error) {
        console.log('request failed', error)
      })
    }
*/
  }
  render() {
    return (
      <ContactUsStyled>
        <Container>
          <FlexWrapper>
            <Col1>
              <H1>Give us a call or email</H1>
              <p>
                <b>Phone Main:</b>
                <Span>(484) 321-3971</Span>
              </p>
              <p>
                <b>Email:</b>
                <Span>hello@stumblinirishmen.com</Span>
              </p>
              <p>
                <b>Address:</b>
                <Span>323 E King St</Span>
                <Span>Malvern, PA 19355</Span>
              </p>
            </Col1>
            <Col2>
              <Form />
            </Col2>
          </FlexWrapper>
        </Container>
      </ContactUsStyled>
    );
  }
}
