import useFetch from '../useFetch';
import BlogList from './BlogList';

const Home = () => {
	// Testing API
	const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

	return ( 
		<div className="home">
			{ error && <div className="error">{ error }</div> }
			{ isLoading && <div className="loading">Loading...</div> }
			{ blogs && <BlogList blogs={blogs} title="All blogs" /> }
			
			{/* Filtered blog list */}
			{/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" /> */}
		</div>
	);
}
	
export default Home;