import React from 'react';

const Recipe = ({ title, calories, image, servings }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{Math.floor(calories)} Calories</p>
			<img src={image} alt="" />
			<p>Servings: {servings}</p>
		</div>
	);
};

export default Recipe;
