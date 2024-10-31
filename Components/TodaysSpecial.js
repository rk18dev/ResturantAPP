// TodaysSpecial.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const TodaysSpecial = ({ onItemPress }) => {
  const specials = [
    { id: '1', name: 'Dosa With chutney', image: require('../assets/cooking-cuisine-delicious.jpg'),imgurl:'../assets/cooking-cuisine-delicious.jpg' },
    { id: '2', name: 'Thandoori chicken', image: require('../assets/tandoori-chicken-hindu.jpg') ,imgurl:'../assets/tandoori-chicken-hindu.jpg'},
    { id: '3', name: 'Dosa With chutney', image: require('../assets/cooking-cuisine-delicious.jpg') ,imgurl:'../assets/cooking-cuisine-delicious.jpg'},
    { id: '4', name: 'Thandoori chicken', image: require('../assets/tandoori-chicken-hindu.jpg') ,imgurl:'../assets/tandoori-chicken-hindu.jpg'}, 
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's special 😋</Text>
      <Text style={styles.subtitle}>Taste the best of the day with our freshly curated dishes!</Text>
      <FlatList
        data={specials}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onItemPress(item)}>
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FDE8D7',
    borderRadius: 8,
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 22,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 8,
  },
  itemName: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default TodaysSpecial;
