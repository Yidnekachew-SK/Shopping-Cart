import '../Styles/homepage-styles.css';

function HomePage () {
	
	return (
		<div className="homePage">
			<div className="messageContainer">
				<div className="messageDisplay">
					<p className="message">message</p>
					<p className="description">description</p>
				</div>
				<button className="shopButton">Shop Now</button>
			</div>
			<img src="#" className="shopImage"></img>
		</div>
	)
}

export default HomePage