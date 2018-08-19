import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();



store.dispatch(addExpense({description: 'Water bill', note: 'March 2018', amount: 45000}));
store.dispatch(addExpense({description: 'Gas bill', note: 'I have no gas bill', amount: 0, createdAt: 1000}));
store.dispatch(addExpense({description: 'Internet bill', note: 'Internet bill', amount: 400000}));


const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

	console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);


ReactDOM.render(jsx , document.getElementById('app'));
