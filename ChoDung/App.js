import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelCome from './src/screen/WelCome'
import Navigition from './src/screen/Navigition'
import Login from './src/screen/Login'
import Register from './src/screen/Register'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Thêm màn hình đăng nhập đăng kí ở đây */}
        {/* Thằng  Stack.Screen nào ở trên thì nó chạy vào trước*/}
        {/* Ví dụ khi đăng nhập xong sẽ vào thằng Navigition */}
        <Stack.Screen name="WelCome" component={WelCome} options={{ headerShown: false }} />
        <Stack.Screen name="Navigition" component={Navigition} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

