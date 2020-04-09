import React from 'react';
import style from './recipe.module.css'
 
const Recipe = ({ title, calories, image, servings, ingredients }) => {
	return (
		<div className={style.recipe}>
			<h1>{title}</h1>
			<p>{Math.floor(calories)} Calories</p>
			<img className={style.image} src={image} alt="" />
			<p>Servings: {servings}</p>
			<ul>
				{ingredients.map((ingredient) => (
					<li>
						{ingredient.text}, {ingredient.weight} grams.{' '}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Recipe;
