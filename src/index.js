import _ from 'lodash';
import React ,{ Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/Video_list';
import Videodesc from './components/video_desc';

const API_Key = 'AIzaSyD4pZgVkzYHEz6nFzTWWbrNxzc1_PQi_RU';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [] , 
      selectedVideo : null 
    };

    this.VideoSearch ('Arizona State University');
}
    VideoSearch(term){
    YTSearch({key: API_Key, term: term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });
  }


  render(){

    const VideoSearch = _.debounce( (term) => {this.VideoSearch(term) },600)
    return (
    <div>
      <SearchBar onSearchTermChange ={ VideoSearch }/ >
      <Videodesc video = { this.state.selectedVideo} />
      <VideoList 
      onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
        videos ={this.state.videos} />
    </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
