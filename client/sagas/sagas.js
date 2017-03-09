import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

const axios = require('axios');

const URL_POSTS = `http://localhost:80/api/?action=posts&format=json`;
const URL_COMMENTS = `http://localhost:80/api/?action=comments&format=json`;


function * getPosts() {
    const response = yield call(axios.get, URL_POSTS, {});
    yield put({type: 'SUCCESS_LOAD_POSTS', posts: response.data});
};

function * getComments() {
    console.log('run loader');
    const response = yield call(axios.get, URL_COMMENTS, {});
    console.log(response.data);
    yield put({type: 'SUCCESS_LOAD_POSTS', comments: response.data});
    console.log('put done');
};


function * loadPosts() {
    // console.log('watch posts');
    yield takeEvery('LOAD_POSTS', getPosts);
}

function * loadComments() {
    // console.log('watch comment');
    yield takeEvery('LOAD_COMMENTS', getComments);
}


export default function * loadData() {
    yield [loadPosts(), loadComments()]

}