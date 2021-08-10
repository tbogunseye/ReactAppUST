import data from './news-data.json';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

export const article = data.articles;

export const Item = ({ title, description, urlToImage }) => (
  <View>
    <Text style = {styles.title}>{title}</Text>
    <Text style = {styles.getStartedText}>{description}</Text>
    <Image source = {urlToImage} />
  </View>
);

export const App = () => {
  const renderItem = ({ item }) => (
    <Item
     title={item.title}
     urlToImage={item.urlToImage}
     description={item.description}

      />
  );

  return (
    <SafeAreaView style = {styles.container}>
      <FlatList
        data={article}
        renderItem={renderItem}
        keyExtractor={item => item.publishedAt}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    getStartedText: {
    fontSize: 13,
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 32,
    marginLeft: 5
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