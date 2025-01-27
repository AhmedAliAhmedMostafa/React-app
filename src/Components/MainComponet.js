import React,{Component} from 'react';
import Home from './HomeComponent';
import Header from'./Header';
import Menu from './Menu';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component{

  
  render()
  {
    const HomePage=()=>{
      return(          <Home 
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
    />);
    };
    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    const AboutUs=()=><About leaders={this.props.leaders} />;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} />}/>
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

export default withRouter(connect(mapStateToProps)(Main));
