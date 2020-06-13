import React, {Component} from "react";
import {connect} from "react-redux";
import Question from "./Question";

class Unanswered extends Component{
    render() {
        const {questions} = this.props;
        return(
            <div>
                {
                    questions.map((id)=>(
                        <Question key={id} id={id} answered={false}/>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    const user = users[authedUser];
    const unanswered = []
    const answered = Object.keys(user.answers);
    for (let question of Object.keys(questions)){
        if(!answered.includes(question)){
            unanswered.push(question)
        }
    }
    return {
        questions: unanswered,
    }
}

export default connect(mapStateToProps)(Unanswered);