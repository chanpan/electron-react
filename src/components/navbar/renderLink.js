import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

//bootstrap navbar
import { Nav, NavItem, NavLink } from 'reactstrap';

class RenderLink extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div>
        <Nav>
          {routes && routes.map((route, i) =>
           <NavItem key={i}>
              <Link className='nav-link' to={`${route.path}`} replace={route.path === route.currentPath}>{route.label}</Link> 
          </NavItem>
          )}
        </Nav>
      </div>

    );
  }
}
export default RenderLink; 