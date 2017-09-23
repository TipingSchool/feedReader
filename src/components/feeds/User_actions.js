import React, { Component } from 'react';
import "./App.css";

const UserActions_style = {
    position : "fixed",
    // float : "right",
    marginTop : "50px",
    marginLeft : "1080px"
};

class UserActions extends Component{
    constructor(props){
        super(props);
        // this.state = {

        // };
    }
    render(){
        return(
            <div style = { UserActions_style }>
                <button className = "userButton userPublish">Publish</button>
                <button className = "userButton userArchive">Archive</button>
                <button className = "userButton userDelete">Delete</button>
            </div>
        );
    }
}

export default UserActions;