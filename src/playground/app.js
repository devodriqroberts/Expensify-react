class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    (this.removeOptions = this.removeOptions.bind(this)),
      (this.addOption = this.addOption.bind(this)),
      (this.handlePick = this.handlePick.bind(this)),
      (this.removeSingleOption = this.removeSingleOption.bind(this)),
      (this.state = {
        options: []
      });
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
  }

  removeOptions() {
    this.setState(() => ({ options: [] }));
  }

  removeSingleOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }

  addOption(option) {
    if (!option) {
      return "Enter a valid value to add item.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already exist.";
    }

    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  }

  handlePick() {
    let randomNumber = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNumber]);
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
      </div>
    );
  }
}


const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

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

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.removeSingleOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
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

ReactDOM.render(<IndecisionApp />, document.getElementById(`app`));
