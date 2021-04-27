import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  const [result, setResult] = useState(0);

  function justNumber() {
    var count = 0;

    Next:
    for (let i = 99; i <= 300; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue Next;
      }
       count++;
    }
    setResult( count );
  }

  return (
    <View style={styles.container}>
        <Button title="Вычислить" onPress={justNumber}/>
        <Text style={styles.paragraph}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
