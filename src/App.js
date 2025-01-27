import React,{Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponet';
import { Provider } from 'react-redux';
import {configureStore} from './Redux/configureStore';
import './App.css';
const store = configureStore();
class App extends Component{

  render()
  {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
 
}

export default App;
