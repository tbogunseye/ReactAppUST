import * as React from 'react';
import { Button, Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! Get the latest news here.</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text 
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
        "The definition of insanity is performing the same action over and over again, and expecting a different result." - Albert Einstein
      </Text>
      <Pressable style={styles.button} onPress={() => {navigation.navigate('Articles')}}>
        <Text style={styles.buttonText}>Show News</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    getStartedText: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 32
  },
  button: {
    backgroundColor: '#0F52BA',
    padding: 12,
    borderRadius: 13,
    paddingVertical: 12,
    paddingHorizontal: 32
  },
  buttonText: {
    fontSize: 22,
    color: 'white'
  }
});
