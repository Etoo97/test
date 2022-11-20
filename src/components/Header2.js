import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-shadow-cards'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Header2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerLeft}>
                <Image source={require('../../assets/Saved.png')} />
                <Text style={styles.title1}>Khazyn{"\n"}<Text style={styles.title2}>Saved Items</Text></Text>
            </View>
            <View>
                <TouchableOpacity >
                    <Card style={styles.card}>
                        <AntDesign name='delete' size={15} color='##100A1F' style={{ right: 4 }} />
                        <Text style={{ color: '#100A1F', fontFamily: 'Lato-Bold', fontSize: hp('1.4%'), lineHeight: 16, letterSpacing: 0.4 }}>Clear All</Text>
                    </Card>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header2

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
    card: {
        width: wp('30%'),
        height: 38,
        borderRadius: 146,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 18
    }
})