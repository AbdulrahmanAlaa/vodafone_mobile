import { createStackNavigator } from 'react-navigation'
import Register from './screens/Register/Register';
import Aux from './containers/hoc/hoc';

import {NetInfo} from 'react-native';



NetInfo.getConnectionInfo().then((connectionInfo) => {
  console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
});
function handleFirstConnectivityChange(connectionInfo) {
  console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
  // NetInfo.removeEventListener(
  //   'connectionChange',
  //   handleFirstConnectivityChange
  // );
}
NetInfo.addEventListener(
  'connectionChange',
  handleFirstConnectivityChange
);



const navigationStack = createStackNavigator({
  Home: {
    screen: Aux
  },
  Register: {
    screen: Register
  }
},
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)

export default navigationStack;