import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../API/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

const KEY="AIzaSyBPFHYUYJEyX0otOjP0yL2Kx60LCcD-kk4"

export default class App extends React.Component{

    state={videos:[],selectedVideo:null}
onTermSubmit=async term=>{
  const response= await youtube.get('/search',{
      params:{
        q:term,
        part: 'snippet',
        maxResults: 50,
        type: 'video',
        key: KEY
      }
    })
    this.setState({videos:response.data.items})
    console.log(response)
  }
  onVideoSelect=(video)=>{
    this.setState({selectedVideo:video})
  }
  
  render(){
    return(
      <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    )
  }
}