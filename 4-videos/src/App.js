import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import youtube from './apis/youtube'
import VideoList from './components/VideoList'

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
  }

  const onVideoSelect = video => {
    setSelectedVideo(video)
  }

  console.log(selectedVideo)

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  )
}

export default App
