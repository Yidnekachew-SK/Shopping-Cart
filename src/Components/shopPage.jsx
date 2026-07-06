import '../Styles/shop-page-styles.css';
import {useState, useEffect} from 'react';
import { useOutletContext } from "react-router";
import {Plus, Minus} from 'lucide-react';
import {HandleIncrement, HandleDecrement} from './utils.jsx';

function ShopPage () {
	const [shoppingCards, setShoppingCards, allcards, cartItems, setCartItems] = useOutletContext();
	const [cartId, setCartId] = useState([]);

	return (
		<>
		<FilteringOptions setCards={setShoppingCards} oldCards={allcards} />
		<div className="itemCardContainer">
			{shoppingCards.map((card) => (
				<ItemCards key={card.id} id={card.id} image={card.image} name={card.title} 
					price={card.price} count={card.count} setCardCount={setShoppingCards} setCart={setCartItems}
					cartId={cartId} setCartId={setCartId} allItems={allcards} />
			))}
		</div>
		</>
	)
}


function FilteringOptions ({setFilter, setCards, oldCards}) {
	const HandleOptionClick = (type) => {
		if (type === 'all') {
			setFilter('all');
			setCards(oldCards);
		} else if (type === 'men') {
			setFilter('men');
			setCards(oldCards.filter(card => card.category === 'men\'s clothing'))
		} else if (type === 'women') {
			setFilter('women');
			setCards(oldCards.filter(card => card.category === `women's clothing`))
		} else if (type === 'jewel') {
			setFilter('jewel');
			setCards(oldCards.filter(card => card.category === 'jewelery'))
		} else if (type === 'electronic') {
			setFilter('electronic');
			setCards(oldCards.filter(card => card.category === `electronics`))
		}
	}

	return (
		<div className="filterOptions">
			<p onClick={() => HandleOptionClick('all')}>All</p>
			<p onClick={() => HandleOptionClick('men')}>Men's</p>
			<p onClick={() => HandleOptionClick('women')}>Women's</p>
			<p onClick={() => HandleOptionClick('jewel')}>Jewelry</p>
			<p onClick={() => HandleOptionClick('electronic')}>Electronics</p>
		</div>
	)
}


function ItemCards ({id, image, name, price, count, setCardCount, setCart, cartId, setCartId, allItems}) {
	

	const HandleAddCart = (itemId) => {
		setCartId(prevId => {
			if(prevId.includes(itemId)) {
				return prevId
			} else {
				const cartItemsId = [...prevId, itemId];
				setCart(allItems.filter(item => (cartItemsId.includes(item.id))));
				return cartItemsId;
			}
		})
	}

	return (
		<div className="card">
			<img src={image}></img>
			<div>
				<p className="itemName">{name}</p>
				<p className="itemPrice">{price}</p>
				<div className="buttonContainer"> 
					<div className="itemCountContainer">
						<Minus 
							onClick={() => HandleDecrement(id, setCardCount)}
						/>
						<p className="itemCount">{count}</p>
						<Plus 
							onClick={() => HandleIncrement(id, setCardCount)}
						/>
					</div>
					<button className="addCartButton" onClick={() => HandleAddCart(id)}>Add to Cart</button>
				</div>
				
			</div>
		</div>
	)
}

export default ShopPage