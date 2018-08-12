import React from 'react';

export default class AddOption extends React.Component {
    state = {
      error: undefined
    };
  
    handleAddOption = (e) => {
      e.preventDefault();
  
      const option = e.target.elements.optionText.value.trim();
      const error = this.props.addOption(option);
      
  
      this.setState(() => ({ error }));
      
      if (!error) {
          e.target.elements.optionText.value = "";
      }
    }
  
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="optionText" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }