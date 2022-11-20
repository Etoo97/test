import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MainHeader8 from '../components/MainHeader8'
import Header7 from '../components/Header7'
import TripsList14 from '../components/TripsList14'



const IssuewithDeliveryrider = () => {
  return (
    <View style={styles.container}>
      <MainHeader8 />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header7/>
        <TripsList14 />
      </ScrollView>
    </View>
  )
}

export default IssuewithDeliveryrider

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
})

