import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Presentation/views/home/Home";
import { ResetPasswordScreen } from "./src/Presentation/views/password/ResetPassword";
import { ProfileInfoScreen } from "./src/Presentation/views/profile/info/ProfileInfo";

export type RootStackParamList = {
  HomeScreen: undefined;
  ResetPasswordScreen: undefined;
  ProfileInfoScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{
            headerShown: false,
            title: "Recuperar Password",
          }}
        />
        <Stack.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
