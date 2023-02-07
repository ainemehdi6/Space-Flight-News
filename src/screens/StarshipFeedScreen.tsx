import React from "react";
import { SafeAreaView, StyleSheet, FlatList, StatusBar, View, ActivityIndicator } from "react-native";
import { Button, Card, Text } from 'react-native-paper';
import { useImage } from "./hooks/imagehook";
import { useStarships } from "./hooks/useStarships";


export const StarshipFeedScreen = () => { 
    const StarshipRenderer  = ({ item } : any) => {
        const imgLink = useImage;
        return(
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.body}>Model : {item.model}</Text>
            <Text style={styles.body}>Crew : {item.crew}</Text>
            <Text style={styles.body}>Hyperdrive Rating : {item.hyperdrive_rating}</Text>
            <Text style={styles.body}>Cost_in_credits : {item.cost_in_credits}</Text>
          </Card.Content>
          <Card.Actions style={styles.button}>
            <Button >Buy Starship</Button>
          </Card.Actions>
        </Card>
        );
    }

    const StarshipList = () => {
      const { data, status, error } = useStarships();
    
      if (status === "loading") {
        return <Text>Loading starships...</Text>;
      }
    
      if (error) {
        return <Text>An error occured while loading starships</Text>;
      }
    
      return (
        <FlatList
          data={data.results}
          renderItem={StarshipRenderer}
          keyExtractor={item => item.name}
        />
      );
    };

    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          {StarshipList()}
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'grey',
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  block:{
    padding:20,
    margin:10,
    backgroundColor:'white',
    borderRadius:20,
  },
  card: {
    marginBottom: 20,
  },
  title: {
    marginTop:10,
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