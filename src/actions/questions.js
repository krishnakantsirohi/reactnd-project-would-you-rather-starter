import {hideLoading, showLoading} from "react-redux-loading";
import {formatQuestion, saveQuestion} from "../utils/api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestions(question) {
    return{
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        return saveQuestion({optionOne, optionTwo, authedUser})
            .then((question)=>dispatch(addQuestions(question)))
            .then(()=>(dispatch(hideLoading())));
    }
}