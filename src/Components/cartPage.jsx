import '../Styles/cart-page-styles.css';
import '../Styles/shop-page-styles.css';
import { useOutletContext } from "react-router";
import {useState, useEffect} from 'react';
import {Plus, Minus, X} from 'lucide-react';
import {HandleIncrement, HandleDecrement, GetItemCount} from './utils.jsx';

function CartPage () {
	const [shoppingCards, setShoppingCards, allcards, setAllCards, cartItems, setCartItems] = useOutletContext();
	const [price, setPrice] = useState({subtotal: 0, VAT: 0});

	return (
		<div className="cartpage">
			<h2>Cart Items</h2>
			<div className="cartSection">
				<div className="cartItemsContainer">
					{cartItems.map(item => (
						<CartItem key={item.id} id={item.id} image={item.image} title={item.title} 
							description={item.description} price={item.price} count={GetItemCount(allcards, item.id)}
							setCardCount={setCartItems} setAllCards={setAllCards} setCartItems={setCartItems} />
					))}
				</div>

				<div className="OrderSummaryContainer">
					<PriceDetailDisplayer cartItems={cartItems} price={price} setPrice={setPrice} />
				</div>
			</div>
		</div>
	)
}

function CartItem ({id, image, title, description, price, count, setCardCount, setAllCards, setCartItems}) {
	const HandleCartDelete = (itemId) => {
		setCartItems(prev => prev.filter(item => item.id != itemId));
	}

	return (
		<div className="itemCard">
			<div className="cardSection">
				<img src={image}></img>
				<div className="itemInfoDisplay">
					<div className="itemInfo">
						<p className="cartItemName">{title}</p>
						<p className="cartItemDescription">{description}</p>
					</div>
				

					<div className="priceDisplay">
						<p>{`$${price}`}</p>
						<div className="itemCountContainer">
							<Minus 
								onClick={() => HandleDecrement(id, setCardCount, setAllCards)}
								data-testid="cart-decreaseCount"
							/>
							<p className="itemCount">{count}</p>
							<Plus 
								onClick={() => HandleIncrement(id, setCardCount, setAllCards)}
								data-testid="cart-increaseCount"
							/>
						</div>
					</div>
				</div>
			</div>
			<X 
				onClick={() => HandleCartDelete(id)} 
				data-testid="deleteIcon"
			/>

		</div>
	)
}

function PriceDetailDisplayer ({cartItems, price, setPrice}) {
	useEffect(() => {
		let subTotal = 0;
		for (let i = 0; i < cartItems.length; i++) {
			subTotal += (cartItems[i].price * cartItems[i].count);
		}
		setPrice({subtotal: subTotal, VAT: Math.round((subTotal * 0.15) * 100) / 100});
	}, [cartItems, setPrice])

	const TotalPrice = (price) => price.subtotal + price.VAT;

	return (
		<>
		<div className="orderSummaryInfo">
			<h3>Order summary</h3>
			<div className="orderPriceDisplay">
				<p><span>Subtotal: </span><span className="prices">{`$${price.subtotal}`}</span> </p>
				<p><span>Shipping fee: </span><span className="prices">$0</span> </p>
				<p><span>VAT: </span><span className="prices">{`$${price.VAT}`}</span> </p>
				<p><span>Total Price: </span><span className="prices">${TotalPrice(price)}</span> </p>
			</div>
		</div>
		<button className="checkoutButton">CheckOut</button>
		</>
	)
}

export default CartPage