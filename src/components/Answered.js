import React, {Component} from "react";
import {connect} from "react-redux";
import Question from "./Question";

class Answered extends Component{
    render() {
        const {questions} = this.props;
        return(
            <div>
                {
                    questions.map((id)=>(
                        <Question key={id} id={id}/>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        questions: Object.keys(users[authedUser].answers),
    }
}

export default connect(mapStateToProps)(Answered);