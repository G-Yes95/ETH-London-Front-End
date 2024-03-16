const createReducer = () => (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return Object.assign(Object.assign({}, state), { data: action.payload, isLoading: false });
        case 'SET_ERROR':
            return Object.assign(Object.assign({}, state), { error: action.payload, isLoading: false });
        case 'SET_LOADING':
            return Object.assign(Object.assign({}, state), { isLoading: action.payload });
        default:
            return state;
    }
};

export { createReducer };
