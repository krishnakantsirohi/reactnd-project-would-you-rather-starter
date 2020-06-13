import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Results extends Component{
    render() {
        return(
            <div>
                Results
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {id}) {
    return {

    }
}

export default withRouter(connect(mapStateToProps)(Results));