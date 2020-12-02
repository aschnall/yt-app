import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
	
	//Displaying thumbnail and title of individual sidebar videos
	//Will change the selected video piece of state to the video the user clicks on in the list of sidebar videos
	return (
		<div onClick={() => onVideoSelect(video)} className="item video-item">
			<img 
				alt={video.snippet.title} 
				className="ui image" 
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;