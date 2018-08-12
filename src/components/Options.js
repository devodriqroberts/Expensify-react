import React from 'react';
import Option from './Option'

const Options = props => {
    return (
      <div>
        {props.hasOptions ? <p>Here are your options</p> : <p>Please add an option to get started</p>}
        <button onClick={props.removeOptions} hidden={!props.hasOptions}>
          Remove All
        </button>
        <ol>
          {props.options.map(option => (
            <li key={option}>
              <Option
                optionText={option}
                removeSingleOption={props.removeSingleOption}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  };

  export default Options;