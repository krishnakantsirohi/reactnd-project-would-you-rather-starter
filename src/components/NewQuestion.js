import React, {Component} from 'react'
import 'react-bootstrap'
import '../index.css';
import {Button, Form} from "react-bootstrap";
import {handleAddQuestion} from "../actions/questions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class NewQuestion extends Component{
    state = {
        optionOne: '',
        optionTwo: '',
        to_home: false,
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
            to_home: true,
        }));
        document.getElementById('OptionOne').value='';
        document.getElementById('OptionTwo').value='';
    }

    render() {
        const {to_home} = this.state;
        if (to_home)
            return <Redirect to='/'/>
        return (
            <div>
                <div className='create-question'>
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

export default connect()(NewQuestion);