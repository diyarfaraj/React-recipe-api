import React from 'react';

const Recipe = ({ title, calories, image, servings, ingredients }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{Math.floor(calories)} Calories</p>
			<img src={image} alt="" />
			<p>Servings: {servings}</p>
			<ol>
				{ingredients.map((ingredient) => (
					<li>
						{ingredient.text}, {ingredient.weight} grams.{' '}
					</li>
				))}
			</ol>
		</div>
	);
};

export default Recipe;
