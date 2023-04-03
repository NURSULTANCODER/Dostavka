import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Banner = () => {
  const [activeSide, setActiveSide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSide(activeSide => (activeSide + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.bannerContainer}>
      <Text style={activeSide === 0 ? styles.activeSide : styles.inactiveSide}>Side 1</Text>
      <Text style={activeSide === 1 ? styles.activeSide : styles.inactiveSide}>Side 2</Text>
      <Text style={activeSide === 2 ? styles.activeSide : styles.inactiveSide}>Side 3</Text>
      <Text style={activeSide === 3 ? styles.activeSide : styles.inactiveSide}>Side 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ccc',
    height: 50,
  },
  activeSide: {
    color: 'red',
    fontWeight: 'bold',
  },
  inactiveSide: {
    color: '#333',
    fontWeight: 'normal',
  },
});

export default Banner;
