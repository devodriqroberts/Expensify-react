import React from 'react';
import Option from './Option'

const Options = props => {
    return (
      <div>
        <div className="widget-Header">
          <h3 className="widget--Title">Your Options</h3>
          <button 
          className="button button--link"
          onClick={props.removeOptions} 
          hidden={!props.hasOptions}>
            Remove All
          </button>
        </div>
        {!props.hasOptions && <p className="widget--contentTitle">Please add an option to get started.</p>}

            {props.options.map((option, index) => (
              <Option
                  key={option}
                  optionText={option}
                  count={index +1}
                  removeSingleOption={props.removeSingleOption}
                />
              
            ))
          }
      </div>
    );
  };

  export default Options;