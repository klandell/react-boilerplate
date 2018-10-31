import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Home, Other } from './';

const routes = (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Redirect exact from="/home" to="/" />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/other" component={() => <Other />} />
    </Switch>
  </Suspense>
);
export default routes;
