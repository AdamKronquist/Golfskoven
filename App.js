import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import minigolfReducer from './store/reducers/minigolf';
import petanqueReducer from './store/reducers/petanque';

import Navigator from './navigation/Navigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const rootReducer = combineReducers({
  minigolf: minigolfReducer,
  petanque: petanqueReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const loadFonts = () => {
  return Font.loadAsync({
    'Pluto-Heavy': require('./assets/fonts/PlutoCondHeavy.ttf'),
    'Pluto-Bold': require('./assets/fonts/PlutoCondBold.ttf'),
    'Pluto-Medium': require('./assets/fonts/PlutoCondMedium.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
  //<StatusBar style="auto" />
}
