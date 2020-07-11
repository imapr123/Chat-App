import React, { useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { BackButton } from "@components/BackButton";
import {
  useNavigation,
  RouteProp,
  ParamListBase,
  useRoute,
} from "@react-navigation/native";
import { GiftedChat } from "react-native-gifted-chat";
import Fire from "@services/Firebase";

export const Chat: React.FC = () => {
  const navigation = useNavigation();
  let routeParams: RouteProp<ParamListBase, string> = useRoute();
  const { params } = routeParams;
  const { name } = params;

  const [messages, setMessages] = React.useState([]);

  const user = () => {
    return {
      _id: Fire.uid,
      name: name,
    };
  };

  useEffect(() => {
    Fire.get((message: any) => {
      setMessages((previousChat) =>
        GiftedChat.append(previousChat.messages, message)
      );
    });

    return () => Fire.off();
  }, []);

  const onClickBack = () => {
    navigation.goBack();
  };

  const chat = () => {
    return <GiftedChat messages={messages} onSend={Fire.send} user={user()} />;
  };

  return (
    <>
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={30}
          enabled
        >
          {chat}
        </KeyboardAvoidingView>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
      )}
    </>
  );
};

export const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backButtonContainer: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
