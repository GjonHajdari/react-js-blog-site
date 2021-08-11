import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
	const { id } = useParams();
	const	{ data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
	const history = useHistory();

	const handleClick = () => {
		fetch('http://localhost:8000/blogs/' + blog.id, {
			method: 'DELETE'
		}).then(() => {
			history.push('/')
		});
	}

	return (
		<div className="blog-details">
			{ isLoading && <div className="loading">Loading...</div> }
			{ error && <div className="error">{ error }</div> }
			{ blog && (
				<article>
					<h2>{ blog.title }</h2>
					<hr />
					<div className="body">{ blog.body }</div>

					<div className="level">
						<p className="author">Written by <span>{ blog.author }</span></p>
						<button className="button danger" onClick={handleClick}>Delete blog</button>
					</div>
					
				</article>
			) }
		</div>
	);
}
 
export default BlogDetails;