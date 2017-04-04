const problems = (state = [], action) => {
    switch (action.type) {
        case 'GET_PROBLEMS_RECEIVE':
            return action.problems;
        default:
            return state;
    }
};

export default problems;
