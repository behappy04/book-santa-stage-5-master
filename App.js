import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
