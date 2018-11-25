import * as React from 'react';
import { Provider } from 'react-redux';
import { ApplicationContext, applicationContextClient } from './ApplicationContext';
import { configureStore } from './store/store';
import { RootState } from './store/RootState';
import { Store } from 'redux';
import { PwaApp } from './PwaApp';

// import './App.css';

const store = configureStore();

export function getGlobalStore(): Store<RootState> {
    return store;
}

export default class App extends React.Component {
    render() {
        return (
          <ApplicationContext.Provider value={applicationContextClient}>
            <Provider store={store}>
                <PwaApp />
            </Provider>
          </ApplicationContext.Provider>
        );
    }
}