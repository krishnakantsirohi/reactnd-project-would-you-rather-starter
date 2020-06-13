import {RECEIVE_QUESTIONS, SAVE_ANSWER, ADD_QUESTION} from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case ADD_QUESTION:
            const {question} = action;
            return {
                ...state,
                [question.id]: question,
            }
        case SAVE_ANSWER:
            console.log(action)
            const {qid, authedUser, answer} = action.answer
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]:{
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}