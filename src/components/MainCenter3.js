import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Order from '../../assets/Order.svg';

const MainCenter = ({ }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerLeft}>
          {/* <Image source={require('../../assets/order.png')} /> */}
          <Order />

          <Text style={styles.title1}>Shop By Top{"\n"}<Text style={styles.title2}>Daily Orders</Text></Text>
        </View>
        <View >
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#100A1F', fontFamily: 'Lato-Medium', fontSize: 12, lineHeight: 16, letterSpacing: 0.4 }}>View All</Text>
            <SimpleLineIcons name='arrow-right' size={12} color='#100A1F' style={{ top: 3, letterSpacing: 10 }} />
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
    // marginTop: 10,
  },
  title1: {

    color: 'rgba(16, 10, 31, 0.54)',
    fontFamily: 'Lato-Medium',
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 12,
    left: 5,
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

export default MainCenter;
