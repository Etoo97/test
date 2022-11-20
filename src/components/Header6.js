import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const MainHeader6 = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerLeft}>
                    <Image source={require('../../assets/Sreve.png')} />
                    <Text style={styles.title1}>Customer Services{"\n"}<Text style={styles.title2}>Missing or Incorrect item</Text></Text>
                </View>

            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', margin: 28 }}>
                <Image source={require('../../assets/ETO.png')} style={{ width: 105, right: 10 }} />
                <Text style={styles.textbody2}>CHOOSE THE ORDER</Text>
                <Image source={require('../../assets/ETO.png')} style={{ width: 105, left: 10 }} />
            </TouchableOpacity>

        </>

    )
}

export default MainHeader6

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container1: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        left: 10,

    },
    textbody2: {
        fontFamily: 'Lato-Bold',
        textTransform: 'uppercase',
        letterSpacing: 0.4,
        lineHeight: 16,
        bottom: 8,
        fontSize: 12,
        color: '#072736',
        alignSelf: 'center',
    },
    title1: {
        color: 'rgba(16, 10, 31, 0.54)',
        fontFamily: 'Lato-Medium',
        letterSpacing: 0.4,
        lineHeight: 28,
        fontSize: hp('2.5%'),
        left: 5,
    },
    title2: {
        color: '#100A1F',
        fontFamily: 'Lato-Bold',
        letterSpacing: 0.4,
        lineHeight: 36,
        fontSize: hp('3%'),
        left: 5,
    },
    title3: {
        color: '#FFFFFF',
        fontFamily: 'Lato-Bold',
        letterSpacing: 0.4,
        lineHeight: 36,
        fontSize: hp('2%'),
        left: 5,
    },
    title4: {
        color: '#100A1F',
        fontFamily: 'Lato-Bold',
        letterSpacing: 0.4,
        lineHeight: 36,
        fontSize: hp('2%'),
        left: 5,
    },
  
})