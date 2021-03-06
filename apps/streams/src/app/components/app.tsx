import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './header';
import Streams from './streams';
import StreamEdit from './streams/edit';
import StreamShow from './streams/show';
import StreamCreate from './streams/create';
import StreamDelete from './streams/delete';
import history from '../history';

export const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header/>
        <Switch>
          <Route
            path="/"
            exact
            component={Streams}
          />
          <Route
            path="/streams/new"
            exact
            component={StreamCreate}
          />
          <Route
            path="/streams/:streamId/edit"
            exact
            component={StreamEdit}
          />
          <Route
            path="/streams/:streamId/delete"
            exact
            component={StreamDelete}
          />
          <Route
            path="/streams/:streamId"
            exact
            component={StreamShow}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
