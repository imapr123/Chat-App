import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        // config file for firebase project;
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.array.forEach((items) => {
      const message = {
        text: items.text,
        timeStamp: firebase.database.ServerValue.TIMESTAMP,
        user: items.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timeStamp } = message;
    const { key: _id } = message;
    const createdAt = new Date(timeStamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_Added", (snapShot) => callback(this.parse(snapShot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database.ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
