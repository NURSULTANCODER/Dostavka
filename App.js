import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header';
import { DishCard } from './components/DishCard';
import Banner from './components/Banner';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Banner />
      <Header/>
      <DishCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'start',
    justifyContent: 'center',
  },
});
