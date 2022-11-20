import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MainHeader2 from '../components/MainHeader2'
import Header1 from '../components/Header1'
import { TOP_PLACES, TOP_PLACES1 } from '../data'
import TopPlacesCarousel from '../components/TopPlacesCarousel'
import TripsList7 from '../components/TripsList7'
import TopPlacesCarousel1 from '../components/TopPlacesCarousel1'
import TripsList8 from '../components/TripsList8'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DealsScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader2 />

      <ScrollView showsVerticalScrollIndicator={false}>

        <Header1 />
        <TopPlacesCarousel list={TOP_PLACES} />
        <View style={{ paddingRight: 14, paddingLeft: 14 }}>
        
          <TripsList7 />
          <TopPlacesCarousel1 list={TOP_PLACES1} />
          <TripsList8 />
        </View>


      </ScrollView >
    </View >
  )
}

export default DealsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",


  },
})