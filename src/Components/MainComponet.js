import React,{Component} from 'react';
import Header from'./Header';
import {DISHES} from '../shared/dishes';
import Menu from './Menu';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';


class Main extends Component{
  constructor (props)
  {
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    }
  }
  onDishSelect (dish)
  {
       this.setState({selectedDish:dish});
  }
  render()
  {
    return (
      <div className="App">
        <Header />
        <Menu dishes={this.state.dishes} onClick={dish=>{this.onDishSelect(dish);}}/>
        <Dishdetail selectedDish={this.state.selectedDish} />
        <Footer />
      </div>
    );
  }
 
}

export default Main;
