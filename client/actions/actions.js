import * as types from '../constants/ActionTypes';

export const getProblemsReceive = (problems) => {
    return {
        type: types.GET_PROBLEMS_RECEIVE,
        problems: problems
    };
};

export const getProblems = () => (dispatch) => {
    fetch('/api/problems')
        .then((response) => response.json())
        .then((problems) => dispatch(getProblemsReceive(problems)));
};

export const addProblem = (problem) => {
    return {
        type: types.ADD_PROBLEM,
        problem
    };
};
