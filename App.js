import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { KeyboardProvider } from "react-native-keyboard-controller"
import { SafeAreaProvider } from "react-native-safe-area-context"
import * as ExpoSplashScreen from "expo-splash-screen"


ExpoSplashScreen.preventAutoHideAsync()

export default function App() {
  useEffect(() => {
    const showSplashLonger = async () => {
      await new Promise((r) => setTimeout(r, 2000))
      await ExpoSplashScreen.hideAsync()
    }
    showSplashLonger()
	}, [])

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <KeyboardProvider
          navigationBarTranslucent
          statusBarTranslucent
        >
              <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar
											translucent
											animated
											style="light"
										/>
              </View>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
