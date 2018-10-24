import React, { Component } from 'react';


import Performer from './Peformer.js';


class PerformerList extends Component {
 constructor(props) {
  super(props);
  this.state={};
 }

 render() {
  const performers = this.props.performers;
  return (
    <div>
        <h1>List of Performers</h1>
        <div className='performer_list'>
            {performers.map((performer,i) => (
            <div>
                <Performer id={performer.id} name={performer.name} url={performer.hero_image_url} category={performer.category_group} key={i}/>
            </div>
            ))}
        </div>
    </div>
  )
 }
}


export default PerformerList;