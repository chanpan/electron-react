import React, { Component } from 'react';
import { Link , NavLink} from 'react-router-dom';
import RenderLink from './renderLink';
class NavbarComponent extends Component {
  render() {
    const routes = [
      {path: 'home', label:'Home', currentPath:''}, 
      {path: 'about', label:'About', currentPath:'about'},
      {path: 'example', label:'ตัวอย่างการ fetch ข้อมูล', currentPath:'example'}
    ]
    return (
      <div className="Home">
        <RenderLink routes={routes}/>
      </div>
    );
  }
}

export default NavbarComponent;
