import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import RootStack from './src/navigation/RootStack/RootStack';
import store, {persistor} from './src/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
