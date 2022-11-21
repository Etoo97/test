import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MainHeader1 from '../components/MainHeader1'
import MainHeader10 from '../components/MainHeader10'
import Landing from '../components/Landing'
import Body from '../components/Body'
import MainCenter8 from '../components/MainCenter8'
import TripsList2 from '../components/TripsList2'
import MainCenter9 from '../components/MainCenter9'
import TripsList17 from '../components/TripsList17'
import TripsList15 from '../components/TripsList15'

const AddCard = () => {
    return (
        <View style={styles.container}>
            <MainHeader1 />
            <MainHeader10 />
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#ffffff',borderTopRightRadius:16,borderTopLeftRadius:16,paddingLeft:14,paddingRight:14}}>
                <Landing />
                <Body />
                <MainCenter8 />
                <TripsList2 />
                <MainCenter8 />
                <TripsList15 />
                <MainCenter9 />
                <TripsList17 />
            
            </ScrollView>

        </View>
    )
}

export default AddCard


const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
})