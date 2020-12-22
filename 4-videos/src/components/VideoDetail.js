import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) return null

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    // console.log(video.snippet.channelTitle)
    // console.log(`https://www.youtube.com/channel/${video.snippet.channelId}`)
    // console.log(video.snippet.liveBroadcastContent)
    // console.log(video.snippet.publishedAt)q

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title={video.snippet.title} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
