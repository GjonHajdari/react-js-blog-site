import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const [submited, setSubmited] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsLoading(true);

		// Sending the data over to our db.json database
		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			// Converting our data to JSON
			body: JSON.stringify(blog)
		}).then(() => {
			setSubmited(true);
			setIsLoading(false);	
			// setTimeout(() => setSubmited(false), 600);
			history.push('/')
		});

	}

	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form onSubmit={handleSubmit} className={`${submited ? "blury" : ""}`}>
				<input 
					type="text"
					placeholder="Blog title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>

				<textarea
					placeholder="Body"
					value={body}
					onChange={(e) => setBody(e.target.value)}
					required
				></textarea>

				<label>Author</label>
				<select
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				>
					<option value="mario">Author 1</option>
					<option value="yoshi">Author 2</option>
					<option value="luigi">Author 3</option>
				</select>

				{ !isLoading && <button className="button">Add blog</button> }
				{ isLoading && <button className="button">Adding blog...</button> }

			</form>

			{ submited && (
				<div className="success">
					<span>Submitted succesfully</span>
				</div>
			)}

		</div>
	);
}
 
export default Create;