import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import PayslipDownload from './pages/PayslipDownload';
import RegisterHours from './pages/RegisterHours';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      PayslipDownload,
      RegisterHours,
    },
    {
      initialRouteName: 'Login',
      backBehavior: 'order',
    }
  )
);
export default Routes;
