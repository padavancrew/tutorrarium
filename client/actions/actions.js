import * as types from '../constants/ActionTypes';

export function addProblem(problem) {
    return {
        type: types.ADD_PROBLEM,
        problem
    }
}
