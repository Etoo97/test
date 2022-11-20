import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MainHeader3 from '../components/MainHeader3'
import Header2 from '../components/Header2'
import TripsList11 from '../components/TripsList11'

const SavedItems = () => {
  return (
    <View style={styles.container}>
      <MainHeader3 />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header2 />
        <TripsList11 />
      </ScrollView>

    </View>
  )
}

export default SavedItems

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
})

