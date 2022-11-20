import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useRef } from "react"
import ImageTripsList from '../data/ImageTripsList'
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import MainCenter10 from './MainCenter10';
import TripsList16 from './TripsList16';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';


const TripsList8 = () => {

        const navigation = useNavigation();
        const refRBSheet = useRef();
    return (
        <ScrollView
            style={{ backgroundColor: '#FFFFFF' }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',


                }}>
                <TouchableOpacity style={styles.foodCon} onPress={() => { navigation.navigate('AddCard') }}>
                    <View >
                        <View>
                            <View style={{ padding: 12 }}>
                                <Image source={ImageTripsList.koki} style={styles.foodItem} />
                                <View style={styles.titleBox1}>
                                    <Text style={styles.title1}>20% <Text style={{ fontSize: 10 }}>off</Text></Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={ImageTripsList.Rectangle} style={styles.Rectangle} />
                                <View style={styles.titleBox2}>
                                    <Ionicons name='cube-outline' size={15} color='#FEC214' style={{ alignSelf: 'center', }} />
                                    <Text style={styles.title2}>Save</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: 12 }}>
                            <View>
                                <Text style={{ color: '#FF193B', fontFamily: 'Lato-Black', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, alignSelf: 'flex-start' }}>90 <Text style={{ fontFamily: 'Lato-Bold', fontSize: 12, letterSpacing: 0.2 }}>EGP</Text> <Text style={{ color: '#B9B8BE', fontFamily: 'lato-medium', fontSize: 10, textDecorationLine: 'line-through' }}>140 EGP</Text></Text>

                            </View>
                            <View style={{ paddingBottom: 8 }}>
                                <Text style={{ fontFamily: 'Lato-Bold', color: '#100A1F', }}>Koki Spicy crunchy chicken pane with...</Text>

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name='grid' size={15} color='#B9B8BE' />
                                <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10 }}>  Frozen Food</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#452C7A', width: "80%", padding: 12, alignSelf: 'center', borderTopLeftRadius: 16, borderTopRightRadius: 16, justifyContent: 'center', }} onPress={() => refRBSheet.current.open()}>
                                <FontAwesome5 name='cart-plus' size={15} color='#ffffff' />
                                <Text style={{ fontFamily: 'Lato-Medium', fontSize: 10, color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD TO CART</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.foodCon} onPress={() => { navigation.navigate('AddCard') }}>
                    <View >
                        <View>
                            <View style={{ padding: 12 }}>
                                <Image source={ImageTripsList.Qunder} style={styles.foodItem} />
                                <View style={styles.titleBox1}>
                                    <Text style={styles.title1}>20% <Text style={{ fontSize: 10 }}>off</Text></Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={ImageTripsList.Rectangle} style={styles.Rectangle} />
                                <View style={styles.titleBox2}>
                                    <Ionicons name='cube-outline' size={15} color='#FEC214' style={{ alignSelf: 'center', }} />
                                    <Text style={styles.title2}>Save</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: 12 }}>
                            <View>
                                <Text style={{ color: '#FF193B', fontFamily: 'Lato-Black', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, alignSelf: 'flex-start' }}>90 <Text style={{ fontFamily: 'Lato-Bold', fontSize: 12, letterSpacing: 0.2 }}>EGP</Text> <Text style={{ color: '#B9B8BE', fontFamily: 'lato-medium', fontSize: 10, textDecorationLine: 'line-through' }}>140 EGP</Text></Text>

                            </View>
                            <View style={{ paddingBottom: 8 }}>
                                <Text style={{ fontFamily: 'Lato-Bold', color: '#100A1F', }}>Koki Spicy crunchy chicken pane with...</Text>

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name='grid' size={15} color='#B9B8BE' />
                                <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10 }}>  Frozen Food</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#452C7A', width: "80%", padding: 12, alignSelf: 'center', borderTopLeftRadius: 16, borderTopRightRadius: 16, justifyContent: 'center', }} onPress={() => refRBSheet.current.open()}>
                                <FontAwesome5 name='cart-plus' size={15} color='#ffffff' />
                                <Text style={{ fontFamily: 'Lato-Medium', fontSize: 10, color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD TO CART</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.foodCon} onPress={() => { navigation.navigate('AddCard') }}>
                    <View >
                        <View>
                            <View style={{ padding: 12 }}>
                                <Image source={ImageTripsList.Redbulls} style={styles.foodItem} />
                                <View style={styles.titleBox1}>
                                    <Text style={styles.title1}>20% <Text style={{ fontSize: 10 }}>off</Text></Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={ImageTripsList.Rectangle} style={styles.Rectangle} />
                                <View style={styles.titleBox2}>
                                    <Ionicons name='cube-outline' size={15} color='#FEC214' style={{ alignSelf: 'center', }} />
                                    <Text style={styles.title2}>Save</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: 12 }}>
                            <View>
                                <Text style={{ color: '#FF193B', fontFamily: 'Lato-Black', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, alignSelf: 'flex-start' }}>90 <Text style={{ fontFamily: 'Lato-Bold', fontSize: 12, letterSpacing: 0.2 }}>EGP</Text> <Text style={{ color: '#B9B8BE', fontFamily: 'lato-medium', fontSize: 10, textDecorationLine: 'line-through' }}>140 EGP</Text></Text>

                            </View>
                            <View style={{ paddingBottom: 8 }}>
                                <Text style={{ fontFamily: 'Lato-Bold', color: '#100A1F', }}>Koki Spicy crunchy chicken pane with...</Text>

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name='grid' size={15} color='#B9B8BE' />
                                <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10 }}>  Frozen Food</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#452C7A', width: "80%", padding: 12, alignSelf: 'center', borderTopLeftRadius: 16, borderTopRightRadius: 16, justifyContent: 'center', }} onPress={() => refRBSheet.current.open()}>
                                <FontAwesome5 name='cart-plus' size={15} color='#ffffff' />
                                <Text style={{ fontFamily: 'Lato-Medium', fontSize: 10, color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD TO CART</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>

             
                <TouchableOpacity style={styles.foodCon} onPress={() => { navigation.navigate('AddCard') }}>
                    <View >
                        <View>
                            <View style={{ padding: 12 }}>
                                <Image source={ImageTripsList.Pepssi} style={styles.foodItem} />
                                <View style={styles.titleBox1}>
                                    <Text style={styles.title1}>20% <Text style={{ fontSize: 10 }}>off</Text></Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={ImageTripsList.Rectangle} style={styles.Rectangle} />
                                <View style={styles.titleBox2}>
                                    <Ionicons name='cube-outline' size={15} color='#FEC214' style={{ alignSelf: 'center', }} />
                                    <Text style={styles.title2}>Save</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: 12 }}>
                            <View>
                                <Text style={{ color: '#FF193B', fontFamily: 'Lato-Black', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, alignSelf: 'flex-start' }}>90 <Text style={{ fontFamily: 'Lato-Bold', fontSize: 12, letterSpacing: 0.2 }}>EGP</Text> <Text style={{ color: '#B9B8BE', fontFamily: 'lato-medium', fontSize: 10, textDecorationLine: 'line-through' }}>140 EGP</Text></Text>

                            </View>
                            <View style={{ paddingBottom: 8 }}>
                                <Text style={{ fontFamily: 'Lato-Bold', color: '#100A1F', }}>Koki Spicy crunchy chicken pane with...</Text>

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name='grid' size={15} color='#B9B8BE' />
                                <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10 }}>  Frozen Food</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#452C7A', width: "80%", padding: 12, alignSelf: 'center', borderTopLeftRadius: 16, borderTopRightRadius: 16, justifyContent: 'center', }} onPress={() => refRBSheet.current.open()}>
                                <FontAwesome5 name='cart-plus' size={15} color='#ffffff' />
                                <Text style={{ fontFamily: 'Lato-Medium', fontSize: 10, color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD TO CART</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={{ marginBottom: 90, marginTop: 20 }}>
                    <FontAwesome5 name='filter' size={45} color='#F68B21' />
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

                                elevation: 10,
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

export default TripsList8

const styles = StyleSheet.create({
    foodCon: {
        marginVertical: 12,
        backgroundColor: '#FFF',
        width: wp('42%'),
        borderRadius: 16,
        marginHorizontal: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 4,

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
        elevation: 10,
    },
    foodItem: {
        width: 110,
        height: 58,
        alignSelf: 'center',
        // marginVertical: 10,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 4,
    },

    titleBox2: {
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: '#ffffff',
        alignSelf: 'flex-end',
        borderRadius: 143,
        bottom: -8,
        right: 12,
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