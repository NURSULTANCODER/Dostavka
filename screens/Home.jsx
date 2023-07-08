import { View } from "react-native"
import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { DishCard } from '../components/DishCard';
import { dishes as dishItem } from '../dishes';

export const Home = () => {
  const [dishes, setDishes] = useState(dishItem)

  return (
    <View>
      <Header/>
      {dishes.length !== 0 ? dishes.map(dish => (<DishCard key={dish.id} {...dish} />)) : <></>}
    </View>
  )
}