import React, { Component } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { BackArrow } from "@assets/index";
import { backButtonStyle } from "./Styles";

export interface BackButtonProps {
  onClick: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={1}
      style={backButtonStyle.container}
    >
      <Image source={BackArrow} style={backButtonStyle.imageStyle} />
    </TouchableOpacity>
  );
};
