import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuth ? <WrappedComponent {...props}/> : <p>Please login to view this info.</p>}
        </div>
    );
};


const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuth={true} info='Ha Ha'/> , document.getElementById('app'));
