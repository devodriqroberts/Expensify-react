// let visible = false
// const makeVisible = () => {
//     visible = !visible;
//     appReload()
// }


// let appRoot = document.getElementById('app');

// const appReload = () =>{
//     const template = (
//     <div>
//         <h1>Visibility</h1>

//         <button  onClick={makeVisible}> {visible ? 'Hide Text' : 'Show Text'}</button>
//         {visible ? <p>Is this visible</p> : undefined}
//     </div>
//     );

//     ReactDOM.render(template,appRoot);
// }

// appReload();

class Visibility extends React.Component {
constructor(props) {
    super(props);
    this.visible = this.visible.bind(this);
    this.state = {
        isVisible: false
    };
};

visible() {
    this.setState((prevState) => {
        return {

            isVisible: !prevState.isVisible
        };
    });
};

    render() {
        return (
            <div>
                <h1> Visibility</h1>
                <button onClick={this.visible}>{this.state.isVisible ? 'Hide Text' : 'Show Text'}</button>
                {this.state.isVisible && <p>Is this visible</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));