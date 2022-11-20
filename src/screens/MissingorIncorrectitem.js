import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MainHeader7 from '../components/MainHeader7'
import Header6 from '../components/Header6'
import TripsList14 from '../components/TripsList14'



const MissingorIncorrectitem = () => {
  return (
    <View style={styles.container}>
      <MainHeader7 />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header6 />
        <TripsList14 />
      </ScrollView>
    </View>
  )
}

export default MissingorIncorrectitem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
})

