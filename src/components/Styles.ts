import { StyleSheet } from "react-native";

export const backButtonStyle = StyleSheet.create({
  container: {
    display: "flex",
    alignSelf: "flex-start",
    margin: 20,
  },
  imageStyle: {
    height: 18,
    width: 25,
  },
});

export const arrowButtonStyles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#9075E3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: 18,
    width: 25,
  },
});
