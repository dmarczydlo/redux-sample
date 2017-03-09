function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log('INCREMENT COMMENTS');
            const i = action.index;

            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1)
            ]

        case 'SUCCESS_LOAD_POSTS': {
            console.log('OK!!');
            return Object.assign([], state, action.posts);
        }



        default:
            return state;

    }
}

export default posts;