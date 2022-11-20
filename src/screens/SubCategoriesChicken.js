import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MainHeader2 from '../components/MainHeader2'
import Header11 from '../components/Header11'
import MainCenter4 from '../components/MainCenter4'
import TripsList4 from '../components/TripsList4'
import MainCenter5 from '../components/MainCenter5'
import { TOP_PLACES, TOP_PLACES1 } from '../data'
import TopPlacesCarousel1 from '../components/TopPlacesCarousel1'
import TripsList1 from '../components/TripsList1'
import MainCenter3 from '../components/MainCenter3'
import TripsList5 from '../components/TripsList5'
import MainCenter6 from '../components/MainCenter6'
import TripsList6 from '../components/TripsList6'
const SubCategoriesChicken = () => {
  return (
    <View style={styles.container}>
      <MainHeader2 />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Header11 />
        <MainCenter4 />
        <TripsList4 />
        <MainCenter5 />
        <TripsList1 />
        <TopPlacesCarousel1 list={TOP_PLACES1} />
        <MainCenter3 />
        <TripsList5 />
        <MainCenter6 />
        <TripsList6 />
    
      
      </ScrollView>
    </View>
  )
}

export default SubCategoriesChicken

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
})

