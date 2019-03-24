import React from 'react';
import apiKey from '../config';
import Photographs from './Photographs';
import NotFound from './NotFound';
import axios from 'axios';

class PhotoContainer extends React.Component {
  // Initialize state for component
  constructor() {
    super();
    this.state = {
      loadedPhotos: [],
      loading: true,
    }
  }

  // Perform search on page load
  componentWillMount() {
    this.performSearch();
  }

  // Fetch image data to display on page
    performSearch() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.userInput}&per_page=16&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          loadedPhotos: response.data.photos.photo,
          loading: false,
        });
      })
      .catch(error => {
        console.log('Could not fetch data', error);
      })
  }

  render() {
    // Render Loading component if fetching data
    if (this.state.loading) {
      return(
        <div className="photo-container">
          <h2>Results</h2>
          <p>Loading, please wait</p>
        </div>
      );
    }
    // Render Not Found component if no results are found
    if (this.state.loadedPhotos.length === 0) {
      return(
        <NotFound />
      );
    }
    // Render Photo Container if matches are found
    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <Photographs loadedPhotos={this.state.loadedPhotos}/>
        </ul>
      </div>
    );
  }

  // Update component with new images when user submits new text
  componentDidUpdate(prevProps) {
    if (this.props.userInput !== prevProps.userInput) {
      this.setState({
        loadedPhotos: [],
        loading: true
      })
      this.performSearch(this.props.userInput);
    }
  }

} // End PhotoContainer Component

export default PhotoContainer;
