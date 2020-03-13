import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
	const APP_ID = '0abb5d52';
	const APP_KEY = '309694251b3825b7d3a2509c161bc550';

	const [ recipes, setRecipes ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('');

	useEffect(
		() => {
			getRecipes();
		},
		[ query ]
	);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();

		console.log(data.hits);
		setRecipes(data.hits);
	};

	const readInput = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();

		setQuery(search);
		setSearch('');
	};

	return (
		<div className="App">
			<form action="" className="search-form" onSubmit={getSearch}>
				<input onChange={readInput} className="search-bar" type="text" value={search} />
				<button className="search-btn" type="submit">
					Search
				</button>
			</form>

			{recipes.map((recipe) => (
				<Recipe
					key={recipe.recipe.uri}
					title={recipe.recipe.label}
					calories={recipe.recipe.calories}
					image={recipe.recipe.image}
					servings={recipe.recipe.yield}
					ingredients={recipe.recipe.ingredients}
				/>
			))}
		</div>
	);
};

export default App;
