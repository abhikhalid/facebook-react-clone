export const initialState = {
    term: null,
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
};



function reducer(state, action) {

    // console.log(action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:

            // console.log('Hello World');

            return {
                ...state,
                term: action.term,
            };

        default:

            return state;
    }
}

export default reducer;


