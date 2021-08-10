import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

export default function Root({ children, initialState = {} }) {
    const store = createStore(reducers, initialState, applyMiddleware(thunk))
    
    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}