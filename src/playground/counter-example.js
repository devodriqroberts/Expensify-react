// const addOne = () => {
//     count++;
//     appReload();
// }

// const minusOne = () => {
//     if (count > 0) {

//         count--;
//         appReload();
//     }
// }

// const reset = () => {
//     count = 0;
//     appReload();
// }



// let count = 0;




// const appReload = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo,appRoot)
// }

// appReload();

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0,
        };

    }

    componentDidMount() {

        const storedCount = localStorage.getItem('lastCount');
        const count = parseInt(storedCount, 10);

        if (!isNaN(count)) {

            this.setState(() => ({count}))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component did update');
        if(prevState !== this.state.count) {

            localStorage.setItem('lastCount', this.state.count);
        }
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            };
        });
    };

    minusOne() {

        this.setState((prevState) => {

            if (prevState.count > 0) {

                return {
                    count: prevState.count - 1
                };
            };
        });
    };
    reset() {
        this.setState(() =>{
            return {
                count: 0
            }
        });
    };


    render() {
        return (
            <div>
                <h1>
                    Count: {this.state.count}
                </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>

            </div>
        );
    };
};



ReactDOM.render(<Counter/>, document.getElementById('app'));
