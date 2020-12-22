import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
    return (
        <div className="ui relaxed divided list">
            {
                videos.map(video => (
                    <VideoItem
                        key={video.id.videoId}
                        title={video.snippet.title}
                        video={video.id.videoId}
                        image={video.snippet.thumbnails.medium.url}
                    />
                ))
            }
        </div>
    )
}

export default VideoList
