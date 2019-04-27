import React from 'react';
import { withRouter  } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props);

        
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/user/${this.refs.userInput.value}`)
    }

    render() {
        return (
            <div className="search-page">
                <h2>Enter a GitHub username</h2>
                <form onSubmit={this._handleSubmit}>
                    <input ref="userInput" className="search-page__input" type="text" />
                    <button  className="search-page__button">Search</button>
                </form>
            </div>
        );
    }
};

export default Search;  
