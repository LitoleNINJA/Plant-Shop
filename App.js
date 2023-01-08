import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import Plant from './src/screens/Plant';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{
              headerShown: false
            }} name="Welcome" component={WelcomeScreen} />
            <Stack.Screen options={{
              headerShown: false
            }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{
              headerShown: false
            }} name="Plant" component={Plant} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}