import axios from "axios";

const API_KEY = 'AIzaSyDYaiBK0YZoJ-2z3KJYohK3U13hTwKTdCY';
     
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: API_KEY
  }
});