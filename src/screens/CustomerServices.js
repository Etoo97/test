import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MainHeader5 from '../components/MainHeader5'
import Header4 from '../components/Header4'
import TripsList13 from '../components/TripsList13'



const CustomerServices = () => {
  return (
    <View style={styles.container}>
      <MainHeader5 />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header4 />
        <TripsList13 />
      </ScrollView>

    </View>
  )
}

export default CustomerServices

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
})

