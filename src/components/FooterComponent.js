import Moment from 'moment';

const FooterComponent = () => {
	const date = Moment().format('yyyy');
	
	return (
		<footer>
			<div className="item">Made by Gjoni</div>
			<div className="item">
				Copyright &copy; { date }. All rights reserved (not really)
			</div>
		</footer>
	);
}
 
export default FooterComponent;