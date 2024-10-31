import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo. If not, replace with a different close icon.

const SpecialItemModal = React.forwardRef(({ item }, ref) => {
  return (
    <Modalize ref={ref} modalStyle={styles.modal} handlePosition="inside" adjustToContentHeight>
      <View style={styles.modalContent}>
        {/* Close Button */}
        {/* <TouchableOpacity style={styles.closeButton} onPress={() => ref.current?.close()}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity> */}

        {/* Only render content if item is not null */}
        {item ? (
          <>
            {typeof item.imgurl === 'string' ? (
              <Image source={{ uri: 'https://static.wixstatic.com/media/5293ad_54a7b9549ccc46fa9443d60a210f470d~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_447,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/biriyani-chicken-cooked-1624487.jpg' }} style={styles.mainImage} />
            ) : (
              <Text style={styles.errorText}>Image not available</Text>
            )}

            {/* Gallery */}
            <View style={styles.imageGallery}>
              {item.gallery && item.gallery.map((img, index) => (
                typeof img === 'string' ? (
                  <Image key={index} source={{ uri: '../assets/cooking-cuisine-delicious.jpg' }}  />
                  
                ) : (
                  <View key={index} style={styles.thumbnailPlaceholder}>
                    <Text style={styles.errorText}>No Image</Text>
                  </View>
                )
              ))}
            </View>

            {/* Details */}
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.details}>⏱️ 30mins | 📍 0.1km | 🌎 foodie, USA</Text>
            <Text style={styles.contact}>📞 {item.contact}</Text>

            {/* Call Button */}
            <TouchableOpacity style={styles.callButton}>
              <Text style={styles.callButtonText}>Call</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.loadingText}>Loading...</Text>
        )}
      </View>
    </Modalize>
  );
});

const styles = StyleSheet.create({
  modal: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
  },
  modalContent: {
    padding: 16,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top:10,
    left: '50%',
    transform: [{ translateX: -12 }],
    zIndex: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 4,
    elevation: 5,
  },
  mainImage: {
    width: '90%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  imageGallery: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 8,
  },
  thumbnailPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
  },
  contact: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  callButton: {
    backgroundColor: '#FF6347',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  callButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loadingText: {
    fontSize: 16,
    color: '#555',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});

export default SpecialItemModal;
