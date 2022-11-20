import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header1= () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerLeft}>
                <Image source={require('../../assets/deas.png')} />
                <Text style={styles.title1}>Shop By Top{"\n"}<Text style={styles.title2}>Deals</Text></Text>
            </View>
        </View>
    )
}

export default Header1

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        

    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 10,
      
    },
    title1: {

        color: 'rgba(16, 10, 31, 0.54)',
        fontFamily: 'Lato-Medium',
        letterSpacing: 0.4,
        lineHeight: 28,
        fontSize: 18,
        left: 5,
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