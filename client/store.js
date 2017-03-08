/**
 * Created by Daniel on 06.03.2017.
 */
import {createStore, compose, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga'

//import reducer
import rootReducer from './reducers/index';

import {getComments} from './sagas/comments';

import posts from './data/posts';
// import comments from './data/comments';

console.log(getComments.Promise._65);
// const comments = applyMiddleware(createSagaMiddleware(getComments));
// const  comments  = getComments;


const defaultState =
    {
        posts,
        comments
    };


const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);


//reducer rebuild
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer)
    });
}


export default  store;
