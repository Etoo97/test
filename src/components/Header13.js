import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ImageTripsList from '../data/ImageTripsList'

const Header13 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerLeft}>
                <Image source={ImageTripsList.Eggs} />
                <Text style={styles.title1}>Shop By Top{"\n"}<Text style={styles.title2}>Categories</Text></Text>
            </View>
        </View>
    )
}

export default Header13

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 10

    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        

    },
    title1: {

        color: 'rgba(16, 10, 31, 0.54)',
        fontFamily: 'Lato-Medium',
        letterSpacing: 0.4,
        lineHeight: 28,
        fontSize: 18,
      
    },
    title2: {
        color: '#100A1F',
        fontFamily: 'Lato-Bold',
        letterSpacing: 0.4,
        lineHeight: 36,
        fontSize: 22,
        left: 5,
    },
})