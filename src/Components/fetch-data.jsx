async function FetchShopItems (setCard, setAllCards) {
	try {
		const response = await fetch('https://fakestoreapi.com/products');
		const data = await response.json();
		const cards = data.map((card) => ({
		    title: card.title,
		    price: card.price,
		    description: card.description,
		    category: card.category,
		    image: card.image,
		    id: card.id,
		    count: 1
		}));


		setCard(cards);
		setAllCards(cards);


	} catch (error) {
		console.log(error);
	}
}

export default FetchShopItems
