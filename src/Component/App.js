import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../API/youtube"
import VideoList from "./VideoList"


const KEY="AIzaSyBPFHYUYJEyX0otOjP0yL2Kx60LCcD-kk4"

export default class App extends React.Component{

    state={videos:[]}
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
  
  render(){
    return(
      <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit}/>
      <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}