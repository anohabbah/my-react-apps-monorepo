import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Streams from './streams';
import StreamCreate from './streams/create';
import StreamEdit from './streams/edit';
import StreamDelete from './streams/delete';
import StreamShow from './streams/show';
import Header from './header';

export const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header/>
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
          path="/streams/edit"
          exact
          component={StreamEdit}
        />
        <Route
          path="/streams/delete"
          exact
          component={StreamDelete}
        />
        <Route
          path="/streams/show"
          exact
          component={StreamShow}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
