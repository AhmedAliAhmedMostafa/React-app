import React,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import {DISHES} from '../shared/dishes';
import Menu from './Menu';
import Dishdetail from './DishdetailComponent';


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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>
              Ristorante Confusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={dish=>{this.onDishSelect(dish);}}/>
        <Dishdetail selectedDish={this.state.selectedDish} />
      </div>
    );
  }
 
}

export default Main;