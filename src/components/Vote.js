import React, {Component} from "react";
import {connect} from "react-redux";
import {Button} from "react-bootstrap";

class Vote extends Component{
    render() {
        const question = this.props.questions[this.props.location.state.id];
        const user = this.props.users[question.author];
        console.log(this.props)
        console.log(question)
        console.log(user)
        return(
            <div className='container'>
            <div className='question-box'>
                <div className='question-box-author'>
                    <h3>
                        {user.name} asks:
                    </h3>
                </div>
                <div className='question-box-info'>
                    <img
                        src={user.avatarURL}
                        alt={`Image of ${user.name}`}
                        className='avatar'
                    />
                    <span className='vline'/>
                    <form>
                        <h4>Would you rather...</h4>
                        <input type='radio' id='optionOne' name='ans' value={question.optionOne}/>
                        <label htmlFor='optionOne'> {question.optionOne.text}</label>
                        <br/>
                        <input type='radio' id='optionTwo' name='ans' value={question.optionTwo}/>
                        <label htmlFor='optionTwo'> {question.optionTwo.text}</label>
                        <Button>View Poll</Button>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users}) {
    return{
        questions: questions,
        users: users,
    }
}

export default connect(mapStateToProps)(Vote);