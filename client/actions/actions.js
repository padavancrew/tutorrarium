import * as types from '../constants/ActionTypes';

export function addProblem(subject, description) {
    return {
        type: types.ADD_PROBLEM,
        subject,
        description
    }
}
