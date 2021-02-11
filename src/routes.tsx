import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import PayslipDownload from './pages/PayslipDownload';
import RegisterHours from './pages/RegisterHours';
import Payroll from './pages/Payroll';
import PersonalData from './pages/PersonalData';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      PayslipDownload,
      RegisterHours,
      Payroll,
      PersonalData,
    },
    {
      initialRouteName: 'Login',
      backBehavior: 'order',
    }
  )
);
export default Routes;
