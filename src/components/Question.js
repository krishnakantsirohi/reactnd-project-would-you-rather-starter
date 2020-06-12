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
                        <p>
                            ...
                            {
                                (typeof answer==='string'&&question[answer].text)
                            }
                            {
                                (typeof answer==='undefined'&&question.optionOne.text)
                            }
                        ...</p>
                        <Button>View Poll</Button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {id}) {
    const adusr = users[authedUser];
    const question = questions[id];
    const author = users[question.author];
    const answer = adusr.answers[id];
    return {
        author: author,
        question: question,
        answer: answer,
    }
}

export default connect(mapStateToProps)(Question);