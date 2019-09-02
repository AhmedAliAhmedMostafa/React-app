import React,{Component} from 'react';
import Home from './HomeComponent';
import Header from'./Header';
import {DISHES} from '../shared/dishes';
import Menu from './Menu';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component{
  constructor (props)
  {
    super(props);
    this.state={
      dishes:DISHES
    }
  }

  render()
  {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
 
}

export default Main;
