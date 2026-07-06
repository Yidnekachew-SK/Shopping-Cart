function HandleIncrement (itemId, setCardCount) {
	setCardCount(prev => (
		prev.map((card) => (card.id === itemId ? {...card, count: card.count + 1} : card))
	))
}

function HandleDecrement (itemId, setCardCount) {
	setCardCount(prev => (
		prev.map((card) => (card.id === itemId ? 
			{...card, count: card.count > 1 ? card.count - 1 : 1} : card))
	))
}

export {HandleIncrement, HandleDecrement}