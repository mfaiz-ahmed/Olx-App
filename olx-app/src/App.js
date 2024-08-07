import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Router from './Config/RouterDom'
import { Provider } from 'react-redux';
import store from './Store';





function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
