import { View, Image, Text, StyleSheet } from "react-native"

export const DishCard = () => {
  return (
  <View style={styles.card}>
    <View style={styles.cardInfo}>
      <Text style={styles.name}>Ногури рамен</Text>
      <Text style={styles.outline}>Острый рамен с морепродуктами.</Text>
      <Text style={styles.price}>330 сом</Text>
      <Text style={styles.id}>id: 00123</Text>
    </View>
    <View style={styles.cards}><Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAZZFLQVIEmMyx8F0u72l_BRdXHnuThiWuQ&usqp=CAU'}} /></View>
  </View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    paddingBottom: 23,
    marginLeft: 15,
    marginRight: 15,
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  cardInfo: {

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
  }

})