import React from "react";
import { SafeAreaView, StyleSheet, FlatList, StatusBar, View, Image, } from "react-native";
import { Button, Card, Text } from 'react-native-paper';


export const ArticleDetailsScreen = ({ route }: any) => {
  const { imgLink, ArticleTitle, newsSite, ArticleDescription } = route.params;
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: imgLink }} />
      <Card.Content>
        <Text style={styles.title}>{JSON.stringify(ArticleTitle)}</Text>
        <Text style={styles.body}>News Site : {JSON.stringify(newsSite)}</Text>
        <Text style={styles.body}>{JSON.stringify(ArticleDescription)}</Text>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#FFFFFFF9',
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  block: {
    padding: 20,
    margin: 10,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  view: {
    padding: 10,
    margin: 'auto',
    maxWidth: '100',
    backgroundColor: 'white',
  },
  image: {

  },
  title: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  body: {
    color: 'black',
    fontSize: 16,
  },
  button: {
    margin: 'auto',
  },
});