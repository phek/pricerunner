import { getJson } from '../utils/network';
export const CATEGORY_LOADED = Symbol('CATEGORY_LOADED');

function categoryLoaded(data) {
    return {
        type: CATEGORY_LOADED,
        category: data
    };
}

export function loadCategory() {
    return dispatch => {
        return getJson('/public/v1/cl/1/SE/DESKTOP?urlName=mobiltelefoner&nofilters=false')
            .then(response => {
                dispatch(categoryLoaded(response.data.viewData.category));
            })
            .catch(error => {
                console.error(error);
            });
    };
}
