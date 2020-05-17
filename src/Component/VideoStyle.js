import React from "react"
import "./VideoStyle.css"

class VideoStyle extends React.Component{
  render(){
    return(
    <div class = "main"> 
      <marquee class="marq" bgcolor = "pink" direction = "left" loop="" > 
        <div class="geek1">Youtube</div> 
        <div class="geek2">Abdul Riyaz</div> 
      </marquee> 
    </div> 
    )
  }
}
export default VideoStyle