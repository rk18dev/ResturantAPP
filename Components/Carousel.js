// Carousel.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions ,TouchableOpacity} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Carousel = ({ items, onViewAllPress }) => {
  return (
    <View style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Offers 🔥</Text>
        <TouchableOpacity onPress={onViewAllPress} style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>special offers on the tastiest dishes, just for you!</Text>

      {/* Carousel */}
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={screenWidth * 0.8} // Snap interval slightly smaller than screen width
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, index === 0 && styles.firstItem]}>
            <TouchableOpacity onPress={onViewAllPress} style={styles.viewAllButton}>
            <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  flatListContainer: {
    paddingLeft: 10,  // Adds space at the beginning of the list
  },
  itemContainer: {
    width: screenWidth * 0.9,  // Set item width slightly smaller than screen width
    marginRight: 7, // Space between items
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  firstItem: {
    width: screenWidth * 0.9,  // Make the first item slightly wider
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
});

export default Carousel;
