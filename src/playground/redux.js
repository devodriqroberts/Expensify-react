import {createStore} from 'redux';

// Action generator

const increment = ({incrementBy = 1} = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrement = ({decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const set = ({setTo} = {}) => ({
	type: 'SET',
	setTo
});

const reset = () => ({type: 'RESET'});

//Reducers
	// 1. Are pure functions
	// 2. Never change state or action
const countReducer = (state = {count: 0}, action) => {

	switch (action.type) {
		
			case 'INCREMENT':
			
				return {
					count: state.count + action.incrementBy
				};
			case 'DECREMENT':
			
				return {
					count: state.count - action.decrementBy
				};
			case 'RESET':
				return {
					count: 0
				};
			case 'SET':
			return {
				count: action.setTo
			};

			default:
					return state; 
	};
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});



//Id like to increment the count
// store.dispatch({
// 		type: 'INCREMENT',
// 		incrementBy: 5
// });

store.dispatch(increment({ incrementBy: 5 }));


//Id like to reset the count
store.dispatch(reset());

//Id like to decrement the count
store.dispatch(decrement({decrementBy: 20}));

store.dispatch(set({setTo: 200}));

