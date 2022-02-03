import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './src/navigation/RootStack/RootStack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
