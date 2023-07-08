import { View, Image, Text, StyleSheet } from "react-native"

export const DishCard = ({id, name, description, img, price}) => {
  return (
  <View style={styles.card}>
    <View style={styles.cardInfo}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.outline}>{description}</Text>
      <Text style={styles.price}>{price} сом</Text>
      <Text style={styles.id}>id: 0012{id}</Text>
    </View>
    <View style={styles.cards}><Image style={styles.tinyLogo} source={{uri: img }} /></View>
  </View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 23,
    marginLeft: 15,
    marginRight: 15,
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  cardInfo: {
    marginRight: 20,
  },
  name: {
    fontSize: 16,
    color: '#333',
    fontWeight: 600,
    marginBottom: 3,
  },
  outline: {
    fontSize: 12,
    color: '#828282',
    fontWeight: 400,
    marginBottom: 8,
    width: 260
  },
  price: {
    fontSize: 14,
    color: '#333',
    fontWeight: 500,
    marginBottom: 5,
  },
  id: {
    fontSize: 12,
    color: '#2F80ED',
    fontWeight: 400,
  },
  tinyLogo: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },

})