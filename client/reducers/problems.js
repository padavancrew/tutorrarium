const problems = (state = [], action) => {
    switch (action.type) {
        case 'GET_PROBLEMS_RECEIVE':
            return action.problems;
        case 'ADD_PROBLEM_ADDED':
            return [...state, action.problem];
        default:
            return state;
    }
};

export default problems;
