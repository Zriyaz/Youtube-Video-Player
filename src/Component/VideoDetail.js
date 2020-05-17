import React from "react"
import "./VideoDetail.css"

const VideoDetail=({video})=>{

  if(!video){
    return <div>Loading...</div>
  }

  const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`

  return(
  <div>
   <div className="ui embed ">
   <iframe src={videoSrc} title="Video player" />
   </div>
    <div className="ui segment uicolor">
      <h4 className="ui header headcolor ">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
   </div>

    
  </div>
   )
}
export default VideoDetail