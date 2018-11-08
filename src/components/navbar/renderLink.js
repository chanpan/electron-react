import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
class RenderLink extends Component {
  render() {
    const {routes} = this.props;
    return (
     <ul>
        {routes && routes.map((r, i)=><li key={i}>
          <Link  to={`${r.path}`} replace={r.path === r.currentPath}>{r.label}</Link>
        </li>) }
     </ul>
    );
  }   
}
export default RenderLink; 