import React,{Component} from 'react';
import Home from './HomeComponent';
import Header from'./Header';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comments';
import Menu from './Menu';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component{
  constructor (props)
  {
    super(props);
    this.state={
      dishes:DISHES,
      promotions:PROMOTIONS,
      leaders:LEADERS,
      comments:COMMENTS
    }
  }
  
  render()
  {
    const HomePage=()=>{
      return(          <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    />);
    };
    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    const AboutUs=()=><About leaders={this.state.leaders} />;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />}/>
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact}/>
          <Route path='/aboutus' component={AboutUs}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
 
}

export default Main;
