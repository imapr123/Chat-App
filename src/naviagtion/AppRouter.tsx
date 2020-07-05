import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PageNames } from "@module/PageNames";
import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { navigationRef } from "./RootNavigation";
import { Login } from "@container/Login";
import { Chat } from "@container/Chat";

const AppStack = createStackNavigator();

const AppStackScreen = () => (
  <AppStack.Navigator initialRouteName={PageNames.LogIn} headerMode="none">
    <AppStack.Screen name={PageNames.LogIn} component={Login} />
    <AppStack.Screen name={PageNames.Chat} component={Chat} />
  </AppStack.Navigator>
);

export const AppRouter: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <AppStackScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
};
