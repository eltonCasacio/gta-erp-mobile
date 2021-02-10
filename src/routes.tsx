import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import PayslipDownload from './pages/PayslipDownload';
import RegisterHours from './pages/RegisterHours';
import Payroll from './pages/Payroll';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      PayslipDownload,
      RegisterHours,
      Payroll,
    },
    {
      initialRouteName: 'Login',
      backBehavior: 'order',
    }
  )
);
export default Routes;
