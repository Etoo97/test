import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ImageTripsList from '../data/ImageTripsList'
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TripsList10 = () => {
    return (
        <ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    
                    


                }}>
                <Card style={styles.foodCon}>
                    <TouchableOpacity style={styles.foodClickArea} >
                        <Image source={require('../../assets/NOte.png')} />
                        <Text style={styles.title1}>Order History{"\n"}<Text style={styles.title2} >Re-order it again</Text></Text>
                        <View>
                        <SimpleLineIcons name='arrow-right' size={12} color='#100A1F' style={{ top: 7, left:15}} />
                        </View>
  
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity style={styles.foodClickArea} >
                        <Image source={require('../../assets/Adders.png')} />
                        <Text style={styles.title1}>Address Book{"\n"}<Text style={styles.title2} >Edit your locations</Text></Text>
                        <View>
                        <SimpleLineIcons name='arrow-right' size={12} color='#100A1F' style={{ top: 7, left:14}} />
                        </View>
  
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity style={styles.foodClickArea} >
                        <Image source={require('../../assets/Wallet.png')} />
                        <Text style={styles.title1}>My Wallet{"\n"}<Text style={styles.title2} >Re-order it again</Text></Text>
                        <View>
                        <SimpleLineIcons name='arrow-right' size={12} color='#100A1F' style={{ top: 7, left:15}} />
                        </View>
  
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity style={styles.foodClickArea} >
                        <Image source={require('../../assets/Voucher.png')} />
                        <Text style={styles.title1}>My Vouchers{"\n"}<Text style={styles.title2} >Instant discounts</Text></Text>
                        <View>
                        <SimpleLineIcons name='arrow-right' size={12} color='#100A1F' style={{ top: 7, left:18}} />
                        </View>
  
                    </TouchableOpacity>
                </Card>


            </View >

        </ScrollView>
    )
}

export default TripsList10

const styles = StyleSheet.create({
    foodCon: {
        marginVertical: 10,
        width:wp('41.5%') ,
        height:hp('7%'),
        borderRadius: 17,
        marginHorizontal:10
        

    },
    foodClickArea: {
        flexDirection: 'row',
        top: 15,
        left: 12

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

    title1: {
        fontFamily: 'Lato-Bold',
        color: '#100A1F',
        fontSize: 12,
        alignSelf: 'center',
        lineHeight: 16,
        letterSpacing: 0.4,
        left:5,
        bottom:2

    },
    title2: {
        fontFamily: 'Lato-Medium',
        color: 'rgba(16, 10, 31, 0.54)',
        fontSize: 10,
        alignSelf: 'center',
        lineHeight: 14,
        letterSpacing: 0.4,

    },
})