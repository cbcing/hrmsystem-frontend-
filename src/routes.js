import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
// import Simple from './containers/Simple/'

import Dashboard from './views/Dashboard/'
import Qrcodes from './views/Links/'
import Qrcode from './views/Links/Qrcode'
import QrcodeEdit from './views/Links/QrcodeEdit'

export default (
  <Router history={hashHistory}>
    <Route path="/" name="首页" component={Full}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard2" component={Dashboard}/>
      <Route path="links/" name="推广">
        <IndexRoute component={Qrcodes}/>
        <Route path="qrcodes" name="全部二维码" component={Qrcodes}/>
        <Route path="qrcode" name="新建二维码" component={Qrcode}/>
        <Route path="qrcode/(:id)" name="查看二维码" component={QrcodeEdit} />
      </Route>
    </Route>
  </Router>
);
