import React, { Component } from 'react';
// import "./App.css";

const UserActions_style = {
    position : "fixed",
    float : "right",
    marginTop : "50px"

};

const buttonStylePublish = {
    color
};

const buttonStyleDelete = {
    color
};

const buttonStyleArchive = {
    color
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
                <button>Publish</button>
                <button>Archive</button>
                <button>Delete</button>
            </div>
        );
    }
}

export default UserActions;