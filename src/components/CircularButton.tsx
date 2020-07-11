import React, { Component } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { WhiteArrow } from "@assets/index";
import { arrowButtonStyles } from "./Styles";

export interface CircularButtonProps {
  onPress: () => void;
}

export const CircularButton: React.FC<CircularButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={[arrowButtonStyles.container]} onPress={onPress}>
      <Image source={WhiteArrow} style={arrowButtonStyles.imageStyle} />
    </TouchableOpacity>
  );
};
