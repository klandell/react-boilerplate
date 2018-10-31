import React, { lazy, Suspense } from 'react';

const suspensefulFactory = Cmp => () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Cmp />
  </Suspense>
);

export const Lazy = suspensefulFactory(
  lazy(() => import(/* webpackChunkName: "lazy" */ './Lazy')),
);
