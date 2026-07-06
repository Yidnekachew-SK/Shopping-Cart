import '../Styles/cart-page-styles.css';
import '../Styles/shop-page-styles.css';
import { useOutletContext } from "react-router";
import {Plus, Minus, X} from 'lucide-react';
import {HandleIncrement, HandleDecrement} from './utils.jsx';

function CartPage () {
	const [shoppingCards, setShoppingCards, allcards, cartItems, setCartItems] = useOutletContext();

	return (
		<div className="cartpage">
			<h2>Cart Items</h2>
			<div className="cartSection">
				<div className="cartItemsContainer">
					{cartItems.map(item => (
						<CartItem key={item.id} id={item.id} image={item.image} title={item.title} 
							description={item.description} price={item.price} count={item.count}
							setCardCount={setCartItems} />
					))}
				</div>

				<div className="OrderSummaryContainer">
					<h3>Order summary</h3>
					<div className="orderPriceDisplay">
						<p><span>Subtotal: </span> <span className="prices">0</span> </p>
						<p><span>Shipping fee: </span> <span className="prices">0</span> </p>
						<p><span>VAT: </span> <span className="prices">0</span> </p>
						<p><span>Total Price: </span> <span className="prices">0</span> </p>
					</div>
					<button className="checkoutButton">CheckOut</button>
				</div>
			</div>
		</div>
	)
}

function CartItem ({id, image, title, description, price, count, setCardCount}) {
	
	return (
		<div className="itemCard">
			<div className="cardSection">
				<div className="itemInfoDisplay">
					<img src={image}></img>
					<div className="itemInfo">
						<p>{title}</p>
						<p>{description}</p>
					</div>
				</div>

				<div className="priceDisplay">
					<p>{price}</p>
					<div className="itemCountContainer">
						<Minus 
							onClick={() => HandleDecrement(id, setCardCount)}
						/>
						<p className="itemCount">{count}</p>
						<Plus 
							onClick={() => HandleIncrement(id, setCardCount)}
						/>
					</div>
				</div>
			</div>
			<X />
		</div>
	)
}

export default CartPage