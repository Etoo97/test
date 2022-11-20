import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MainHeader4 from '../components/MainHeader4'
import Header3 from '../components/Header3'
import TripsList12 from '../components/TripsList12'



const Notifications = () => {
  return (
    <View style={styles.container}>
      <MainHeader4 />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header3 />
        <TripsList12 />
      </ScrollView>

    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
})

