import axios from 'axios';


const KEY = 'AIzaSyDnur-nF1q7Xwqei29yckkpEED9Ki2yRvU';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: KEY
	}
})

