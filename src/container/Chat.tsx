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
    Fire.loadMessage((message: any) => {
      setMessages((previousChat) => {
        return GiftedChat.append(previousChat, message);
      });
    });

    return () => Fire.closeChat();
  }, []);

  const onClickBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BackButton onClick={onClickBack} />
        <Text style={{ fontSize: 18 }}>Chat</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(message) => Fire.send(message)}
        user={{
          _id: Fire.getUid(),
          name: name,
        }}
      />
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
