import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const OffersScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Offers 🔥</Text>
        <Text style={styles.subtitle}>special offers on the tastiest dishes, just for you!</Text>
      </View>

      {/* Filters */}
      <View style={styles.filters}>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={styles.filterText}>Newest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Free Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Fastest Delivery</Text>
        </TouchableOpacity>
      </View>

      {/* Special Offers Banner */}
      <View style={styles.specialOfferBanner}>
        <Text style={styles.specialOfferText}>Special OFFERS For You</Text>
        <Text style={styles.specialOfferSubText}>upto 60% OFF</Text>
      </View>

      {/* Offer Cards */}
      <View style={styles.offerCard}>
        <Image source={require('../assets/cooking-cuisine-delicious.jpg')} style={styles.offerImage} />
        <Text style={styles.offerTitle}>Special Offer</Text>
        <Text style={styles.offerDate}>15 December 2023</Text>
        <Text style={styles.offerDescription}>Come and celebrate with us! Get our special promo BUY 1 GET 1 FREE.</Text>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>SAVE THE DATE!</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.offerCard, styles.blueCard]}>
        <Image source={require('../assets/tandoori-chicken-hindu.jpg')} style={styles.offerImage} />
        <Text style={styles.offerTitle}>Delicious Pizza</Text>
        <Text style={styles.offerDescription}>Get 1 free delivery when you order healthy food.</Text>
      </View>

      <View style={[styles.offerCard, styles.greenCard]}>
        <Image source={require('../assets/cooking-cuisine-delicious.jpg')} style={styles.offerImage} />
        <Text style={styles.offerTitle}>Healthy Food Menu</Text>
        <Text style={styles.offerDescription}>Now Available online. Enjoy our healthy menu!</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeFilter: {
    borderColor: '#32CD32',
  },
  filterText: {
    color: '#333',
  },
  specialOfferBanner: {
    backgroundColor: '#9A4DFF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 16,
  },
  specialOfferText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialOfferSubText: {
    color: '#fff',
    fontSize: 14,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  blueCard: {
    backgroundColor: '#2B4F81',
    color: '#fff',
  },
  greenCard: {
    backgroundColor: '#9ACD32',
  },
  offerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  offerDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  offerDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  saveButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OffersScreen;
