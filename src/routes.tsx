import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Payroll from './pages/Payroll';
import PayslipDownload from './pages/PayslipDownload';
import PersonalData from './pages/PersonalData';
import RegisterHours from './pages/RegisterHours';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Payroll,
      PayslipDownload,
      PersonalData,
      RegisterHours,
    },
    {
      initialRouteName: 'RegisterHours',
      backBehavior: 'order',
    }
  )
);
export default Routes;
