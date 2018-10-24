import React, { Component } from 'react';


class Performer extends Component {
 constructor(props) {
  super(props);
  this.state={};
 }

 render() {
  return (
   <div className='performer_list'>
    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={this.props.url} alt={`url:${this.props.name}`}/>
        <div className="card-body">
        <h5 className="card-title">{this.props.name}</h5>
        <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus vitae sapien non dictum. Mauris mollis augue eu nisl eleifend, nec vulputate metus sodales. Praesent tempor a mauris quis tempor. 
        </p>
        <a className="btn btn-primary">More Details</a>
    </div>
    </div>
  </div>
  )
 }
}


export default Performer;