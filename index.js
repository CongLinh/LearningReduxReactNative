/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = { value: 0, isHighlight: true };

const reducer = (state = defaultState, action) => {
    if (action.type === 'UP') {
        return { value: state.value + 1, isHighlight: state.isHighlight }
    }
    if (action.type === 'DOWN') {
        return { value: state.value - 1, isHighlight: state.isHighligh }
    }
    if (action.type === 'CHANGE_COLOR') {
        return { value: state.value, isHighlight: !state.isHighligh }
    }
    return state;
}

const store = createStore(reducer);

export default class ReduxDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
            
        );
    }
}

AppRegistry.registerComponent(appName, () => ReduxDemo);
