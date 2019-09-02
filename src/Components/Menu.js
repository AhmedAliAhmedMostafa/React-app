import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';



    function MenuItem ({dish,onClick})
    {
        return(
            <Card 
            onClick={() => onClick(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        );

    }
    function Menu (props)
    {
        const menu=props.dishes.map((dish)=>
        {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <MenuItem dish={dish} />
              </div>
            );
        }) ;
        return(
            <div className="container">
                <div className="row"> 
                   
                        {menu}
                </div>


            </div>
        );
    }
  
export default Menu ;
