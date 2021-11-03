import React from "react";
import "./style.css";

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: props.links };
  }
  
  remove(item) {
    let links = this.state.links;
    this.setState((state) => ({
      links: state.links.filter(link => link !== item)
    }))
  }
  
  render() {
    return (<div> { this.state.links.map((item, index) => (<div className="image" key={index}>
                      <img src={item} />
                      <button className="remove" 
                        onClick={ this.remove.bind(this, item) }>X</button></div>)) 
                 } </div>);
  }
}
