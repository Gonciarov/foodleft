import React from 'react';
import './App.css';
import style from './Recipe.module.css';

const Recipe = ({title, ingredients, image}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol className={style.ingredients}>
                {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <img className={style.image} src={image} />
        </div>
    );
};


    
    
                        

export default Recipe;