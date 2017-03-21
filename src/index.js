import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import { createStore, applyMiddleware } from redux

/*创建Redux的Store。
  应该传入Reducer以便让Redux知道如何处理传入的Action
*/

const store = createStore(
	() => {}
)

ReactDOM.render(
  <Router routes={routes} history={hashHistory} />, document.getElementById('root')
);
