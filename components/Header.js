import { View, Text, StyleSheet } from "react-native"

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.menu}>Menu</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    padding: 10,
    backgroundColor: '#000',
    color: 'white',
  },
  logo: {
    fontSize: 20,
    color: 'white',
  },
  menu: {
    fontSize: 20,
    color: 'white',
  }
})