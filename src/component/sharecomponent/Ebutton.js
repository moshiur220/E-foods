import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
export default function Ebutton(props) {
  return <Button {...props}>{props.children}</Button>;
}
