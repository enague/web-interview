import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import '../App.css';

import PerformerList from './PerformerList.js';

const options = [
  { value: 'all', label: 'All'},
  { value: 'sport', label: 'Sports'},
  { value: 'concert', label: 'Music'},
  { value: 'theater', label: 'Theater'}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      performers:[],
      selectedOption: null,
    };
    this.getPerformersInFo = this.getPerformersInFo.bind(this);
    this.filterPerformers = this.filterPerformers.bind(this);
  }

  componentDidMount() {
    this.getPerformersInFo('all');
  }


  getPerformersInFo(selectedOption) {
    this.setState({ performers: [] })

    axios.get('https://mobile-staging.gametime.co/v1/performers')
    .then(res => {
      let performers = res.data.performers
      let info = performers.map((performer,i)=> {
        let obj = {};
        obj['id'] = performer['id'];
        obj['name'] = performer['name'];
        obj['hero_image_url'] = performer['hero_image_url']
        obj['category_group'] = performer['category_group']
        return obj;
      })


      if(selectedOption === 'all') {
        this.setState({ performers: info})
      } else if (selectedOption === 'sport') {
        let sports = info.filter(performer => performer.category_group === 'sport')
        this.setState({ performers: sports})
      } else if (selectedOption === 'concert') {
        let music = info.filter(performer => performer.category_group === 'concert')
        console.log(music)
        this.setState({ performers: music})
      } else if (selectedOption === 'theater') {
        let theater = info.filter(performer => performer.category_group === 'theater')
        this.setState({ performers: theater})
      }

    })
    .catch(err => {
      console.log(err)
    })
  }

  filterPerformers(selectedOption) {
    //function to give to drop down menu to map through array of performers and return only those within that category
    this.setState({ selectedOption });
    this.getPerformersInFo(selectedOption.value);
  }

  render() {
    const performers = this.state.performers;
    const styles ={
      height: '100px',
      width: '100px',
      position: 'absolute',
      zIndex: 200,
      top: '450px',
      marginLeft: '30%',
      marginRight: '30%',
    }
    return (
      <div id='App' className='container'>
      <Select 
        value={this.state.selectedOption}
        onChange={this.filterPerformers}
        options={options}
        />
        {this.state.performers.length === 0 ? 
          <img style={styles} 
               src='https://media.giphy.com/media/5AtXMjjrTMwvK/giphy.gif'
               alt='loading'></img> : 
          <PerformerList 
            performers={performers}
            />}
      </div>
    )
  }
}


export default App;