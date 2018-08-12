console.log("App.js is running");

// JSX - JavaScript XML

const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reloadApp();
    }
};

const resetOptions = () => {
        app.options = [];
        reloadApp();
};

const makeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
};

const numbers = [12, 14, 16];


let appRoot = document.getElementById('app');

const reloadApp = () => {

    let template = (
    <div>
        <h1> {app.title}</h1> 
        {app.subtitle ? <p>{app.subtitle}</p> : undefined}
        
        <p> {app.options.length > 0 ? 'Here are your options' : 'There are no options'} </p>
        
        <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>

        <button onClick={resetOptions}>Remove All</button>

        <ol>
            {app.options.map((option) => {
                return <li key={option}>{option}</li>;
                })
            }
        </ol>
    
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>
    );
    
    
    
    ReactDOM.render(template, appRoot);
};

reloadApp();



