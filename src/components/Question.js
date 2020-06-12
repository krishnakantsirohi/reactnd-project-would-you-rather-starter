import React, {Component} from "react";
import {connect} from "react-redux";

class Question extends Component{

    render() {
        const {author, question, answers} = this.props;
        return(
            <div className='container'>
                <div>
                    <h3>
                        {author.name} asks:
                    </h3>
                </div>
                <div>
                    <img
                        className='avatar'
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                    />
                </div>
                {console.log(this.props)}
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {id}) {
    const question = questions[id];
    const author = users[question.author];
    return {
        author: author,
        question: questions[id],
        answer: users[question.author].answers[id]==='undefined'?'':users[question.author].answers[id],
    }
}

export default connect(mapStateToProps)(Question);