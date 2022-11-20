import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const MainHeader10 = ({ }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerLeft}>
          <Image source={require('../../assets/drive.png')} />
          <Text style={styles.title1}>Delivering to<Text style={styles.title2}> New Nozha{"\n"}<Ionicons name='location' size={15} color='#100A1F' /> <Text style={styles.title3}>(Nozha Apartment)</Text> <SimpleLineIcons name='arrow-down' size={12} color='#B9B8BE' /></Text></Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 13 }}>
          <View style={{margin:5}}>
          <Ionicons name='time-sharp' size={18} color='#159F91' />
          </View>
          <View>

            <Text style={styles.TextBody}>Delivery Time  </Text>
            <Text style={styles.TextBody1}>20-30 mins  </Text>

          </View>
        </View>


      </View>
      {/* 
      <Icon icon="Capture" onPress={() => { }} style={{ borderRadius: sizes.radius, }} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom:10
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 10,
    marginTop: 10,
  },
  title1: {

    color: 'rgba(16, 10, 31, 0.54)',
    fontFamily: 'Lato-Medium',
    letterSpacing: 0.4,
    lineHeight: 20,
    fontSize: 14
  },
  title2: {
    color: '#6541B4',
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.4,
    lineHeight: 20,
    fontSize: 14
  },
  title3: {
    color: '#100A1F',
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.4,
    lineHeight: 20,
    fontSize: 14
  },
  TextBody: {
    fontFamily: 'Lato-Medium',
    fontSize: hp('1.2%')
  },
  TextBody1: {
    fontFamily: 'Lato-Medium',
    fontSize: hp('1.8%'),
    color: '#100A1F'
  }
});

export default MainHeader10;
