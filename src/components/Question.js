import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from 'react-router-dom';
import {Button} from "react-bootstrap";

class Question extends Component{

    handleSubmit = (e) => {
        console.log(this.props)
        e.preventDefault();
        const {id, answered, history} = this.props;
        if (answered) {
            return (<Redirect to={{pathname: '/results', state: {id: id}}}/>)
        } else {
            history.push({pathname: '/vote', state: {id: id}})
            console.log('pushed')
            return (<Redirect to={{pathname: '/vote', state: {id: id}}}/>)
        }
    }

    render() {
        console.log(this.props)
        const {author, question, answer, id} = this.props;

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
                        <Button onClick={(e)=>{this.handleSubmit(e)}}>View Poll</Button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users, history}, {id, answered}) {
    const adusr = users[authedUser];
    const question = questions[id];
    const author = users[question.author];
    const answer = adusr.answers[id];
    return {
        author: author,
        question: question,
        answer: answer,
        answered: answered,
    }
}

export default withRouter(connect(mapStateToProps)(Question));