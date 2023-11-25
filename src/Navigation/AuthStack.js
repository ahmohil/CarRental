import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "../screens/ForgotPassword";
import LoginScreen from "../screens/LoginScreen";
import OTPScreen from "../screens/OTPScreen";
import ResetPassword from "../screens/ResetPassword";
import SignUpScreen from "../screens/SignUpScreen";

const AuthStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ForgotPass' component={ForgotPassword} options={{
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
            <Stack.Screen
                name='ResetPass'
                component={ResetPassword}
                options={{
                    headerTitle: '',
                    headerShown: true,
                    cardStyle: { backgroundColor: 'white' },
                }}

            />
            <Stack.Screen name='OTP' component={OTPScreen} options={{
                headerTitle: '',
                headerShown: true,
                cardStyle: { backgroundColor: 'white' },
            }} />

        </Stack.Navigator>
    );
};

export default AuthStack;
