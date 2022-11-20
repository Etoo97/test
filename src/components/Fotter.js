import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Card } from 'react-native-shadow-cards';
import {useNavigation} from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default function Fotter() {
    const navigation = useNavigation();
    return (
        <View style={{ marginHorizontal: 10, marginVertical: 5,bottom:10 }}>
            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }}  onPress={() => {navigation.navigate('SavedItems') }}>
                <Image source={require('../../assets/Group.png')} />
                <Text style={styles.title}>Saved Items</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/Rectangle4.png')} />

            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }} onPress={() => {navigation.navigate('CustomerServices') }}>
                <Image source={require('../../assets/Serv.png')} />
                <Text style={styles.title}>Customer Services</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/Rectangle4.png')} />

            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Image source={require('../../assets/Sett.png')} />
                <Text style={styles.title}>Account Settings</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/Rectangle4.png')} />
            <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Image source={require('../../assets/loo.png')} />
                <Text style={styles.title}>Logout Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', margin: 5 }}>
                <Image source={require('../../assets/ETO.png')} style={{ width: 105, right: 10 }} />
                <Text style={styles.textbody2}>LANGUAGE SETTINGS</Text>
                <Image source={require('../../assets/ETO.png')} style={{ width: 105, left: 10 }} />
            </TouchableOpacity>
            <Card style={styles.foodCon}>
                <TouchableOpacity style={styles.foodClickArea} >
                    <Fontisto name='flag' size={20} color='#100A1F' />
                    <Text style={styles.title1}> Arabic العربية</Text>
                </TouchableOpacity>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        left: 10,
        color: '#100A1F',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        fontFamily: 'Lato-Bold',
        top: 2
    },
    foodCon: {

        width:wp('90%'),
        height:hp('7%'),
        borderRadius: 16,
        marginHorizontal: 10,
        alignSelf:'center'



    },
    foodClickArea: {
        flexDirection: 'row',
        top: 15,
        left: 12

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
        fontFamily: 'Lato-Bold',
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: '#100A1F',
        top: 2
    }

})