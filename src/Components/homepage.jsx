import '../Styles/homepage-styles.css';
import { Link } from "react-router"

function HomePage () {
	
	return (
		<div className="homePage">
			<div className="messageContainer">
				<div className="messageDisplay">
					<p className="message">Welcome to NovaMart <br></br> Your one-stop destination for everything you love.</p>
					<p className="description">Discover trending products, exclusive deals, and a shopping experience designed just for you.  
						Start exploring today and make every cart count!</p>
				</div>
				<Link to="/shop">
					<button className="shopButton">Shop Now</button>
				</Link>
			</div>
			<img src="./src/assets/sale-image.jpg" alt="home page image of shopping" className="shopImage"></img>
		</div>
	)
}

export default HomePage