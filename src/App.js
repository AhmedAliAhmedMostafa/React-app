import React,{Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponet';
import './App.css';
class App extends Component{

  render()
  {
    return (
        <BrowserRouter>
          <div>
          <Main />
        </div>
        </BrowserRouter>
    );
  }
 
}

export default App;
