import React from "react";
import { SafeAreaView, StyleSheet, FlatList, StatusBar, View, Image, ActivityIndicator } from "react-native";
import { Button, Card, Text } from 'react-native-paper';
import { useArticleDetails } from "./hooks/useArticleDetails";


export const ArticleDetailsScreen = () => {
  const ArticleRenderer = ({ item }: any) => {
    const imgLink = item.imageUrl;
    console.log(item);
    return (
      <React.Fragment>
        <Image source={{ uri: imgLink }} />
        < Text style={styles.title} > {item.title}</Text>
        <Text style={styles.body}>News Site : {item.newsSite}</Text>
      </React.Fragment>
    )
  }

  const ArticleList = () => {
    const { data, status, error } = useArticleDetails();

    if (status === "loading") {
      return <Text>Loading Article Details...</Text>;
    }

    if (error) {
      return <Text>An error occured while loading Article Details</Text>;
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
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'grey',
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
  view: {
    padding: 10,
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