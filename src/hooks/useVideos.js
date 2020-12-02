import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

//creating custom hook to handle fetching the video data
const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	//fetching new data whenever a new search term is submitted
	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	//making API request with the user inputted search term as a param
	//setting the videos piece of state to the appropriate response data
	const search = async term => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});
		setVideos(response.data.items);
	};

	return [videos, search];

};

export default useVideos;