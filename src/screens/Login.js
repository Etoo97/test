import { View, Image, StyleSheet, TextInput, Text, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react';
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PhoneInput from 'react-native-phone-number-input';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../../assets/Logo.svg'


const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('');
  return (
    <View style={{ backgroundColor: "#ffff", justifyContent: 'center', height: hp('100%'), position: 'relative', paddingTop: 24, paddingBottom: 42, paddingLeft: 16, paddingRight: 16, }}>


      {/* <Card style={styles.searchSection1}>
        <AntDesign name='lock' style={{ color: 'black', fontSize: 15, left: 3 }} />
        <TextInput
          style={{ fontWeight: 'bold', flex: 1, color: '#100A1F' }}
          name="password"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => setPassword(text)}
        />
        <Ionicons style={styles.searchIcon} name='eye-sharp' size={20} color='#B9B8BE' />
      </Card> */}
      {/* <TouchableOpacity>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', right: 20, marginTop: 5 }}>
          <AntDesign name='questioncircle' style={{ color: '#F68B21', fontSize: 20, right: 5, bottom: 3 }} />
          <Text style={{ color: '#F68B21', fontSize: 15, fontFamily: 'Lato-Bold', lineHeight: 16, letterSpacing: 0.4 }}>Forgot password ?</Text>
        </View>
      </TouchableOpacity> */}

      <View>

        {/* 
        <Image source={require('../../assets/Khazyn.png')} */}
        <Logo style={styles.image} />
        <View>
          <View style={styles.searchSection}>
            <PhoneInput
              defaultValue={phoneNumber}
              defaultCode='EG'

            />
          </View>
          <TouchableOpacity style={styles.log} onPress={() => navigation.navigate('Tabs')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../../assets/login.png')} style={{ height: 18, width: 18, marginRight: 4 }} />
              <Text style={{ color: '#fff', fontFamily: 'Lato-Bold', fontSize: 16, lineHeight: 24, letterSpacing: 0.4 }}>LOGIN NOW</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 24 }}>
          <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 10 }}>
            <Text style={styles.textbody2}>If You don’t have accont</Text>
          </View>

          <TouchableOpacity style={styles.log1}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }} >
              <Image source={require('../../assets/AddUser.png')} style={{ height: 18, width: 18, marginRight: 4 }} />
              <Text style={{ color: '#100A1F', fontFamily: 'Lato-Bold', fontSize: 16, lineHeight: 24, letterSpacing: 0.4, }}>Signup Now</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>

      <View style={{ position: 'absolute', bottom: 50, width: "100%", left: 16 }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 16 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#072736', opacity: 0.12 }} />
          <View>
            <Text style={styles.textbody4}>If You don’t have accont</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#072736', opacity: 0.12 }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffff' }}>
          <TouchableOpacity style={styles.log2} onPress={() => Linking.openURL(`https://appleid.apple.com`)}>
            <View >
              <AntDesign name='apple1' size={24} color="#1F1F1F" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.log2} onPress={() => Linking.openURL(`https://accounts.google.com/ServiceLogin/identifier?elo=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin`)}>
            <View >
              <Image source={require('../../assets/google-lg-colored.png')} style={{ height: 24, width: 24, }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.log2} onPress={() => Linking.openURL(`https://www.facebook.com`)}>
            <View >
              <FontAwesome5 name='facebook' size={24} color="#1877F2" />
            </View>
          </TouchableOpacity>
        </View>

      </View>

    </View>

  )
}

export default Login


const styles = StyleSheet.create({
  image: {

    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 32
  },

  log: {

    backgroundColor: '#452C7A',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    paddingTop: 14,
    paddingBottom: 14,
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
    paddingTop: 14,
    paddingBottom: 14,
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
  searchSection: {
    marginBottom: 16

  },
  log2: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: "30%",
    paddingTop: 12,
    paddingBottom: 12,
    alignSelf: 'center',
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 2,
  },
  textbody2: {
    textTransform: 'uppercase',
    letterSpacing: 0.02,
    lineHeight: 16,
    fontSize: 12,
    color: '#072736',
    alignSelf: 'center',
  },
  textbody4: {
    fontFamily: 'Lato-Medium',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 12,
    width: "100%",
    marginLeft: wp('3%'),
    marginRight: wp('3%'),

  },
  textbody3: {
    bottom: 7,
    textTransform: 'uppercase',
    letterSpacing: 0.02,
    lineHeight: 16,
    fontSize: 12,
    color: '#072736',
    alignSelf: 'center',
  },
})