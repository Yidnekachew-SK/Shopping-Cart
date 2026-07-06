import { useState, useEffect } from 'react';
import {ShoppingBag} from 'lucide-react';
import { Link, Outlet } from "react-router";

import FetchShopItems from './fetch-data.jsx';
import HomePage from './homepage.jsx';
import ShopPage from './shopPage.jsx';
import CartPage from './cartPage.jsx';
import '../Styles/homepage-styles.css';

function Controller () {
	const [shoppingCards, setShoppingCards] = useState([]);
	const [allcards, setAllCards] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [page, setPage] = useState({homepage: false, shopPage: false, cartPage: true});

	useEffect(() => {
		FetchShopItems(setShoppingCards, setAllCards);  
	}, [])

	return (
		<>
		<nav>
			<h2 className="shopName">shop name</h2>
			<div className="navigationLinks">
				<Link to="/" className="links">Home</Link>
          		<Link to="/shop" className="links">Shop</Link>
          		<Link to="/cart" className="links">
					<ShoppingBag size={30}/>
				</Link>
			</div>
		</nav>
		<div className="mainSection"> 
			<Outlet context={[shoppingCards, setShoppingCards, allcards, cartItems, setCartItems]} />
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