import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PageNames } from "@module/PageNames";
import { CircularButton } from "@components/CircularButton";
import { ChatIcon } from "@assets/index";

export const Login: React.FC = () => {
  const [name, setName] = React.useState("");

  const onChangeText = (text: string) => {
    setName(text);
  };

  const navigation = useNavigation();
  const onClickLogin = () => {
    navigation.navigate(PageNames.Chat, {
      name: name,
    });
  };
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.circle} />
      <View style={{ marginTop: 64 }}>
        <Image
          source={ChatIcon}
          style={{ alignSelf: "center", height: 100, width: 100 }}
        />
      </View>
      <View style={{ marginHorizontal: 32 }}>
        <Text style={loginStyles.userNameStyle}>UserName</Text>
        <TextInput
          value={name}
          onChangeText={onChangeText}
          placeholder="Enter username"
          style={loginStyles.input}
        />
        <View style={{ alignItems: "flex-end", marginTop: 64 }}>
          <CircularButton onPress={onClickLogin} />
        </View>
      </View>
      <View style={{ top: "30%", alignItems: "center" }}>
        <Text>Powered by RejectX</Text>
      </View>
    </View>
  );
};

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  circle: {
    height: 500,
    width: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#ffffff",
    position: "absolute",
    top: -20,
    left: -120,
  },
  userNameStyle: {
    fontSize: 30,
    fontWeight: "800",
    color: "#514E5A",
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    fontWeight: "600",
  },
});
