import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { TOP_PLACES, TOP_PLACES1 } from '../data'
import MainHeader from '../components/MainHeader'
import TopPlacesCarousel from '../components/TopPlacesCarousel'
import MainCenter from '../components/MainCenter'
import TripsList from '../components/TripsList'
import MainCenter1 from '../components/MainCenter1'
import TripsList1 from '../components/TripsList1'
import TopPlacesCarousel1 from '../components/TopPlacesCarousel1'
import MainCenter2 from '../components/MainCenter2'
import TripsList2 from '../components/TripsList2'
import MainCenter3 from '../components/MainCenter3'
import TripsList3 from '../components/TripsList3'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <ScrollView showsVerticalScrollIndicator={false} >
        <TopPlacesCarousel list={TOP_PLACES} />
        <View style={{ paddingRight: 14, paddingLeft: 14 }}>
          <MainCenter />
          <TripsList />
          <MainCenter1 />
          <TripsList1 />
          <TopPlacesCarousel1 list={TOP_PLACES1} />
          <MainCenter2 />
          <TripsList2 />
          <MainCenter3 />
          <TripsList3 />
        </View>


      </ScrollView>

    </View>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
})