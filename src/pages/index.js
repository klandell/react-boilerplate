import { lazy } from 'react';

// export lazy loaded pages
export const Home = lazy(() => import(/* webpackChunkName: "home" */ './Home'));
export const Other = lazy(() =>
  import(/* webpackChunkName: "other" */ './Other'),
);
