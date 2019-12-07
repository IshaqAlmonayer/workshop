
// export default () => ({});

function rootReducer(state, action) {
    if (action.type === "GET_VENUES") {
        return [...state.venues, action.payload];
    } else {
        return state;
    }
}

export default rootReducer;