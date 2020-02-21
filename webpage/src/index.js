import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const apiURL = "https://www.breakingbadapi.com/api/";
let search = "";

class Searchbar extends React.Component {

    change() {
        search = document.getElementById("input");
    }

    render() {
        return ([
            <form>
                <label htmlFor="input">Find characters: </label>
                <input id="input" type="text" placeholder="Walter White"></input>
                <button onClick={this.change()}>Find</button>
            </form>,
            <Find/>]
        )
    }
}

class Find extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            text: search
        };
    }

    componentDidMount() {
        fetch(apiURL + "characters?limit=10&name=" + this.state.text)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

ReactDOM.render(
    <Searchbar />,
    document.getElementById('root')
);