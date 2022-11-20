import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'
import ImageTripsList from '../data/ImageTripsList'
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const TripsList14 = () => {
    const navigation = useNavigation();
    return (

        <View
            style={{
                alignItems: 'center',
            }}>
            <TouchableOpacity>
                <Card style={styles.foodCon}>
                    <TouchableOpacity style={styles.foodClickArea}>
                        <Image source={require('../../assets/ARR.png')} style={{ bottom: 10 }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: '#100A1F', fontFamily: 'Lato-Medium', fontSize: hp('2.3%'), lineHeight: 28, letterSpacing: 0.2, top: 8, right: 25 }}>Order ID</Text>
                        <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#B9B8BE', fontSize: hp('2%'), right: 25 }}>#12345678900</Text>
                        <View style={{ flexDirection: 'row', top: 50, right: 70 }}>
                            <MaterialIcons name='watch-later' size={20} color='#B9B8BE' />
                            <Text style={{ fontFamily: 'Lato-Bold', color: 'rgba(16, 10, 31, 0.54)', fontSize: hp('1.8%') }}>  01:49pm   </Text>
                            <FontAwesome5 name='calendar-alt' size={20} color='#B9B8BE' />
                            <Text style={{ fontFamily: 'Lato-Bold', color: 'rgba(16, 10, 31, 0.54)', fontSize: hp('1.8%') }}>  19 Sep 2022</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={{ flexDirection: 'row', right: 80, marginTop: 15 }}>
                        <Text style={{ fontFamily: 'Lato-Bold', fontSize: hp('2%'), letterSpacing: 0.04, color: '#B9B8BE' }}>Status:{"\n"}<Text style={{ fontFamily: 'Lato-Bold', fontSize: hp('2%'), letterSpacing: 0.04, color: '#F68B21' }}>Out for Delivery</Text></Text>
                        <Image source={require('../../assets/Right.png')} style={{ left: 10 }} />

                    </TouchableOpacity>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card style={styles.foodCon}>
                    <TouchableOpacity style={styles.foodClickArea}>
                        <Image source={require('../../assets/ARR.png')} style={{ bottom: 10 }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: '#100A1F', fontFamily: 'Lato-Medium', fontSize: hp('2.3%'), lineHeight: 28, letterSpacing: 0.2, top: 8, right: 25 }}>Order ID</Text>
                        <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#B9B8BE', fontSize: hp('2%'), right: 25 }}>#12345678900</Text>
                        <View style={{ flexDirection: 'row', top: 50, right: 70 }}>
                            <MaterialIcons name='watch-later' size={20} color='#B9B8BE' />
                            <Text style={{ fontFamily: 'Lato-Bold', color: 'rgba(16, 10, 31, 0.54)', fontSize: hp('1.8%') }}>  01:49pm   </Text>
                            <FontAwesome5 name='calendar-alt' size={20} color='#B9B8BE' />
                            <Text style={{ fontFamily: 'Lato-Bold', color: 'rgba(16, 10, 31, 0.54)', fontSize: hp('1.8%') }}>  19 Sep 2022</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('Order') }} style={{ flexDirection: 'row', right: 70, marginTop: 15 }}>
                        <Text style={{ fontFamily: 'Lato-Bold', fontSize: hp('2%'), letterSpacing: 0.04, color: '#B9B8BE' }}>Status:{"\n"}<Text style={{ fontFamily: 'Lato-Bold', fontSize: hp('2%'), letterSpacing: 0.04, color: '#159F91' }}>Arrived to You</Text></Text>
                        <Image source={require('../../assets/Right.png')} style={{ left: 10 }} />
                    </TouchableOpacity>
                </Card>
            </TouchableOpacity>


        </View >


    )
}

export default TripsList14

const styles = StyleSheet.create({
    foodCon: {
        flexDirection: 'row',
        marginVertical: 10,
        width: wp('98%'),
        height: hp('16%'),
        borderRadius: 16,


    },
    foodClickArea: {
        alignSelf: 'flex-start',
        margin: 25,
        right: 10,
        top: 10
    },

    foodName: {
        fontSize: 10,
        textAlign: 'center',
        color: '#100A1F',
        bottom: 10,
        fontFamily: 'Lato-Bold',
        fontStyle: 'normal',
        lineheight: 14,
        letterSpacing: 0.4,

    },
    titleBox1: {
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: '#FF193B',
        right: 13,
        top: 15,
        borderRadius: 10,
        height: 22,
        width: 52,
    },
    textbody3: {
        fontFamily: 'Lato-Bold',
        letterSpacing: 0.02,
        lineHeight: 16,
        fontSize: 12,
        color: '#100A1F',
        alignSelf: 'center',
        bottom: 7
    },
    titleBox2: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignSelf: 'flex-end',
        borderRadius: 143,
        height: 22,
        width: 54,
    },
    title1: {
        fontFamily: 'Lato-Bold',
        color: '#ffffff',
        fontSize: 10,
        alignSelf: 'center',
        top: 3

    },
    title2: {
        fontFamily: 'Lato-Medium',
        color: '#100A1F',
        fontSize: 10,
        alignSelf: 'center',
        left: 7,



    },
    Rectangle: {
        width: 158,
        height: 1,
        borderRadius: 163,

    }
})