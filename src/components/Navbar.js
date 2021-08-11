import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [isClosed, setIsClosed] = useState(true);

	const closeNav = () => setIsClosed(true);

	return ( 
		<nav className="navbar">
			<h1>Blog website</h1>
			
			<button id="burger-menu" onClick={() => setIsClosed(!isClosed)}>
				<i className="fas fa-bars"></i>
			</button>

			<div className={`links ${!isClosed ? 'show' : ''}`}>
				<Link to="/">Home</Link>
				<Link to="/create" className="button">New blog</Link>
			</div>
		</nav>
	);
}
 
export default Navbar;