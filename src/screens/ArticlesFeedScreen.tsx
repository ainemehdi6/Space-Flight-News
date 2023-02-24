import React from "react";
import { SafeAreaView, StyleSheet, FlatList, StatusBar, View, ActivityIndicator } from "react-native";
import { Button, Card, Text } from 'react-native-paper';
import { useArticle } from "./hooks/useArticles";


export const ArticlesScreen = ({ navigation }: any) => {
  const ArticleRenderer = ({ item }: any) => {
    const imgLink = item.imageUrl;
    const newsSite = item.newsSite
    const ArticleTitle = item.title;
    const ArticleDescription = item.summary;
    return (
      <Card style={styles.card}>
        <Card.Cover source={{ uri: imgLink }} />
        <Card.Content>
          <Text style={styles.title}>{ArticleTitle}</Text>
          <Text style={styles.body}>News Site : {newsSite}</Text>
        </Card.Content>
        <Card.Actions style={styles.button}>
          <Button onPress={() => navigation.navigate("Article", { imgLink: imgLink, ArticleTitle: ArticleTitle, newsSite: newsSite, ArticleDescription: ArticleDescription })}>Read More</Button>
        </Card.Actions>
      </Card>
    );
  }

  const ArticleList = () => {
    const { data, status, error } = useArticle();

    if (status === "loading") {
      return <Text>Loading Articles...</Text>;
    }

    if (error) {
      return <Text>An error occured while loading Articles</Text>;
    }

    return (
      <FlatList
        data={data}
        renderItem={ArticleRenderer}
        keyExtractor={item => item.id}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ArticleList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  block: {
    padding: 20,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#FFFFFFF9',
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