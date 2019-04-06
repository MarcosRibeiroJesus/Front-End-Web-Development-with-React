import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';



function RenderComments({ comments }) {
    const coments = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                    {new Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                }).format(new Date(comment.date))}
                </p>
            </li>
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {coments}
            </ul>

        </div>
    )
}

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}


const DishDetail = (props) => {
    if (props.dish == null) {
        return (<div></div>)
    }
    const dishId = <RenderDish dish={props.dish} />
    const commentDish = <RenderComments comments={props.dish.comments} />
    return (
        <div className='row'>
            {dishId}
            {commentDish}
        </div>
    )

}

export default DishDetail
