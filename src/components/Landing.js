import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Card } from 'react-native-shadow-cards'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Landing = () => {
    return (
        <View>
            <Card style={styles.titleBox1}>
                <Text style={styles.title1}>20% <Text style={{ fontSize: hp('1.5%')}}>off</Text></Text>
            </Card>
            <Image source={require('../../assets/KOKII.png')} style={styles.foodItem} />
            <View>
            <Image source={require('../../assets/Rectangle7.png')} />
            </View>
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({

    foodItem: {
        alignSelf: 'center',
        margin:35

    },
    titleBox1: {
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: '#FF193B',
        right: 13,
        top: 15,
        borderRadius: 8,
        height: hp('4.5%'),
        width: wp('19%'),
        justifyContent:'center'
    },
    title1: {
        fontFamily: 'Lato-Bold',
        color: '#ffffff',
        fontSize: hp('2.1'),
        alignSelf: 'center',
       
        

    },
})