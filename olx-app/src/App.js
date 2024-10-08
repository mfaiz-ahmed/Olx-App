import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Router from './Config/RouterDom'
import { Provider } from 'react-redux';
import {store , persistor}from './Store/store';
import { PersistGate } from 'redux-persist/integration/react'






function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <Router />
       </PersistGate>
    </Provider>
  );
}

export default App;
