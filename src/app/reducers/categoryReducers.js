import { CATEGORY_LOADED } from '../actions/categoryActions';
import { fromJS } from 'immutable';

let defaultState = fromJS({
    category: {}
});

export default function(state = defaultState, action) {
    switch (action.type) {
        case CATEGORY_LOADED:
            return state.merge({ category: action.category });
        default:
            return state;
    }
}
