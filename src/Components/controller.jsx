import { useState, useEffect } from 'react';
import {ShoppingBag} from 'lucide-react';
import FetchShopItems from './fetch-data.jsx';
import HomePage from './homepage.jsx';
import ShopPage from './shopPage.jsx';
import '../Styles/homepage-styles.css';

function Controller () {
	const [shoppingCards, setShoppingCards] = useState([]);
	const [allcards, setAllCards] = useState([]);
	const [page, setPage] = useState({homepage: true, shopPage: false, cartPage: false});

	useEffect(() => {
		FetchShopItems(setShoppingCards, setAllCards);  
	}, [])

	return (
		<>
		<nav>
			<h2 className="shopName">shop name</h2>
			<div className="navigationLinks">
				<p className="links">Home</p>
				<p className="links">Shop</p>
				<ShoppingBag size={30}/>
			</div>
		</nav>
		<div className="mainSection"> 
			{page.homepage && <HomePage />}
			{page.shopPage && <ShopPage cards={shoppingCards} setCards={setShoppingCards} 
				originalCards={allcards} />}
		</div>
		
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