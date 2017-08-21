import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Route, NavLink} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux';
import App from "./components/App";
import Page1 from "./components/Page1";
import Page2 from "./components/page2";
import store from './store';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      <div>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/page1">第一页</NavLink>
        <NavLink to="/page2">第二页</NavLink>
      </div>
      <Route exact path="/" component={App}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
    </div>
  </ConnectedRouter>
</Provider>, document.getElementById('root'));
