const currentProblem = (state = {}, action) => {
    switch (action.type) {
        case 'SHOW_CURRENT_PROBLEM':
            return action.currentProblem;
        default:
            return state;
    }
};

export default currentProblem;