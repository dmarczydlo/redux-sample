//increment
import axios from 'axios'

export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add comment
export function addComment(postId, author, comment) {
    console.log('Dispatching add comment')
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}
//remove comment

export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}
//API LOADERS
export function loadPosts() {
    return {
        type: 'LOAD_POSTS',
    }
}

export function loadComments() {
    return {
        type: 'LOAD_COMMENTS',
    }
}






