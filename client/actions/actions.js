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

export const addProblemAdded = (problem) => {
    return {
        type: types.ADD_PROBLEM_ADDED,
        problem: problem
    };
};

export const addProblem = (problem) => (dispatch) => {
    fetch('/api/problems', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(problem)
    })
    .then(() => dispatch(addProblemAdded(problem)));
};
