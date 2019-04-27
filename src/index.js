import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, IndexRoute, BrowserRouter } from 'react-router-dom';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';


const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="/" component={Search}/>
            <Route path="user/:username" component={User} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
