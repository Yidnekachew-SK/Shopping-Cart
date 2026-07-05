import '../Styles/homepage-styles.css';

function HomePage () {
	
	return (
		<div className="homePage">
			<nav>
				<p className="shopName">shop name</p>
				<div className="navigationLinks">
					<p className="links">Home</p>
					<p className="links">Shop</p>
					<img src="#" className="links"></img>
				</div>
			</nav>

			<section className="mainSection">
				<div className="messageContainer">
					<div className="messageDisplay">
						<p className="message">message</p>
						<p className="description">description</p>
					</div>
					<button className="shopButton">Shop Now</button>
				</div>
				<img src="#" className="shopImage"></img>
			</section>	
		</div>
	)
}

export default HomePage