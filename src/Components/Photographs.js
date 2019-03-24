import React from 'react';

class Photographs extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    // Generate HTML for each photo that was fetched
    const results = this.props.loadedPhotos;
    let searchedPhotos = results.map(data =>
      <li key={data.id}>
        <img
          src={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`}
          alt={data.title}
        />
      </li>);

    return(
      <div className="photo-container">
        <ul>
          {searchedPhotos}
        </ul>
      </div>
    );
  }
}

export default Photographs;
