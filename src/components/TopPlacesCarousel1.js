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
import { Card } from 'react-native-shadow-cards';

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
          <TouchableOpacity>
  
    
              <View >
                <Image source={item.image} />
              </View>
            
          
          </TouchableOpacity>
        );
      }}
    />
  );
};



export default TopPlacesCarousel;
