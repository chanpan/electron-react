import React, { Component } from 'react';
import { Link , NavLink} from 'react-router-dom';
import RenderLink from './renderLink';
class NavbarComponent extends Component {
  render() {
    const routes = [
      {path: '', label:'Home', currentPath:''}, 
      {path: 'about', label:'About', currentPath:'about'}
    ]
    return (
      <div className="Home">
        <RenderLink routes={routes}/>
      </div>
    );
  }
}

export default NavbarComponent;
