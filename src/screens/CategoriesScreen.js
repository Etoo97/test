import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCOM from '../components/CategoriesCOM'
import MainHeader1 from '../components/MainHeader1'
const CategoriesScreen = ( ) => {
  return (
    <View style={styles.container}>
      <MainHeader1 />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriesCOM />
      </ScrollView>

    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
})

