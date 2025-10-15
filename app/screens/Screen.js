import React from "react";
import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children }) {
  return <SafeAreaView style={StyleSheet.screeen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
