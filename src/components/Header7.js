import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-shadow-cards'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const MainHeader7 = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerLeft}>
                    <Image source={require('../../assets/Sreve.png')} />
                    <Text style={styles.title1}>Customer Services{"\n"}<Text style={styles.title2}>Issue with Delivery rider</Text></Text>
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

export default MainHeader7

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
    card: {
        width: wp('25%'),
        height: hp('5%'),
        borderRadius: 146,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 18
    },
    card1: {
        backgroundColor: '#452C7A',
        width: wp('45%'),
        height: hp('6.8%'),
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
        marginRight: 5,
        marginLeft: 5,
        justifyContent: 'center',
        paddingRight: 5

    },
    card2: {
        backgroundColor: '#FFFFFF',
        width: wp('45%'),
        height: hp('6.8%'),
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
        marginRight: 5,
        marginLeft: 5,
        justifyContent: 'center',
        paddingRight: 5

    }
})