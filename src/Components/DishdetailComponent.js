import  React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component
{
    constructor(props)
    {
        super(props);
    }
    renderDish(dish)
{
    if(dish!=null)
    {
        return(
            <div  className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    }
    else{
        return (<div></div>);
    }
}
renderComments()
{
    if(this.props.selectedDish!=null&&this.props.selectedDish.comments!=null)
    {
        const commentsView=this.props.selectedDish.comments.map((comment)=>
        {
            return(
                <li>
                    <p> {comment.comment}</p>
                    <p>--<span>{comment.author}</span>,<span>{comment.date}</span></p>
                </li>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled ">
                    {commentsView}
                </ul>
            </div>
        )

    }
    else
    {
        return <div></div>;
    }

}
    render ()
    {
        return(
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments()}
            </div>
        )   
    }
}
export default Dishdetail;