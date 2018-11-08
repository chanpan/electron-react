import React, { Component } from 'react';  
import {connect} from 'react-redux';
import { fetchUser } from '../../store/actions/example';

//bootstrap
import { ListGroup, ListGroupItem } from 'reactstrap';

class ExampleComponent extends Component {
    componentDidMount(){ 
        this.props.fetchUser();
    }//ทำงานเมื่อ โหลด component เสร็จแล้ว
    render() { 
        const { users ,isLoading} =  this.props.users;
        
        return (
            <div className="">
               { isLoading && (<div>Loading...... </div>)}
               <ListGroup>
                    { users && users.map( user => <ListGroupItem key={user.id}>{user.login}</ListGroupItem>)}
                
                
                </ListGroup>
               
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
