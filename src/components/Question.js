import React, {Component} from "react";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";

class Question extends Component{

    render() {
        const {author, question, answer} = this.props;
        return(
            <div className='question-box'>
                <div className='question-box-author'>
                    <h3>
                        {author.name} asks:
                    </h3>
                </div>
                <div className='question-box-info'>
                    <img
                        className='avatar'
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                    />
                    <span className='vline'/>
                    <div>
                        <h4>Would you rather...</h4>
                        <p>...{question[answer].text}...</p>
                        <Button>View Poll</Button>
                    </div>
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