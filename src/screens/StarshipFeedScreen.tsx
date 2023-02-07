import React from "react";
import { SafeAreaView, StyleSheet, FlatList, StatusBar, View, ActivityIndicator } from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { default as data } from "../../api/data.json";
export const StarshipFeedScreen = () => {

    interface ItemProps{
        name:string;
        model:string;
        crew: number;
        hyperdrive_rating: number;
        cost_in_credits: number;
    }

    const Item  = ({name,model,crew,hyperdrive_rating,cost_in_credits} : ItemProps) => {
        const imgLink = name.replace(' ', '').toLowerCase();
        const coverImage = `https://picsum.photos/200/300`;
        return(
        <Card style={styles.card}>
          <Card.Cover source={{uri : coverImage}} />
          <Card.Content>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.body}>Model : {model}</Text>
            <Text style={styles.body}>Crew : {crew}</Text>
            <Text style={styles.body}>Hyperdrive Rating : {hyperdrive_rating}</Text>
            <Text style={styles.body}>Cost_in_credits : {cost_in_credits}</Text>
          </Card.Content>
        </Card>
        );
    }

    const renderItem = ({item} : any)=>(
        <Item name={item.name} model={item.model} crew={item.crew} hyperdrive_rating={item.hyperdrive_rating} cost_in_credits={item.cost_in_credits}/>
    );

    return (
        <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
            <FlatList
            data={data.results}
            renderItem={renderItem}
            // keyExtractor={(item) => item.id}
            />
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
});