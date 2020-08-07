import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import SingUp from '~/pages/SingUp';
import SingIn from '~/pages/SingIn';

const screens = {
  Main,
  SingIn,
  SingUp,
};

const config = {
  defaultNavigationOptions: {
    headerTitle: '',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#36393f',
      elevation: 0,
    },
    shadowStyle: 'none',
  },
};

const Routes = createAppContainer(createStackNavigator(screens, config));

export default Routes;
