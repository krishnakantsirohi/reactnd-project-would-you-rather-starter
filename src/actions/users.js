import {hideLoading, showLoading} from "react-redux-loading";
import {saveQuestionAnswer} from "../utils/api";
import {saveAnswer} from "./questions";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addQuestionToUser(question) {
    return {
        type: ADD_USER_QUESTION,
        question,
    }
}

export function saveAnswerToUser(answer) {
    return {
        type: SAVE_USER_ANSWER,
        answer,
    }
}


export function handleSaveQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        dispatch(showLoading());
        dispatch(saveAnswerToUser({authedUser, qid, answer}))
        dispatch(saveAnswer({authedUser, qid, answer}))
        dispatch(hideLoading())
    }
}