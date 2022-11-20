import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { colors, shadow, sizes, spacing } from '../constants/theme';
import FavoriteButton from './FavoriteButton';
import LinearGradient from 'react-native-linear-gradient';

const CARD_WIDTH = sizes.width - 20;
const CARD_HEIGHT = 160;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPlacesCarousel = ({ list }) => {
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={true}
      keyExtractor={i => i.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: spacing.m,
              marginRight: index === list.length - 1 ? spacing.l : 0,
            }}>
            <View style={styles.card}>

              {/* <FavoriteButton style={styles.favorite} /> */}
              <View >
                <LinearGradient 
                 start={{x:0.6, y: 0.0}}
                 end={{x: 1, y: 0.0}} 
              // locations={[0,0.5,0.6]}
                 colors={['rgba(16, 10, 31, 0.8)','rgba(16, 10, 31, 0.2)']}
                 style={styles.LinearGradient}> 

                </LinearGradient>
                <Image source={item.image} />
              </View>
              <View style={styles.titleBox1}>
                <Text style={styles.title1}>49% <Text style={{ fontSize: 10 }}>off</Text></Text>
              </View>
              <Image source={require('../../assets/Logo.png')} style={{ position: 'absolute', left: 15, top: 15, width: 35, height: 17, zIndex: 2 }} />
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location} <Text style={{ fontFamily: 'Lato-Bold', color: '#FF193B', fontSize: sizes.h2, }}>49%</Text></Text>
              </View>

            </View>

          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  LinearGradient: {

    position: "absolute", 
    width: "100%", 
    height: "100%", 
     top: 0, 
     left: 0, 
     zIndex: 1,

  },
  card: {
    // marginVertical: 10,
    marginBottom:9,
    marginTop:24,
    position: "relative",
    overflow: 'hidden',
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
  favorite: {
    alignItems: 'flex-start',
    top: spacing.m,
    right: spacing.m,
    zIndex: 1,
  },
  titleBox1: {
    position: 'absolute',
    alignSelf: 'flex-end',
    backgroundColor: '#FF193B',
    right: 10,
    top: 15,
    borderRadius: 8,
    height: 22,
    width: 52,
    zIndex: 2,
    

  },

  titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 100,
    left: 16,
    zIndex: 2
  },
  title1: {
    fontFamily: 'Lato-Bold',
    color: '#ffffff',
    fontSize: 10,
    alignSelf: 'center',
    top: 3

  },
  title: {
    fontSize: sizes.body,
    fontFamily: 'Lato-Bold',
    color: colors.white,
    lineHeight: 24,
    letterSpacing: 0.4
  },
  location: {
    fontSize: sizes.h3,
    fontFamily: 'Lato-Medium',
    color: colors.white,
    lineHeight: 24,
    letterSpacing: 0.4
  },
});

export default TopPlacesCarousel;
