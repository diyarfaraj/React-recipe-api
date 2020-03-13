import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
	const APP_ID = '0abb5d52';
	const APP_KEY = '309694251b3825b7d3a2509c161bc550';

	const [ recipes, setRecipes ] = useState([]);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();

		console.log(data.hits);
		setRecipes(data.hits);
	};

	return (
		<div className="App">
			<form action="" className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-btn" type="submit">
					Search
				</button>
			</form>

			{recipes.map((recipe) => (
				<Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
			))}
		</div>
	);
};

export default App;
