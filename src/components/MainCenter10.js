import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-shadow-cards';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const MainCenter10 = ({ }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerLeft}>
          <Image source={require('../../assets/Shop.png')} />
          <Text style={styles.title1}>Quick Add{"\n"}<Text style={styles.title2}>To Your Cart</Text></Text>
        </View>
        <View >
          <TouchableOpacity style={{ alignSelf: 'center',marginTop:10}}>
            <Card style={styles.titleBox1}>
              <Ionicons name='cube-outline' size={19} color='#FEC214' style={{ alignSelf: 'center', }} />
              <Text style={styles.title3}>  Save for Later</Text>
            </Card>
          </TouchableOpacity>
        </View>


      </View>
    </>
  );
};

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
    marginTop: 10,
  },
  title3: {
    fontFamily: 'Lato-Bold',
    color: '#100A1F',
    fontSize: hp('1.3%'),
    alignSelf: 'center',
  },
  title1: {

    color: 'rgba(16, 10, 31, 0.54)',
    fontFamily: 'Lato-Medium',
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 12,
    left: 5,
  },
  titleBox1: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 143,
    height: hp('4%'),
    width: wp('30%'),
    right: 12,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  title2: {
    color: '#100A1F',
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.4,
    lineHeight: 24,
    fontSize: 16,
    left: 5,
  },

});

export default MainCenter10;
