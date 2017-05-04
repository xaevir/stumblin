import React from 'react';
import {render} from 'react-dom';
import Layout from './components/layout'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'


const initialState = {
  isSending: false,
  isSendSuccess: false
}

const quoteReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'SEND_QUOTE_REQUEST':
      return Object.assign({}, state, { isSending: false });
    case 'SEND_QUOTE_SUCCESS':
      return Object.assign({}, state, { isSendSuccess: true, isSending: false });
    }
    return state;
}

const reducers = combineReducers({
  form: reduxFormReducer,
  quoteState: quoteReducer
})

export const store =
  (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducers)


class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Layout> </Layout>
      </Provider>
    )
  }
}

render(<App/>, document.getElementById('app'));
