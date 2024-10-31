// Navbar.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.container}>
      {/* App Logo on the left */}
      <Image
        source={require('../assets/logo.png')} // Add your app logo image in the assets folder and update the path
        style={styles.logo}
      />
      
      {/* Profile Picture on the right */}
      <Image
        source={require('../assets/profile_logo.png')} // Add your profile picture in the assets folder and update the path
        style={styles.profilePic}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
});
