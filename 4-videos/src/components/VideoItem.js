import React from 'react'

const VideoItem = ({ title, video, image }) => {
    return (
        <div className="item">
            <p>{title}</p>
            <img src={image} alt={title}/>
            {/* <video src={`https://youtube.com/watch?v=${video}`}></video> */}
        </div>
    )
}

export default VideoItem
