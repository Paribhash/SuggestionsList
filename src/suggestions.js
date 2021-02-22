import React from 'react';
import { getSuggestions } from './server';

export default class Suggestions extends React.Component {
    constructor(props) {
        super(props);

        this.inputValue = React.createRef();
        this.state = {
            suggestionsList: []
        }
    }

    inputValueChange = () => {
        if(!!this.inputValue.current.value) {
            getSuggestions(this.inputValue.current.value).then(response => {
                this.setState({ suggestionsList: response });
            });
        } else {
            this.setState({ suggestionsList: [] });
        }
    }

    render() {
        return (
            <>
                <input ref={this.inputValue} onChange={this.inputValueChange} type="text" className="search" placeholder="Type your text" />

                { this.state.suggestionsList.length > 0 && <ul className="suggestionsList">
                    {this.state.suggestionsList.map(item => {
                        return <li className="item">{item}</li>
                    })}
                </ul>}
            </>
        )
    }
}