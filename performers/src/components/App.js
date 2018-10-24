import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

import PerformerList from './PerformerList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      performers:[],
    };
    this.getPerformersInFo = this.getPerformersInFo.bind(this);
    this.filterPerformers = this.filterPerformers.bind(this);
  }

  componentDidMount() {
    this.getPerformersInFo();
  }


  getPerformersInFo() {
    axios.get('https://mobile-staging.gametime.co/v1/performers')
    .then(res => {
      let performers = res.data.performers
      // let performers = info.map((performer,i)=> {
      //    'id': performer[id],
      //    'name': performer[name],
      //    'hero_image_url': performer[hero_image_url],
      //    'category_group': performer[category_group]
      // })

      // wanted to get only what I wanted from API but ran into errors, going to come back
      this.setState({
        performers
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  filterPerformers(category) {
    //function to give to drop down menu to map through array of performers and return only those within that category
  }

  render() {
    const performers = this.state.performers;
    return (
      <div id='App' className='container'>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" >All</a>
          <a className="dropdown-item" >Sports</a>
          <a className="dropdown-item" >Music</a>
          <a className="dropdown-item" >Theater</a>
        </div>
      </div>
        {this.state.performers.length === 0 ? 
          <img style={{height: '50px', width: '50px'}} src='https://media.giphy.com/media/5AtXMjjrTMwvK/giphy.gif'alt='loading'></img> : 
          <PerformerList performers={performers}/>}
      </div>
    )
  }
}


export default App;