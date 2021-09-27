import { Switch, Route } from 'react-router-dom';

import App from './containers/App';
import Home from './containers/Home';

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </App>
);

export default Routes;