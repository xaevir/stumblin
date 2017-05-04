import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components';
import {store} from '../index'
import {reset} from 'redux-form';
import { connect } from 'react-redux';

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const Wrapper = styled.div`
  padding: 32px 0;
  margin-top: 32px;
  margin-right: auto;
  margin-left: auto;
  max-width: 380px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #ccc;
  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const StyledForm = styled.form`
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #666;
  text-align: center;
  transition: all .25s cubic-bezier(.4,0,1,1);

  &:focus {
    outline: 0;
    border-bottom-color: #ffab00;
  }
`;

const StyledFieldset = styled.fieldset`
  padding: 0;
  border: 0;
  text-align: center;
  max-width: 260px;
  margin: auto;

  & + & {
    margin-top: 16px;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  touch-action: manipulation;
`;

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 52px;
  text-align: center;
  font-size: 26px;
`;

const StyledBtn = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 26px;
  padding: 12px 16px;
  background-color: #ffab00;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: all .25s cubic-bezier(.4,0,1,1);
  text-transform: uppercase;
  width: 100%;

  &:focus,
  &:hover {
    background-color: #ffc142;
  }

  &:focus {
    outline: 0;
  }
`;

const StyledSpan = styled.span`
  color: #700;
  padding: 5px 8px;
  display: inline-block;
`;

const AlertSuccess = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #91cf91;
  border-color: #80c780;
  color: #3d8b3d;
  min-width: 150px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 3px;
  display: ${props => props.show ? 'block' : 'none'};
`;


const sendFormValues = (values) => {
  fetch('/api/contact', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(values)
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log(json)
    store.dispatch(reset('quoteForm'));
    store.dispatch({
      type: 'SEND_QUOTE_SUCCESS',
    });
  }).catch(function(error) {
    console.log('request failed', error)
  })
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <StyledFieldset>
    <StyledLabel>{label}</StyledLabel>
    <div>
      <StyledInput {...input} type={type}/>
      {touched && ((error && <StyledSpan>{error}</StyledSpan>))}
    </div>
  </StyledFieldset>
)


class FormContainer extends React.Component {
  render() {
    return (
      <ReduxedForm quote={this.props.quote} />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    quote: store.quoteState
  };
}

export default connect(mapStateToProps)(FormContainer);


const QuoteForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, quote } = props
  return (
    <Wrapper>
      <H1>Get a Free Quote</H1>
      <AlertSuccess show={quote.isSendSuccess}>
        <p>Thank you for your business. We will get back to you as soon as possible.</p>
      </AlertSuccess>
      <StyledForm onSubmit={handleSubmit(sendFormValues)}>
        <Field name="name" type="text"
          component={renderField} label="Name"
          validate={[ required ]}
        />
        <Field name="email" type="email"
          component={renderField} label="Email"
          validate={[ required, email ]}
        />
        <Field name="pallotNumber" type="number"
          component={renderField} label="How many pallots"
          validate={[ required, number ]}
        />
        <Field name="zipCode" type="number"
          component={renderField} label="Zip code"
          validate={[ required, number ]}
        />
        <StyledFieldset>
          <StyledBtn type="submit" disabled={submitting}>Get Quote</StyledBtn>
        </StyledFieldset>
      </StyledForm>
    </Wrapper>
  )
}

var ReduxedForm = reduxForm({
  form: 'quoteForm' // a unique identifier for this form
})(QuoteForm)
