import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Store extends React.Component {
    render() {
        return (
            <div>Welcome to my webpage</div>
        );
    }
}


ReactDOM.render(
    <Store/>,
    document.getElementById('root')
);