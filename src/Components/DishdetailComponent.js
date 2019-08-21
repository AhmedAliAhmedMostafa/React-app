import  React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


  function RenderDish({selectedDish})
{
    if(selectedDish!=null)
    {
        return(
            <div  className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                  <CardTitle>{selectedDish.name}</CardTitle>
                  <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    }
    else{
        return (<div></div>);
    }
}
function RenderComments({selectedDish})
{
    if(selectedDish!=null&&selectedDish.comments!=null)
    {
        const commentsView=selectedDish.comments.map((comment)=>
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
function Dishdetail(probs)
{
    return(
        <div className="row">
            <RenderDish selectedDish={probs.selectedDish} />
            <RenderComments selectedDish={probs.selectedDish}/>
        </div>
    )
}

        

export default Dishdetail;