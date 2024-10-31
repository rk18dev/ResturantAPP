// App.js
import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import TodaysSpecial from './Components/TodaysSpecial';
import OffersScreen from './Components/OffersScreen';
import SpecialItemModal from './Components/SpecialItemModal';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const modalRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, title: 'First Item', image: 'https://static.wixstatic.com/media/5293ad_f0c5d79fbe5d4566951895362d6b3ed2~mv2_d_4608_2592_s_4_2.jpg/v1/fill/w_447,h_310,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cooking-cuisine-delicious-941869.jpg' },
    { id: 2, title: 'Second Item', image: 'https://static.wixstatic.com/media/5293ad_54a7b9549ccc46fa9443d60a210f470d~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_447,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/biriyani-chicken-cooked-1624487.jpg' },
    { id: 3, title: 'Third Item', image: 'https://static.wixstatic.com/media/5293ad_f0c5d79fbe5d4566951895362d6b3ed2~mv2_d_4608_2592_s_4_2.jpg/v1/fill/w_447,h_310,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cooking-cuisine-delicious-941869.jpg' },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    modalRef.current?.open();
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <Carousel items={items} onViewAllPress={() => navigation.navigate('Offers')} />
      <ScrollView style={styles.scrollView}>
        <TodaysSpecial onItemPress={openModal} />
      </ScrollView>

      <SpecialItemModal ref={modalRef} item={selectedItem} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Offers" component={OffersScreen} options={{ title: 'Offers' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
});
