import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import reducers from './reducers';

test('reducers', () => {
  let state;
  state = reducers({counter:7}, {type:'DECREMENT'});
  expect(state).toEqual({counter:6});
});
