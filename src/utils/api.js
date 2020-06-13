import {_saveQuestion, _saveQuestionAnswer, _getQuestions, _getUsers} from './_DATA';



export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function saveQuestion(question){
    return _saveQuestion(question)
}

export function saveQuestionAnswer(questionAnswer) {
    return _saveQuestionAnswer(questionAnswer)
}