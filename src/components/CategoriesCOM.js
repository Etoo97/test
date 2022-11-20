import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ImageTripsList from '../data/ImageTripsList'
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

const CategoriesCOM = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
      <View style={styles.container}>
        <View style={styles.headerLeft}>
          <Image source={require('../../assets/Categories1.png')} />
          <Text style={styles.title1}>Shop By Top{"\n"}<Text style={styles.title2}>Categories</Text></Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginVertical: 15,
          marginBottom:30,
          paddingLeft:14,
          paddingRight:14
        }}>
        <TouchableOpacity style={styles.foodCon}   onPress={() => {navigation.navigate('SubCategories') }}>
          <View
            style={styles.foodClickArea}
            onPress={() => {navigation.navigate('SubCategories') }}
          >
            <Image source={ImageTripsList.Fruit} style={styles.foodItem} />
            <Text style={styles.foodName}>Fruits & Vegetables</Text>
          </View>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.chees} style={styles.foodItem} />
            <Text style={styles.foodName}>Cheese</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Meat} style={styles.foodItem} />
            <Text style={styles.foodName}>Meat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Chiken} style={styles.foodItem} />
            <Text style={styles.foodName}>Chicken & Poultry</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.ColdCuts} style={styles.foodItem} />
            <Text style={styles.foodName}>Cold Cuts</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.FrozienFood} style={styles.foodItem} />
            <Text style={styles.foodName}>Frozen Food</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.SeaFood} style={styles.foodItem} />
            <Text style={styles.foodName}>Seafood</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Bakery} style={styles.foodItem} />
            <Text style={styles.foodName}>Bakery & Pastry</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Eggs} style={styles.foodItem} />
            <Text style={styles.foodName}>Eggs</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Milk} style={styles.foodItem} />
            <Text style={styles.foodName}>Milk & Dairy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Water} style={styles.foodItem} />
            <Text style={styles.foodName}>Water & Beverages</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Coffe} style={styles.foodItem} />
            <Text style={styles.foodName}>Coffee & Tea</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Fruit} style={styles.foodItem} />
            <Text style={styles.foodName}>Fruits & Vegetables</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.chees} style={styles.foodItem} />
            <Text style={styles.foodName}>Cheese</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Meat} style={styles.foodItem} />
            <Text style={styles.foodName}>Meat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Chiken} style={styles.foodItem} />
            <Text style={styles.foodName}>Chicken & Poultry</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.ColdCuts} style={styles.foodItem} />
            <Text style={styles.foodName}>Cold Cuts</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.FrozienFood} style={styles.foodItem} />
            <Text style={styles.foodName}>Frozen Food</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.SeaFood} style={styles.foodItem} />
            <Text style={styles.foodName}>Seafood</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Bakery} style={styles.foodItem} />
            <Text style={styles.foodName}>Bakery & Pastry</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Eggs} style={styles.foodItem} />
            <Text style={styles.foodName}>Eggs</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Milk} style={styles.foodItem} />
            <Text style={styles.foodName}>Milk & Dairy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Water} style={styles.foodItem} />
            <Text style={styles.foodName}>Water & Beverages</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCon}>
          <View
            style={styles.foodClickArea}
          >
            <Image source={ImageTripsList.Coffe} style={styles.foodItem} />
            <Text style={styles.foodName}>Coffee & Tea</Text>
          </View>
        </TouchableOpacity>

      </View >
      <TouchableOpacity style={{ alignSelf: 'center', flexDirection: 'row', top: 10 }} onPress={() => { navigation.navigate('CategoriesScreen') }} >
        <Ionicons name='grid' size={15} color='#6541B4' />
        <Text style={{ paddingHorizontal: 3, fontSize: 12, lineHeight: 16, fontFamily: 'Lato-Medium', letterSpacing: 0.4, color: '#100A1F' }}>View All Categories</Text>
        <SimpleLineIcons name='arrow-right' size={18} color='#100A1F' />

      </TouchableOpacity>



    </ScrollView>
  )
}

export default CategoriesCOM

const styles = StyleSheet.create({
  foodCon: {
    alignItems:'center',
     backgroundColor:"#FFFF",
     marginBottom: 14,
     width: '30%',
     borderRadius: 16,
     marginHorizontal: 5,
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 4,
     },
     shadowOpacity: 0.12,
     shadowRadius: 10,
     elevation: 2,
 },

  foodItem: {
    width: 110,
    height: 58,
    alignSelf: 'center',
    marginVertical: 10,
  },
  foodName: {
    fontSize: 10,
    textAlign: 'center',
    color: '#100A1F',
    bottom: 10,
    fontFamily: 'Lato-Bold',
    fontStyle: 'normal',
    lineheight: 14,
    letterSpacing: 0.4,

  },
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
  title1: {

    color: 'rgba(16, 10, 31, 0.54)',
    fontFamily: 'Lato-Medium',
    letterSpacing: 0.4,
    lineHeight: 28,
    fontSize: 18,
    left: 5,
  },
  title2: {
    color: '#100A1F',
    fontFamily: 'Lato-Bold',
    letterSpacing: 0.4,
    lineHeight: 36,
    fontSize: 22,
    left: 5,
  },

})