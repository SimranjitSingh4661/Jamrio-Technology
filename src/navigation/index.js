import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationService} from '../services';
import {createStackNavigator} from '@react-navigation/stack';
import config from './config';
import {WelcomeScreen} from '../screens';
import NAVIGATION from '../constants/navigation';

const Stack = createStackNavigator();

class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer ref={ref => NavigationService.setNavigatorRef(ref)}>
        <Stack.Navigator screenOptions={config}>
          <Stack.Screen
            name={NAVIGATION.SCREENS.WELCOME_SCREEN}
            component={WelcomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
