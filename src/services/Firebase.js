import firebase from "firebase";
import { Alert } from "react-native";

class Fire {
  uid = "";
  messageRef = null;

  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        // Api key here
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch((error) => {
            Alert.alert(error.message);
          });
      }
    });
  };

  setUid(value) {
    this.uid = value;
  }

  getUid() {
    return this.uid;
  }

  loadMessage = (callback) => {
    this.messageRef = firebase.database().ref("messages");
    this.messageRef.off();
    const onRecieve = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        timeStamp: new Date(message.timeStamp),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messageRef.limitToLast(20).on("child_added", onRecieve);
  };

  send = (messages) => {
    for (let i = 0; i < messages.length; i++) {
      const message = {
        text: messages[i].text,
        timeStamp: firebase.database.ServerValue.TIMESTAMP,
        user: messages[i].user,
      };
      this.messageRef.push(message);
    }
  };

  closeChat = () => {
    if (this.messageRef) {
      this.messageRef.off();
    }
  };
}

export default new Fire();
