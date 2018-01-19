import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Main extends Component {
    render() {
        return (
            <div className="app">
                <nav className="navbar is-primary" role="navigation">
                  <div className="navbar-brand">
                    RBASIC
                  </div>
                </nav>
                <div className="columns main-content is-marginless">
                  <div className="column is-narrow menu-container is-paddingless">
                    
                  </div>
                  <div className="column page-content is-paddingless">
                       Hello
                  </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}