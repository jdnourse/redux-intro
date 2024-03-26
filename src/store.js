import { combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;

// Only place we use Redux. The 'slices' contain the initial states, reducers, and action creators. We import the reducers into the store and use combineReducer() to group them together as the 'rootReducer'.
