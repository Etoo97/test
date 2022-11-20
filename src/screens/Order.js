import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MainHeader6 from '../components/MainHeader6'
import Header5 from '../components/Header5'
import TripsList14 from '../components/TripsList14'



const Order = () => {
  return (
    <View style={styles.container}>
      <MainHeader6 />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header5 />
        <TripsList14 />
      </ScrollView>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
})

