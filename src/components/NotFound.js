import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>Sorry</h1>
			<p>The page you're looking for does not exist or has been deleted</p>

			<Link to="/">Go to home page</Link>
		</div>
	);
}
 
export default NotFound;