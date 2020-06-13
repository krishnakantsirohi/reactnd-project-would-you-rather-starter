import {ADD_USER_QUESTION, RECEIVE_USERS, SAVE_USER_ANSWER} from '../actions/users'


export default function users(state= {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_USER_QUESTION:
            const {id, author} = action.question
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([id]),
                }
            }
        case SAVE_USER_ANSWER:
            const {authedUser, qid, answer} = action.answer
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer,
                    },
                }
            }
        default:
            return state;
    }
}
