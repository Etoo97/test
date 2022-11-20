import React from 'react';
import {View} from 'react-native';
import {colors, shadow} from '../constants/theme';
import Icon from './Icon';


const FavoriteButton = ({active, style}) => {
  return (
    <View
      style={[
        {
          justifyContent:'flex-end',
          backgroundColor: colors.white,
          padding: 4,
          borderRadius: 20,
        },
        shadow.light,
        style,
      ]}>
       <Icon icon={'Favorite.png'} size={24} />
    </View>
  );
};

export default FavoriteButton;
