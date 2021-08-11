import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	// Executes code when component is first rendered
	useEffect(() => {
		const abortCont = new AbortController();
		// Fetching data
		fetch(url, { signal: abortCont.signal })
			.then(res => { 
				if (!res.ok) throw Error('Could not fetch the data for that resource'); 
				return res.json(); 
			})
			.then(data => {
				setData(data);
				setIsLoading(false);
				setError(null);
			})
			.catch(err => {
				if (err.name === 'AbortError') {
					console.log('fetch aborted')
				} else {
					setIsLoading(false);	
					setError(err.message);
				}
			});

		return () => abortCont.abort();
	}, [url]);

	return { data, isLoading, error };
}

export default useFetch;