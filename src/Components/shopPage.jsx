import '../Styles/shop-page-styles.css';
import {useState, useEffect} from 'react';
import {Plus, Minus} from 'lucide-react';

function ShopPage ({cards, setCards, originalCards}) {
	const [filterType, setFilterType] = useState('all');

	return (
		<>
		<FilteringOptions setFilter={setFilterType} setCards={setCards} oldCards={originalCards} />
		<div className="itemCardContainer">
			{cards.map((card) => (
				<ItemCards key={card.id} id={card.id} image={card.image} name={card.title} 
					price={card.price} count={card.count} setCardCount={setCards} />
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

function ItemCards ({id, image, name, price, count, setCardCount}) {
	const HandleIncrement = (itemId) => {
		setCardCount(prev => (
			prev.map((card) => (card.id === itemId ? {...card, count: card.count + 1} : card))
		))
	}

	const HandleDecrement = (itemId) => {
		setCardCount(prev => (
			prev.map((card) => (card.id === itemId ? 
				{...card, count: card.count > 1 ? card.count - 1 : 1} : card))
		))
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
							onClick={() => HandleDecrement(id)}
						/>
						<p className="itemCount">{count}</p>
						<Plus 
							onClick={() => HandleIncrement(id)}
						/>
					</div>
					<button className="addCartButton">Add to Cart</button>
				</div>
				
			</div>
		</div>
	)
}

export default ShopPage