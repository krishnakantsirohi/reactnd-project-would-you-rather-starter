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
    question = {
        optionOneText: question.optionOne,
        optionTwoText: question.optionTwo,
        author: question.authedUser,
    }
    const formattedQuestion = formatQuestion(question);
    return _saveQuestion(formattedQuestion);
}

export function saveQuestionAnswer(questionAnswer) {
    return _saveQuestionAnswer(questionAnswer)
}


export function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        author,
        optionOne: {
            votes: [],
            text: optionOneText,
        },
        optionTwo: {
            votes: [],
            text: optionTwoText,
        }
    }
}