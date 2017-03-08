function postComments(state = [], action) {

    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            // console.log(action.i);
            // console.log(state.slice(0, action.i));
            // console.log(state.slice(action.i + 1));

            var ret =
                [
                    ...state.slice(0, action.i),
                    ...state.slice(action.i + 1)
                ];
            return ret;

        default:
            return state;

    }


}


function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {

        let ret = {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        };
        return ret;
    }
    return state;
}

export default comments;