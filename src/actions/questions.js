import {hideLoading, showLoading} from "react-redux-loading";
import {saveQuestion} from "../utils/api";
import {addQuestionToUser} from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const SAVE_ANSWER = 'SAVE_QUESTION_ANSWER';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestions(question) {
    return{
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        return saveQuestion({optionOne, optionTwo, author: authedUser})
            .then(question=> {
                dispatch(addQuestions(question))
                dispatch(addQuestionToUser(question))
            })
            .then(()=>(dispatch(hideLoading())));
    }
}

export function saveAnswer(answer) {
    return {
        type: SAVE_ANSWER,
        answer,
    }
}