import React from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import Signin from "./src/component/account/Signin";
import CreateAccount from "./src/component/account/CreateAccount";
import Restaturants from "./src/component/restaturant/Restaturants";

// Main Stack
const Stack = createStackNavigator();
const StackWithoutHeader = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Restaturants">
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Createaccount" component={CreateAccount} />
      <Stack.Screen name="Restaturants" component={Restaturants} />
    </Stack.Navigator>
  );
};
const Root = createStackNavigator();
export default () => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Root.Navigator headerMode="none">
          <Root.Screen name="Account" component={StackWithoutHeader} />
        </Root.Navigator>
      </NavigationContainer>
    );
  }
};
