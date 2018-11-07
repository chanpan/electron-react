import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {
  render() {
    return (
      <div className="Home">
        {/* <Link to={`view/${item.name}`}>
          <button type="button" className="btn btn-primary">Read More</button>
        </Link> */}
        <Link to={`/`}>Home</Link> {' '}
        <Link to={`/about`}>About</Link>
      </div>
    );
  }
}

export default NavbarComponent;
