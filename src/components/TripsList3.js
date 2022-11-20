import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useRef } from "react";
import ImageTripsList from '../data/ImageTripsList'
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import MainCenter10 from './MainCenter10';
import TripsList16 from './TripsList16';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TripsList3 = () => {
    const navigation = useNavigation();
    const refRBSheet = useRef();
    return (
        <ScrollView
            horizontal

        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems:'flex-start',
                    marginBottom: 60
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
                                <TouchableOpacity>
                                    <View style={styles.titleBox2}>
                                        <Ionicons name='cube-outline' size={15} color='#FEC214' style={{ alignSelf: 'center' }} />
                                        <Text style={styles.title2}>Save</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/* Category */}
                        </View>
                        {/* Content */}
                    </View>
                    {/* All Content */}



                    <View style={{ marginLeft: 12, marginRight: 12 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#452C7A', width: "100%", padding: 12, alignSelf: 'center', borderTopLeftRadius: 16, borderTopRightRadius: 16, justifyContent: 'center', }} onPress={() => refRBSheet.current.open()}>
                            <FontAwesome5 name='cart-plus' size={15} color='#ffffff' />
                            <Text style={{ fontFamily: 'Lato-Medium', fontSize: 10, color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Add to Cart */}

                </TouchableOpacity>

              
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
                                <TouchableOpacity>
                                    <View style={styles.titleBox2}>
                                        <Ionicons name='cube-outline' size={15} color='#FEC214' style={{ alignSelf: 'center' }} />
                                        <Text style={styles.title2}>Save</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/* Category */}
                        </View>
                        {/* Content */}
                    </View>
                    {/* All Content */}



                    <View style={{ marginLeft: 12, marginRight: 12 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#452C7A', width: "100%", padding: 12, alignSelf: 'center', borderTopLeftRadius: 16, borderTopRightRadius: 16, justifyContent: 'center', }} onPress={() => refRBSheet.current.open()}>
                            <FontAwesome5 name='cart-plus' size={15} color='#ffffff' />
                            <Text style={{ fontFamily: 'Lato-Medium', fontSize: 10, color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Add to Cart */}

                </TouchableOpacity>

               
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
                                <TouchableOpacity>
                                    <View style={styles.titleBox2}>
                                        <Ionicons name='cube-outline' size={15} color='#FEC214' style={{ alignSelf: 'center' }} />
                                        <Text style={styles.title2}>Save</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/* Category */}
                        </View>
                        {/* Content */}
                    </View>
                    {/* All Content */}



                    <View style={{ marginLeft: 12, marginRight: 12 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#452C7A', width: "100%", padding: 12, alignSelf: 'center', borderTopLeftRadius: 16, borderTopRightRadius: 16, justifyContent: 'center', }} onPress={() => refRBSheet.current.open()}>
                            <FontAwesome5 name='cart-plus' size={15} color='#ffffff' />
                            <Text style={{ fontFamily: 'Lato-Medium', fontSize: 10, color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Add to Cart */}

                </TouchableOpacity>
                <View>
                    <RBSheet
                        ref={refRBSheet}

                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        height={400}
                        openDuration={500}
                        customStyles={{
                            // wrapper: {
                            //     backgroundColor: "transparent"
                            // },
                            draggableIcon: {
                                backgroundColor: "#000"
                            },
                            container: {
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16
                            }


                        }}
                    >
                        <MainCenter10 />
                        <TripsList16 />
                        <View style={{ alignSelf: 'center', top: 15 }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#452C7A', width: wp('90%'), height: hp('6%'), borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', shadowColor: "#000",
                                shadowOffset: {
                                    width: 12,
                                    height: 18,
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 16.00,

                                elevation: 30,
                            }}>

                                <FontAwesome5 name='cart-plus' size={20} color='#ffffff' />
                                <Text style={{ fontFamily: 'Lato-Bold', fontSize: wp('4%'), color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD ALL TO CART</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.log1} onPress={() => { navigation.navigate('AddCard') }}>
                                <View style={{ flexDirection: 'row', }} >
                                    <Ionicons name='eye' size={20} color='#100A1F' style={{ alignSelf: 'center', right: 5 }} />
                                    <Text style={{ color: '#100A1F', fontFamily: 'Lato-Bold', fontSize: wp('4%'), lineHeight: 24, letterSpacing: 0.4 }}>VIEW PRODUCT</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                    </RBSheet>
                </View>


            </View >

        </ScrollView>
    )
}

export default TripsList3

const styles = StyleSheet.create({
    foodCon: {
        marginVertical: 10,
        width: wp('65%'),
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
    foodClickArea: {

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
    log1: {
        top: 15,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('90%'),
        height: hp('6%'),
        alignSelf: 'center',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 12,
            height: 18,
        },
        elevation: 30,
    },
    Rectangle: {
        width: 158,
        height: 1,
        borderRadius: 163,

    }
})