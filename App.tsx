/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import { AppRouter } from "naviagtion/AppRouter";

const App: React.FC = () => {
  return <AppRouter />;
};

export default App;
