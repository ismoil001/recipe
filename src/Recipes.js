import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return (

        <div className="card">
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <ol>
                    {ingredients.map(ing => (
                        <li>{ing.text}</li>
                    ))}
                </ol>
                <p className="card-text">Calories: {calories}</p>
            </div>
        </div>

    )
};
export default Recipe
