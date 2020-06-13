import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {handleSaveQuestionAnswer} from "../actions/users";

class Vote extends Component{

    state = {
        selected: '',
        to_home: false,
    }

    handleChange = (e) => {
        const val = e.target.value;
        this.setState(()=>({
            selected: val,
        }))
    }

    handleSubmit = () => {
        const qid = this.props.location.state.id;
        const {dispatch} = this.props;
        const answer = this.state.selected;
        this.setState(()=>({
            to_home:true,
        }))
        dispatch(handleSaveQuestionAnswer(qid, answer))
    }

    render() {
        if (this.state.to_home===true){
            return <Redirect to='/' />
        }
        const question = this.props.questions[this.props.location.state.id];
        const user = this.props.users[question.author];
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
                    <form  onSubmit={this.handleSubmit}>
                        <h4>Would you rather...</h4>
                        <input type='radio' id='optionOne' name='ans'
                               value='optionOne'
                               onChange={this.handleChange}
                               checked={this.state.selected==='optionOne'}
                        />
                        <label htmlFor='optionOne'>
                            {question.optionOne.text}
                        </label>
                        <br/>
                        <input type='radio' id='optionTwo' name='ans'
                               value={'optionTwo'}
                               onChange={this.handleChange}
                               checked={this.state.selected==='optionTwo'}/>
                        <label htmlFor='optionTwo'> {question.optionTwo.text}</label>
                        <button type='submit'
                                className='btn btn-primary'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}) {
    return{
        authedUser: authedUser,
        questions: questions,
        users: users,
    }
}

export default connect(mapStateToProps)(Vote);