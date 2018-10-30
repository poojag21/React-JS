import React from 'react';
import VideolistItems from './video_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
  	return < VideolistItems 
  	onVideoSelect = {props.onVideoSelect}
  	key = {video.etag} 
  	video = {video} />
  });

  return (
    <ul className = "col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
