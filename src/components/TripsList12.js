import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ImageTripsList from '../data/ImageTripsList'
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TripsList12 = () => {
    return (

        <View
            style={{
                alignItems: 'center',
                marginVertical:50,
                bottom:30
            }}>
            <Card style={styles.foodCon}>
                <TouchableOpacity style={styles.foodClickArea}>
                    <Image source={ImageTripsList.kit} style={{ bottom: 10 }} />

                </TouchableOpacity>
                <View>
                    <Image source={ImageTripsList.Rectangle0} style={{ right: 30, top: 10 }} />
                </View>
                <View>
                    <Text style={{ color: '#FF193B', fontFamily: 'Lato-Medium', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>New Offer</Text>
                    <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize: 12, right: 15 }}>50% off on all Koki products</Text>
                    <View style={{ flexDirection: 'row', top: 15, right: 15 }}>
                        <MaterialIcons name='watch-later' size={15} color='#B9B8BE' />
                        <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10, }}>  02 min</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assets/Right.png')} style={{ margin: 18 }} />
                </TouchableOpacity>
            </Card>
            <Card style={styles.foodCon}>
                <TouchableOpacity style={styles.foodClickArea}>
                    <Image source={ImageTripsList.Redbull} style={{ bottom: 10 }} />

                </TouchableOpacity>
                <View>
                    <Image source={ImageTripsList.Rectangle0} style={{ right: 30, top: 10 }} />
                </View>
                <View>
                    <Text style={{ color: '#FF193B', fontFamily: 'Lato-Medium', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>New Offer</Text>
                    <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize: 12, right: 15 }}>50% off on all Koki products</Text>
                    <View style={{ flexDirection: 'row', top: 15, right: 15 }}>
                        <MaterialIcons name='watch-later' size={15} color='#B9B8BE' />
                        <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10, }}>  02 min</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assets/Right.png')} style={{ margin: 18 }} />
                </TouchableOpacity>
            </Card>
            <Card style={styles.foodCon}>
                <TouchableOpacity style={styles.foodClickArea}>
                    <Image source={ImageTripsList.Basma} style={{ bottom: 10 }} />

                </TouchableOpacity>
                <View>
                    <Image source={ImageTripsList.Rectangle0} style={{ right: 30, top: 10 }} />
                </View>
                <View>
                    <Text style={{ color: '#FF193B', fontFamily: 'Lato-Medium', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>New Offer</Text>
                    <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize: 12, right: 15 }}>50% off on all Koki products</Text>
                    <View style={{ flexDirection: 'row', top: 15, right: 15 }}>
                        <MaterialIcons name='watch-later' size={15} color='#B9B8BE' />
                        <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10, }}>  02 min</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assets/Right.png')} style={{ margin: 18 }} />
                </TouchableOpacity>
            </Card>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Image source={require('../../assets/ETO.png')} style={{ width: 90, right: 10 }} />
                <Text style={styles.textbody3}>OLDER NOTIFICATIONS</Text>
                <Image source={require('../../assets/ETO.png')} style={{ width: 90, left: 10 }} />
            </View>
            <Card style={styles.foodCon}>
                <TouchableOpacity style={styles.foodClickArea}>
                    <Image source={ImageTripsList.Basma} style={{ bottom: 10 }} />

                </TouchableOpacity>
                <View>
                    <Image source={ImageTripsList.Rectangle0} style={{ right: 30, top: 10 }} />
                </View>
                <View>
                    <Text style={{ color: '#FF193B', fontFamily: 'Lato-Medium', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>New Offer</Text>
                    <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize: 12, right: 15 }}>50% off on all Koki products</Text>
                    <View style={{ flexDirection: 'row', top: 15, right: 15 }}>
                        <MaterialIcons name='watch-later' size={15} color='#B9B8BE' />
                        <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10, }}>  02 min</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assets/Right.png')} style={{ margin: 18 }} />
                </TouchableOpacity>
            </Card>
            <Card style={styles.foodCon}>
                <TouchableOpacity style={styles.foodClickArea}>
                    <Image source={ImageTripsList.Basma} style={{ bottom: 10 }} />

                </TouchableOpacity>
                <View>
                    <Image source={ImageTripsList.Rectangle0} style={{ right: 30, top: 10 }} />
                </View>
                <View>
                    <Text style={{ color: '#FF193B', fontFamily: 'Lato-Medium', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>New Offer</Text>
                    <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize: 12, right: 15 }}>50% off on all Koki products</Text>
                    <View style={{ flexDirection: 'row', top: 15, right: 15 }}>
                        <MaterialIcons name='watch-later' size={15} color='#B9B8BE' />
                        <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10, }}>  02 min</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assets/Right.png')} style={{ margin: 18 }} />
                </TouchableOpacity>
            </Card>

        </View >


    )
}

export default TripsList12

const styles = StyleSheet.create({
    foodCon: {
        flexDirection: 'row',
        marginVertical: 10,
        width: wp('90%'),
        height: hp('10%'),
        borderRadius: 16,


    },
    foodClickArea: {
        alignSelf: 'flex-start',
        margin: 25,
        right: 10
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