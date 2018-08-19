import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

//const date = new Date();
const now = moment();
console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            CalendarFocused: false,
            error: ''
        };
    }
    
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }));
        }
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };
    onTextAreaChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }));
        };
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            CalendarFocused: focused
        }));
    };
    submitExpense = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            const error = 'Please provide description and an amount.'
            this.setState(() => ({
                error
            }));
        } else {
            const error = '';
            this.setState(() => ({
                error
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        };
        
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitExpense}>
                <input type='text'
                placeholder='Description'
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
                />
                <input 
                type='text'
                placeholder='Amount'
                value={this.state.amount}
                onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.CalendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}

                />
                <textarea 
                placeholder='Add a note for your expense (optional)'
                value={this.state.note}
                onChange={this.onTextAreaChange}>
                </textarea>
                <button type='submit'>{this.props.expense ? 'Save Edit' : 'Add Expense'}</button>

                </form>
            </div>
        );
    };
};