import React from "react"
import VideoStyle from "./VideoStyle"

class SearchBar extends React.Component{
  state={term: ''}

  onFormSubmit=(event)=>{
    event.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }
  onInputChange=(event)=>{
    this.setState({term:event.target.value})
  }
 render(){
   return(
     <div>
      <VideoStyle/>
       <div className="search-bar ui segment">
        <form onSubmit ={this.onFormSubmit}className="ui form">
         <div className="ui icon input ">
         <i className="search icon"></i>
          <input type="text" 
          value={this.state.term}
          placeholder="Search" 
          onChange={this.onInputChange}
          />
         </div>
        </form>
       </div>
     </div>
   )
 }
}
export default SearchBar

