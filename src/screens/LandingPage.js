import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Card } from 'react-native-shadow-cards';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class LandingPage extends Component {
  render = () => {

    return (
      <View style={{ backgroundColor: '#F9F6EF', justifyContent: 'space-between', height: hp('100%'), paddingTop: 16 }}>
      
        <TouchableOpacity style={styles.head} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.texthead}>SKIP</Text>
          <AntDesign name='arrowright' style={{ color: 'black', fontSize: 20 }} />
        </TouchableOpacity>

        <View style={{ paddingLeft:16,paddingRight:16}}>
          <Image source={require('../../assets/Land.png')} style={styles.image} />

          <View style={{ alignSelf: 'center', marginTop: 24 }}>
              <Text style={styles.textbody}>Khazyn Dummy Title App</Text>
              <Text style={styles.textbody1}>It is a long established fact that a reader will be</Text><Text style={styles.textbody1}>distracted by the readable content of a page when</Text><Text style={styles.textbody1}>looking at its layout.</Text>
          </View>

        </View>
        <View style={{ backgroundColor: '#FFFFFF', bottom: 0, borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingTop: 24, paddingBottom: 42, paddingLeft: 16, paddingRight: 16, }}>


          <TouchableOpacity style={styles.log} onPress={() => this.props.navigation.navigate('Login')}>
            <View style={{ flexDirection: 'row',alignItems:'center' }}>
              <Image source={require('../../assets/login.png')} style={{ height: 18, width: 18,marginRight:4 }} />
              <Text style={{ color: '#fff', fontFamily: 'Lato-Bold', fontSize: 16, lineHeight: 24, letterSpacing: 0.4 }}>LOGIN NOW</Text>
            </View>
          </TouchableOpacity>


          <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 16, paddingTop: 16 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#072736', opacity: 0.12 }} />
            <View>
              <Text style={styles.textbody2}>If You don’t have accont</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: '#072736', opacity: 0.12 }} />
          </View>
          <TouchableOpacity style={styles.log1}>
            <View style={{ flexDirection: 'row',alignItems:'center'}} >
              <Image source={require('../../assets/AddUser.png')} style={{ height: 18, width: 18,marginRight:4 }} />
              <Text style={{ color: '#100A1F', fontFamily: 'Lato-Bold', fontSize: 16, lineHeight: 24, letterSpacing: 0.4 }}>SIGNUP NOW</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  image: {

    alignSelf: 'center'
  },
  head: {

    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 16
  },
  texthead: {
    fontFamily: 'Lato-Bold',
    fontSize: hp('1.8%'),
    color: 'black',
    marginRight: 10

  },
  textbody: {
    fontFamily: 'Lato-Bold',
    fontSize: hp('2.5%'),
    color: 'black',
    textAlign: 'center'

  },
  textbody1: {
    fontFamily: 'Lato-Regular',
    opacity: 0.74,
    fontSize: hp('1.5%'),
    color: '#072736',
    textAlign: 'center'


  },
  textbody2: {
    fontFamily: 'Lato-Medium',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 12,
    width: "100%",
    marginLeft: wp('3%'),
    marginRight: wp('3%'),



  },
  log: {

    backgroundColor: '#452C7A',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    paddingTop:14,
    paddingBottom:14,
    alignSelf: 'center',
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 9,




  },
  log1: {

    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    paddingTop:14,
    paddingBottom:14,
    alignSelf: 'center',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 9,






  }


})