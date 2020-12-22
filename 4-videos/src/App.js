import React from 'react'
import SearchBar from './components/SearchBar'
import youtube from './apis/youtube'

const App = () => {
  const onFormSubmit = searchText => {
    youtube.get('/search', {
      params: {
        q: searchText
      }
    })
  }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit} />
    </div>
  )
}

export default App
