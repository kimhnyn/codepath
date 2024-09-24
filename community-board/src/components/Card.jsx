import React from "react";

const Card = (props) => {
    return (
        <div>
            <div className='cardContainer'>
                <div className='img-contain'>
                    <img className='pfImg' src={props.img} />
                </div>
                <h2>{props.name}</h2>
                <h3>{props.brand}</h3>
                <button><a href={props.link} target='_blank'>View Notes</a></button>
            </div>
        </div>
    )
}

export default Card;