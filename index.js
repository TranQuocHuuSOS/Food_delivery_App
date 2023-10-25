/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import Profile from './Screen/Profile/Profile';

AppRegistry.registerComponent(appName, () => Profile);