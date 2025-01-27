import  React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

  function RenderDish({dish})
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
function RenderComments({comments})
{

        const commentsView=comments.map((comment)=>
        {
            return(
                <li>
                    <p> {comment.comment}</p>
                    <p>--<span>{comment.author}</span>,<span>{comment.date}</span></p>
                </li>
            )
        });
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled ">
                    {commentsView}
                </ul>
            </div>);

}
function Dishdetail(props)
{
    return(
        <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
        <div className="row">
            
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments}/>
        </div>
        </div>
    )
}

        

export default Dishdetail;