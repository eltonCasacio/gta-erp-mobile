import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './pages/Login';

import RegisterHours from './pages/RegisterHours';
import PayslipDownload from './pages/PayslipDownload';
import Payroll from './pages/Payroll';
import PersonalData from './pages/PersonalData';

import * as S from './styles/principal';
import Theme from './styles/Theme';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            headerMode="none"
            screenOptions={{
              cardStyle: {backgroundColor: Theme.Colors.primary},
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="RegisterHours" component={RegisterHours} />
            <Stack.Screen name="PayslipDownload" component={PayslipDownload} />
            <Stack.Screen name="Payroll" component={Payroll} />
            <Stack.Screen name="PersonalData" component={PersonalData} />
          </Stack.Navigator>
        </NavigationContainer>
      </S.Container>
    </S.Wrapper>
  );
};
export default Routes;
