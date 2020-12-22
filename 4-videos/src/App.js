import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import youtube from './apis/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const onFormSubmit = async searchText => {
    const response = await youtube.get('/search', {
      params: {
        q: searchText
      }
    })
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  const onVideoSelect = video => {
    setSelectedVideo(video)
  }

  return (
    <div>
      <div className="ui container">
        <SearchBar onFormSubmit={onFormSubmit} />
      </div>
      <div className="ui grid mainDiv">
        <div className="ui row">
          <div className="videoDiv">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="listDiv">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
