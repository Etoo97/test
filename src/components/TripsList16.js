import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ImageTripsList from '../data/ImageTripsList'
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const TripsList16 = () => {
    const navigation = useNavigation();
    return (

        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center'

            }}>
              <TouchableOpacity style={styles.foodCon} onPress={() => { navigation.navigate('AddCard') }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 12 }}>
                        <View style={styles.foodClickArea} >
                            <Image source={ImageTripsList.Basma} style={styles.foodItem} />
                        </View>
                        <View style={{ borderLeftWidth: 1, borderLeftColor: '#E2E1E4', paddingLeft: 8, marginLeft: 4 }}>
                            <Text style={{ color: '#FF193B', fontFamily: 'Lato-Black', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, }}> 90 <Text style={{ fontFamily: 'lato-bold', fontSize: 12, letterSpacing: 0.2 }}>EGP</Text></Text>
                            <Text style={{ fontFamily: 'Lato-Bold', color: '#100A1F', fontSize: 12, marginBottom: 6 }}> Basma Frozen Minced...</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Ionicons name='grid' size={15} color='#B9B8BE' />
                                    <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10, }}>  Frozen Food</Text>
                                </View>
                                {/* Cat */}
                          
                            </View>
                            {/* Category */}
                        </View>
                        {/* Content */}
                    </View>
                    {/* All Content */}



                 

                    {/* Add to Cart */}

                </TouchableOpacity>



        </View >

    )
}

export default TripsList16

const styles = StyleSheet.create({
    foodCon: {
        marginVertical: 10,
        width: wp('95%'),
        borderRadius: 16,
        backgroundColor: "#FFF",
        marginHorizontal: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 8,
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
    titleBox1: {
        position: 'absolute',
        alignSelf: 'flex-end',
        backgroundColor: '#FF193B',
        right: 13,
        top: 15,
        borderRadius: 8,
        height: 22,
        width: 52,
    },
    titleBox2: {
        alignContent: 'center',
        marginLeft: 26,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 143,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        width: wp('13%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 4,
    },
    title1: {
        fontFamily: 'Lato-Bold',
        color: '#ffffff',
        fontSize: 10,
        alignSelf: 'center',
        top: 3

    },
    title2: {
        fontFamily: 'Lato-Medium',
        color: '#100A1F',
        fontSize: 10,
        alignSelf: 'center',




    },
    Rectangle: {
        width: 158,
        height: 1,
        borderRadius: 163,

    }
})