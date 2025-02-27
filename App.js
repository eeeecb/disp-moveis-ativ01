// App.js
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';

const carData = [
  {
    id: 1,
    model: 'BMW - M4 G82',
    year: 'Ano: 2024',
    color: 'Cor: Branca',
    image: 'https://r44performance.com/cdn/shop/articles/BMW-G82-M4-LCI-Facelift-2024.jpg?v=1721830336&width=1500',
  },
  {
    id: 2,
    model: 'Mercedes - AMG C63',
    year: 'Ano: 2024',
    color: 'Cor: Cinza',
    image: 'https://cdn.motor1.com/images/mgl/L30gEQ/s1/2024-mercedes-amg-c63-s-e-performance-exterior.jpg',
  },
  {
  id: 3,
  model: 'Jaguar - F-Type',
  year: 'Ano: 2024',
  color: 'Cor: Chumbo',
  image: 'https://media.ed.edmunds-media.com/jaguar/f-type/2024/oem/2024_jaguar_f-type_coupe_p575-r75_fq_oem_1_1600.jpg',
  },
  {
  id: 4,
  model: 'Audi - RS4 Avant',
  year: 'Ano: 2024',
  color: 'Cor: Amarelo',
  image: 'https://brutalautomotiva.com.br/wp-content/uploads/2024/06/Audi-RS4-Avant-25-Anos-6.jpg',
  },
];

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Text style={styles.header}>Carros</Text>
      <ScrollView style={styles.scrollView}>
        {carData.map((car) => (
          <View key={car.id} style={styles.carCard}>
            <Image
              style={styles.carImage}
              source={{
                uri: car.image,
              }}
            />
            <View style={styles.carInfo}>
              <Text style={styles.carModel}>{car.model}</Text>
              <Text style={styles.carDetails}>{car.year}</Text>
              <Text style={styles.carDetails}>{car.color}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
    padding: 15,
    paddingBottom: 10,
    color: '#333',
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  carCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  carImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  carInfo: {
    padding: 15,
  },
  carModel: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  carDetails: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
});