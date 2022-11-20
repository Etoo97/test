import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-shadow-cards';


const MainCenter7 = ({ }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerLeft}>
          <Image source={require('../../assets/cub.png')} />
          <Text style={styles.title1}>Hello, <Text style={styles.title2}>Etoo</Text> {"\n"}<Text style={styles.title3}>Abdo.mostafa@khazyn.app</Text></Text>
        </View>
        <View>
          <TouchableOpacity >
            <Card style={styles.card}>
              <Image source={require('../../assets/Account.png')} style={{ right: 5 }} />
              <Text style={{ color: '#100A1F', fontFamily: 'Lato-Bold', fontSize: 12, lineHeight: 16, letterSpacing: 0.4 }}>Account Info</Text>
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
    left: 1,
    marginTop: 10,
  },
  title1: {

    color: '#100A1F',
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 16,

  },
  title2: {
    color: '#6541B4',
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.4,
    lineHeight: 24,
    fontSize: 16,

  },
  title3: {
    color: 'rgba(0, 18, 51, 0.54)',
    fontFamily: 'Lato-Medium',
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 12,

  },
  card: {
    marginTop: 10,
    width: 124,
    height: 38,
    borderRadius: 146,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  }

});

export default MainCenter7;
