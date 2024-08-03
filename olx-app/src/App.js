import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/index'
import { Provider } from 'react-redux';
import Router from './Config/RouterDom'




function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
