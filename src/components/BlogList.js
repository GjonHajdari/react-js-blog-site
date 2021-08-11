import { Link } from 'react-router-dom';

const BlogList = ({blogs, title}) => {
	return (
		<div className="blog-list">
			<h2 className="title">{ title }</h2>
			{/* Looping through the entire array (similar to vue v-for) */}
			<div className="wrap">

				{blogs.map((blog) => (
					<Link to={`/blogs/${blog.id}`} className="blog-preview" key={blog.id}>
						<h2>{ blog.title }</h2>
						<p className="author">Written by <strong>{ blog.author }</strong></p>
					</Link>
				))}

			</div>
		</div>
	);
}
 
export default BlogList;	