import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/features/Login";
import RegisterScreen from "./src/features/Register";
import HomeScreen from "./src/features/Home";
import Terms from "./src/features/Terms";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          options={{
            gestureEnabled: false,
            headerShown: true,
            headerLeft: () => null,
          }}
        >
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Forgot">
          {(props) => {
            <HomeScreen {...props} />;
          }}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {(props) => <RegisterScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Terms">
          {(props) => <Terms {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
