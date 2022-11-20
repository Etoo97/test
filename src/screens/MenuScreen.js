import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCOM from '../components/CategoriesCOM'
import MainHeader1 from '../components/MainHeader1'
import MainCenter7 from '../components/MainCenter7'
import TripsList9 from '../components/TripsList9'
import TripsList10 from '../components/TripsList10'
import Fotter from '../components/Fotter'
const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader1 />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainCenter7 />
        <TripsList9 />
        <TripsList10 />
        <Fotter />
      </ScrollView>

    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    bottom:10

  },
})

