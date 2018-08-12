import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
      options: [],
      selectedOption: undefined
    };

    removeOptions = () => {
      this.setState(() => ({ options: [] }));
    };
  
    removeSingleOption = (optionToRemove) => {
      this.setState(prevState => ({
        options: prevState.options.filter(option => {
          return optionToRemove !== option;
        })
      }));
    };
  
    addOption = (option) => {
      if (!option) {
        return "Enter a valid value to add item.";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Option already exist.";
      };
  
      this.setState(prevState => ({
        options: prevState.options.concat([option])
      }));
    };
  
    handlePick = () => {
      let randomNumber = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNumber];
      this.setState(() => ({selectedOption: option}));
    };

    dismissModal = () => {
      this.setState(() => ({selectedOption: undefined}))
    }
    componentDidMount() {
        try {
  
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
          if (options) {
  
              this.setState(() => ({options}));
          }
        } catch (e) {
          // catch
        };
    };
  
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        };
    };
  
    
  
    render() {
      const subtitle = `Put your life in the hands of a computer.`;
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            hasOptions={this.state.options.length > 0}
            removeOptions={this.removeOptions}
            removeSingleOption={this.removeSingleOption}
          />
          <AddOption addOption={this.addOption} />
          <OptionModal selectedOption={this.state.selectedOption} dismissModal={this.dismissModal}/>
        </div>
      );
    };
  };

