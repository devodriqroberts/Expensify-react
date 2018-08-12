import React from 'react';

const Action = props => {
    return (
      <div>
        <button className="big-Button" disabled={!props.hasOptions} onClick={props.handlePick}>
          What should I do?
        </button>
      </div>
    );
  };

  export default Action;