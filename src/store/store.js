import {createStore, applyMiddleware} from 'redux';
import createSagaMidwadleware from 'redux-saga';
import {persistStore} from 'redux-persist';

import {rootReducer} from './reducers/rootReducer';
import {rootSaga} from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
