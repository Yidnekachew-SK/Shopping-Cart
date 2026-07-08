import '../Styles/shop-page-styles.css';
import {useState, useEffect} from 'react';
import { useOutletContext } from "react-router";
import {Plus, Minus} from 'lucide-react';
import {HandleIncrement, HandleDecrement, GetItemCount} from './utils.jsx';

function ShopPage () {
	const [shoppingCards, setShoppingCards, allcards, setAllCards, cartItems, setCartItems] = useOutletContext();
	const [cartId, setCartId] = useState([]);

	return (
		<>
		<FilteringOptions setCards={setShoppingCards} oldCards={allcards} />
		<div className="itemCardContainer">
			{shoppingCards.map((card) => (
				<ItemCards key={card.id} id={card.id} image={card.image} name={card.title} 
					price={card.price} count={GetItemCount(allcards, card.id)} setCardCount={setShoppingCards} setItemsCount={setAllCards}
					setCart={setCartItems} setCartId={setCartId} allItems={allcards} />
			))}
		</div>
		</>
	)
}


function FilteringOptions ({setCards, oldCards}) {
	const HandleOptionClick = (type) => {
		if (type === 'all') {
			setCards(oldCards);
		} else if (type === 'men') {
			setCards(oldCards.filter(card => card.category === 'men\'s clothing'))
		} else if (type === 'women') {
			setCards(oldCards.filter(card => card.category === `women's clothing`))
		} else if (type === 'jewel') {
			setCards(oldCards.filter(card => card.category === 'jewelery'))
		} else if (type === 'electronic') {
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


function ItemCards ({id, image, name, price, count, setCardCount, setItemsCount, setCart, setCartId, allItems}) {
	

	const HandleAddCart = (itemId) => {
		setCartId(prevId => {
			if(prevId.includes(itemId)) {
				return prevId
			}
			return [...prevId, itemId];
		})

		setCart(prev => {
			if (prev.find(item => item.id === itemId)) {
				return prev;
			}
			const newItem = allItems.find(item => item.id === itemId);
    		return [...prev, newItem];
		});
	}

	return (
		<div className="card">
			<img src={image}></img>
			<div>
				<p className="itemName">{name}</p>
				<p className="itemPrice">{`$${price}`}</p>
				<div className="buttonContainer"> 
					<div className="itemCountContainer">
						<Minus 
							onClick={() => HandleDecrement(id, setCardCount, setItemsCount)}
							data-testid="decreaseCount"
						/>
						<p className="itemCount">{count}</p>
						<Plus 
							onClick={() => HandleIncrement(id, setCardCount, setItemsCount)}
							data-testid="increaseCount"
						/>
					</div>
					<button className="addCartButton" onClick={() => HandleAddCart(id)}>Add to Cart</button>
				</div>
				
			</div>
		</div>
	)
}

export default ShopPage