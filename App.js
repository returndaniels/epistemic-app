import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { initStore } from "./src/state/store";
import LoginScreen from "./src/features/Login";
import RegisterScreen from "./src/features/Register";
import HomeScreen from "./src/features/Home";
import ForgotScreen from "./src/features/Forgot";
import TermsScreen from "./src/features/Terms";

const Stack = createNativeStackNavigator();
const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Forgot">
            {(props) => <ForgotScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Register">
            {(props) => <RegisterScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Terms">
            {(props) => <TermsScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
