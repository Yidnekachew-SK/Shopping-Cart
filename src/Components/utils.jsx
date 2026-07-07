function HandleIncrement (itemId, setCardCount, setItemsCount) {
	setCardCount(prev => (
		prev.map((card) => (card.id === itemId ? {...card, count: card.count + 1} : card))
	));

	setItemsCount(prev => (
		prev.map((card) => (card.id === itemId ? {...card, count: card.count + 1} : card))
	))
}

function HandleDecrement (itemId, setCardCount, setItemsCount) {
	setCardCount(prev => (
		prev.map((card) => (card.id === itemId ? 
			{...card, count: card.count > 1 ? card.count - 1 : 1} : card))
	))

	setItemsCount(prev => (
		prev.map((card) => (card.id === itemId ? 
			{...card, count: card.count > 1 ? card.count - 1 : 1} : card))
	))
}

function GetItemCount (allItems, itemId) {
	const item = allItems.find(i => i.id === itemId);
	return item.count;
}

export {HandleIncrement, HandleDecrement, GetItemCount}