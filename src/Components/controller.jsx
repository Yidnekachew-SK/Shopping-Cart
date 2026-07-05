import { useState, useEffect } from 'react';
import Fetch from './fetch-data.jsx';
import HomePage from './homepage.jsx';
import '../Styles/homepage-styles.css';

function Controller () {
	const [shoppingCards, setShoppingCards] = useState([]);
	const [page, setPage] = useState({homepage: true, shopPage: false, cartPage: false});

	useEffect(() => {
		Fetch(setShoppingCards);   
	}, [])

	return (
		<>
		{page.homepage && <HomePage />}

		<footer>
			<a href="https://github.com/Yidnekachew-SK/Shopping-Cart">
				<p>Yidnekachew-SK</p>
				<img src="./src/assets/github.svg"></img>
			</a>
		</footer>
		</>
	)
}

export default Controller