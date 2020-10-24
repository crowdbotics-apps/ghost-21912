import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item159625Navigator from '../features/Add-Item159625/navigator';
import Maps159621Navigator from '../features/Maps159621/navigator';
import UserProfile159617Navigator from '../features/UserProfile159617/navigator';
import Settings159580Navigator from '../features/Settings159580/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item159625: { screen: Add-Item159625Navigator },
Maps159621: { screen: Maps159621Navigator },
UserProfile159617: { screen: UserProfile159617Navigator },
Settings159580: { screen: Settings159580Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
