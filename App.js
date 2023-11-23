import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPassword from './src/screens/ForgotPassword';
import OTPScreen from './src/screens/OTPScreen';
import TabBar from './src/components/TabBar';
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      {
        /*
        <Stack.Navigator initialRouteName="Splash" >
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name = 'ForgotPass' component = {ForgotPassword} options = {{
          headerTitle: '',
          headerShown: true,
          cardStyle: { backgroundColor: 'white' }
        }} />
        <Stack.Screen
          name='Signup'
          component={SignUpScreen}
          options={{
            headerTitle: '',
            headerShown: true,
            cardStyle: { backgroundColor: 'white' },
          }}

          />
        <Stack.Screen name = 'OTP' component = {OTPScreen} options= {{ 
          headerTitle: '',
            headerShown: true,
            cardStyle: { backgroundColor: 'white' },}} />
      <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }} />

      </Stack.Navigator>
    */ }
    <TabBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
