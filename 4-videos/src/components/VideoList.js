import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    return (
        <div className="ui relaxed divided list">
            {
                videos.map(video => (
                    <VideoItem
                        key={video.id.videoId}
                        video={video}
                        selectedVideo={onVideoSelect}
                    />
                ))
            }
        </div>
    )
}

export default VideoList
