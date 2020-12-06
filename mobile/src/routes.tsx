import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanegesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanegesMap" component={OrphanegesMap} />
        <Screen name="OrphanageDetails" component={OrphanageDetails} />
      </Navigator>
    </NavigationContainer>
  );
};
export default Routes;
