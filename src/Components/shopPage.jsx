import '../Styles/shop-page-styles.css';
import {useState, useEffect} from 'react';
import {Plus, Minus} from 'lucide-react';

function ShopPage ({cards, setCards}) {
	const [filterType, setFilterType] = useState('all');

	return (
		<>
		<FilteringOptions setFilter={setFilterType} />
		<div className="itemCardContainer">
			{cards.map((card) => (
				<ItemCards key={card.id} image={card.image} name={card.title} 
					price={card.price} />
			))}
		</div>
		</>
	)
}



function FilteringOptions ({setFilter}) {
	const HandleOptionClick = (type) => {
		if (type === 'all') {
			setFilter('all')
		} else if (type === 'men') {
			setFilter('men')
		} else if (type === 'women') {
			setFilter('women')
		} else if (type === 'jewel') {
			setFilter('jewel')
		} else if (type === 'electronic') {
			setFilter('electronic')
		}
	}

	return (
		<div className="filterOptions">
			<p onclick={() => HandleOptionClick('all')}>All</p>
			<p onclick={() => HandleOptionClick('men')}>Men's</p>
			<p onclick={() => HandleOptionClick('women')}>Women's</p>
			<p onclick={() => HandleOptionClick('jewel')}>Jewelry</p>
			<p onclick={() => HandleOptionClick('electronic')}>Electronics</p>
		</div>
	)
}

function ItemCards ({image, name, price}) {
	return (
		<div className="card">
			<img src={image}></img>
			<div>
				<p className="itemName">{name}</p>
				<p className="itemPrice">{price}</p>
				<div className="buttonContainer"> 
					<div className="itemCount">
						<Minus />
						<p>1</p>
						<Plus />
					</div>
					<button className="addCartButton">Add to Cart</button>
				</div>
				
			</div>
		</div>
	)
}

export default ShopPage