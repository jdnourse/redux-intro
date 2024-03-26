import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import store from './store';

store.dispatch({ type: 'account/deposit', payload: 250 });
console.log(store.getState());
store.dispatch({ type: 'customer/updateName', payload: 'Jerry Nourse' });
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// connecting our Redux store to our application, must bring in another package...react-redux. Then we import { Provider } from 'react-redux' (so Redux and React can talk to one another). We then 'wrap' the <App /> component with the <Provider></Provider> component, then pass the 'store' prop to the <Provider> component.
