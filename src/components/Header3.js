import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-shadow-cards'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const MainHeader3 = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerLeft}>
                    <Image source={require('../../assets/NO.png')} />
                    <Text style={styles.title1}>Check Your{"\n"}<Text style={styles.title2}>Notifications</Text></Text>
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
            <View style={styles.container1}>
                <TouchableOpacity>
                    <Card style={styles.card1}>
                        <MaterialIcons name='notifications-on' size={20} color='#ffffff' />
                        <Text style={styles.title3}>Offers & New</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Card style={styles.card2}>
                        <MaterialIcons name='shopping-cart' size={20} color='#100A1F' />
                        <Text style={styles.title4}>Your Orders</Text>
                    </Card>
                </TouchableOpacity>
            </View>
        </>

    )
}

export default MainHeader3

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
    title1: {
        color: 'rgba(16, 10, 31, 0.54)',
        fontFamily: 'Lato-Medium',
        letterSpacing: 0.4,
        lineHeight: 28,
        fontSize: hp('3.12%'),
        left: 5,
    },
    title2: {
        color: '#100A1F',
        fontFamily: 'Lato-Bold',
        letterSpacing: 0.4,
        lineHeight: 36,
        fontSize: hp('3.6%'),
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