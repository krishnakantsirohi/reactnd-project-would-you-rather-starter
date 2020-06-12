import React, {Component} from "react";
import {connect} from "react-redux";
import '../index.css';
import Scorecard from "./Scorecard";

class LeaderBoard extends Component{
    componentDidMount() {

    }

    render() {
        const {users} = this.props;
        return(
            <div>
                {
                    users.map((id)=>(
                        <Scorecard id={id} key={id}/>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps({users}){
    const usr = [];
    for (let user of Object.keys(users))
        usr.push(user);
    return{
        users: usr,
    }
}

export default connect(mapStateToProps)(LeaderBoard);