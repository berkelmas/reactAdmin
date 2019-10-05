const initialState = {
    user : 'berkelmas'
};

const reducer = (state= initialState, action) => {

    switch(action.type) {
        
        case('changeUser'):
            return {...state, user : 'changed user...'};
        default:
            return state;
    }
};

export default reducer;