import React, {Component} from 'react'
import 'react-bootstrap'
import '../index.css';
import {Button, Form} from "react-bootstrap";
import {handleAddQuestion} from "../actions/questions";
import {connect} from "react-redux";

class NewQuestion extends Component{
    state = {
        optionOne: '',
        optionTwo: '',
    }

    handleChangeOption = (e) => {
        const text = e.target.value;
        if (e.target.id==='OptionOne'){
            this.setState(()=>({
                OptionOne: text,
            }))
        } else if (e.target.id==='OptionTwo') {
            this.setState(() => ({
                OptionTwo: text,
            }))
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {OptionOne, OptionTwo} = this.state;
        const {dispatch} = this.props;

        dispatch(handleAddQuestion(OptionOne, OptionTwo))
        this.setState(()=>({
            OptionOne: '',
            OptionTwo: '',
        }));
        document.getElementById('OptionOne').value='';
        document.getElementById('OptionTwo').value='';
    }

    render() {
        return (
            <div>
                <div className='question'>
                    <h2>Create New Question</h2>
                    <span className='ghline'/>
                    <span className='hline'/>
                    <p>Complete the question:</p>
                    <h3>Would you rather...</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Control type='text' placeholder='Enter Option One Text Here' id='OptionOne' onChange={this.handleChangeOption}/>
                        <p className='word'><span className='wordline'>OR</span></p>
                        <Form.Control type='text' placeholder='Enter Option One Text Here' id='OptionTwo' onChange={this.handleChangeOption}/>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}) {
    return {
        authedUser: authedUser,
        questions: questions,
        users: users,
    }
}

export default connect(mapStateToProps)(NewQuestion);