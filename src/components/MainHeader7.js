import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
const MainHeader7 = ({}) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.headerLeft} onPress={() => {navigation.navigate('CustomerServices') }}>
          <Image source={require('../../assets/Left.png')} />
          <Text style={styles.title1}>Back</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 13 }}>
          <TouchableOpacity>
            <Image source={require('../../assets/notification.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/search.png')} />
          </TouchableOpacity>
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
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    
    marginTop: 10,
  },
  title1: {

    color: '#100A1F',
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
});

export default MainHeader7;
