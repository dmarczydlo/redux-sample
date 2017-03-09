/**
 * Created by Daniel on 06.03.2017.
 */
import {createStore, compose, applyMiddleware, dispatch} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga'


import loadData from './sagas/sagas';


//import reducer
import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware()


// import comments from './data/comments';
// import posts from './data/posts';


const defaultState = {
    comments: [],
    posts: []
}


const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

// applyMiddleware(sagaMiddleware)
// const store = createStore(rootReducer, defaultState , enhancers);

const store = createStore(
    rootReducer, defaultState, applyMiddleware(sagaMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);


sagaMiddleware.run(loadData)

//reducer rebuild
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer)
    });
}



export default  store;
