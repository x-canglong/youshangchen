import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import Router from '@/router/index'
import store from '@/store/index';
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Provider store={store}>
           {Router}
       </Provider>
      </div>
    );
  }
}

export default App;
