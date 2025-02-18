import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/screens/RootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator Home={undefined} FlatListScreen={undefined}/>
    </NavigationContainer>
  );
};

export default App;
