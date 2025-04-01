import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click Me" onPress={()=>Alert.alert("My title", "My Message", [{text: "Yes", onPress: ()=> {console.log("Yes")}}, {text: "No", onPress: ()=> {console.log("No")}}])}/>
      <Button 
        title="Click Me for a Prompt"
        onPress={() => Alert.prompt("My title", "My message", text => console.log(text))}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
