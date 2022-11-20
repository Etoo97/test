import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import React from 'react'
import ImageTripsList from '../data/ImageTripsList'
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
const TripsList13 = () => {
    const navigation = useNavigation();
    return (

        <View
            style={{
                alignItems: 'center',
                marginVertical:50,
                bottom:30
            }}>
            <Card style={styles.foodCon}>
                <TouchableOpacity style={styles.foodClickArea}>
                    <Image  source={require('../../assets/rase.png')} style={{ bottom: 10 }} />

                </TouchableOpacity>
                <View>
                    <Image source={ImageTripsList.Rectangle0} style={{ right: 30, top: 10 }} />
                </View>
                <View>
                    <Text style={{ color: '#B9B8BE', fontFamily: 'Lato-Medium', fontSize:hp('2%'), lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>Chat with us</Text>
                    <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize:hp('2.4%'), right: 15 }}>Order hasn’t Arrived</Text>
                  
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate('Order') }}>
                    <Image source={require('../../assets/Right.png')} style={{ margin: 18, left:10}} />
                </TouchableOpacity>
            </Card>
            <Card style={styles.foodCon}>
                <TouchableOpacity style={styles.foodClickArea}>
                    <Image  source={require('../../assets/mis.png')} style={{ bottom: 10 }} />

                </TouchableOpacity>
                <View>
                    <Image source={ImageTripsList.Rectangle0} style={{ right: 30, top: 10 }} />
                </View>
                <View>
                    <Text style={{ color: '#B9B8BE', fontFamily: 'Lato-Medium', fontSize:hp('2%'), lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>Chat with us</Text>
                    <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize:hp('2.4%'), right: 15 }}>Missing or Incorrect item</Text>
                  
                </View>
                <TouchableOpacity  onPress={() => {navigation.navigate('MissingorIncorrectitem') }} >
                    <Image source={require('../../assets/Right.png')} style={{ margin: 18,right:30}} />
                </TouchableOpacity>
            </Card>
            <Card style={styles.foodCon}>
                <TouchableOpacity style={styles.foodClickArea}>
                    <Image  source={require('../../assets/issu.png')} style={{ bottom: 10 }} />

                </TouchableOpacity>
                <View>
                    <Image source={ImageTripsList.Rectangle0} style={{ right: 30, top: 10 }} />
                </View>
                <View>
                    <Text style={{ color: '#B9B8BE', fontFamily: 'Lato-Medium', fontSize:hp('2%'), lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>Make a complaint</Text>
                    <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize:hp('2.4%'), right: 15 }}>Issue with Delivery rider</Text>
                  
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate('IssuewithDeliveryrider') }}>
                    <Image source={require('../../assets/Right.png')} style={{ margin: 18, right:25}} />
                </TouchableOpacity>
            </Card>
            <Card style={styles.foodCon}>
                <TouchableOpacity style={styles.foodClickArea}>
                    <Image  source={require('../../assets/mesg.png')} style={{ bottom: 10 }} />

                </TouchableOpacity>
                <View>
                    <Image source={ImageTripsList.Rectangle0} style={{ right: 30, top: 10 }} />
                </View>
                <View>
                    <Text style={{ color: '#B9B8BE', fontFamily: 'Lato-Medium', fontSize:hp('2%'), lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>Make a complaint</Text>
                    <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize:hp('2.4%'), right: 15 }}>Other Issue or Feedback</Text>
                  
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate('OtherIssueorFeedback') }}>
                    <Image source={require('../../assets/Right.png')} style={{ margin: 18, right:25}} />
                </TouchableOpacity>
            </Card>
            
            <TouchableOpacity style={{ marginTop: 40 }} onPress={()=>{Linking.openURL(`tel:${15970}`)}}
>
                <View style={{ backgroundColor: '#452C7A', width: wp('95%'), height: hp('7%'), borderRadius: 16,flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name='ios-call' size={20} color='#ffffff' />
                    <Text style={{ fontFamily: 'Lato-Bold', fontSize:wp('4%'), color: '#FFFFFF', letterSpacing: 0.4 }}> CALL US NOW <Text style={{color:'#FEC214'}}>15970</Text></Text>
                </View>
            </TouchableOpacity>

        </View >


    )
}

export default TripsList13

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
        right: 10,
        top:10    },

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