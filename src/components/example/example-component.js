import React, { Component } from 'react';  
import {connect} from 'react-redux';
import { fetchUser } from '../../store/actions/example';
class ExampleComponent extends Component {
    componentDidMount(){ 
        this.props.fetchUser();
    }//ทำงานเมื่อ โหลด component เสร็จแล้ว
    render() { 
        const { users ,isLoading} =  this.props.users;
        
        return (
            <div className="user">
               { isLoading && (<div>Loading...... </div>)}
               { users && users.map( user => <div key={user.id}>{user.login}</div>)}
            </div>
          );
      
    }
}//end class ExampleComponent
const mapDispatchToProps = {
    fetchUser, //../../store/actions/example
}
const mapStateToProps = (state) => {
    return {
        users:state.example.users, // ../../store/reducers/index.js
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
