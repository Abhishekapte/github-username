import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, IndexRoute, BrowserRouter } from 'react-router-dom';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';

/*
Rendering a router will output the right component tree based on the current URL.
Nested routes' components will be passed down to the parent as `this.props.children`
If the URL is /, then <App/> will be rendered, and this.props.children will be <Search/> (this is the IndexRoute)
If the URL is /user/ziad-saab then <App/> will be rendered, and this.props.children will be <User/>
The <User/> instance will be passed a prop called `params`. It will be an object with `{username: 'ziad-saab'}`
*/
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