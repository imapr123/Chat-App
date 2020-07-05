import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PageNames } from "@module/PageNames";

export const Login: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <Button title="click" onPress={() => navigation.navigate(PageNames.Chat)}>
        Click me
      </Button>
    </View>
  );
};
