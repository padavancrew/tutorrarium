import { combineReducers } from 'redux';
import problems from './problems';
import currentProblem from './currentProblem';

export const rootReducer = combineReducers({
    problems,
    currentProblem
});
