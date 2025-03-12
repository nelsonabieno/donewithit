import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View, Image, SafeAreaView } from 'react-native';
let x = 1;
export default function App() {
  const handlePress=()=> console.log("Text Pressed")
 
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}> Hello World!</Text>
      <Image 
        blurRadius={10}
        fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}}/>
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
