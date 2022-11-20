import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ImageTripsList from '../data/ImageTripsList'
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const TripsList3 = () => {
    const navigation = useNavigation();
    return (
        <ScrollView
            horizontal
        >
            <View
                style={{
                    flexDirection: 'row',
                
                }}>
                <Card style={styles.foodCon}>
                    <TouchableOpacity style={styles.foodClickArea}>
                        <Image source={ImageTripsList.Basma} style={styles.foodItem} />

                    </TouchableOpacity>
                    <View>

                        <Image source={ImageTripsList.Rectangle3} style={{ right: 30, top: 15 }} />
                    </View>
                    <View>
                        <Text style={{ color: '#FF193B', fontFamily: 'Lato-Black', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>90 <Text style={{ fontFamily: 'lato-bold', fontSize: 12, letterSpacing: 0.2 }}>EGP</Text></Text>
                        <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize: 12, right: 15 }}> Basma Frozen Minced...</Text>
                        <View style={{ flexDirection: 'row', top: 15, right: 15 }}>
                            <Ionicons name='grid' size={15} color='#B9B8BE' />
                            <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10, }}>  Frozen Food</Text>
                            <TouchableOpacity style={{ left: 25, bottom: 5 }}>
                                <Card style={styles.titleBox2}>
                                    <Ionicons name='cube-outline' size={15} color='#FEC214' style={{ alignSelf: 'center', left: 4 }} />
                                    <Text style={styles.title2}>Save</Text>
                                </Card>
                            </TouchableOpacity>

                        </View>
                        <View style={{ backgroundColor: '#452C7A', width: 214, height: 38, top: 23, borderTopLeftRadius: 20, borderTopRightRadius: 20, right: 80, justifyContent: 'center' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }} onPress={() => {navigation.navigate('AddCard') }}>
                                <FontAwesome5 name='cart-plus' size={15} color='#ffffff' />
                                <Text style={{ fontFamily: 'Lato-Medium', fontSize: 10, color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD TO CART</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity style={styles.foodClickArea}>
                        <Image source={ImageTripsList.Basma} style={styles.foodItem} />

                    </TouchableOpacity>
                    <View>

                        <Image source={ImageTripsList.Rectangle3} style={{ right: 30, top: 15 }} />
                    </View>
                    <View>
                        <Text style={{ color: '#FF193B', fontFamily: 'Lato-Black', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>90 <Text style={{ fontFamily: 'lato-bold', fontSize: 12, letterSpacing: 0.2 }}>EGP</Text></Text>
                        <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize: 12, right: 15 }}> Basma Frozen Minced...</Text>
                        <View style={{ flexDirection: 'row', top: 15, right: 15 }}>
                            <Ionicons name='grid' size={15} color='#B9B8BE' />
                            <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10, }}>  Frozen Food</Text>
                            <TouchableOpacity style={{ left: 25, bottom: 5 }}>
                                <Card style={styles.titleBox2}>
                                    <Ionicons name='cube-outline' size={15} color='#FEC214' style={{ alignSelf: 'center', left: 4 }} />
                                    <Text style={styles.title2}>Save</Text>
                                </Card>
                            </TouchableOpacity>

                        </View>
                        <View style={{ backgroundColor: '#452C7A', width: 214, height: 38, top: 23, borderTopLeftRadius: 20, borderTopRightRadius: 20, right: 80, justifyContent: 'center' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }} onPress={() => {navigation.navigate('AddCard') }}>
                                <FontAwesome5 name='cart-plus' size={15} color='#ffffff' />
                                <Text style={{ fontFamily: 'Lato-Medium', fontSize: 10, color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD TO CART</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity style={styles.foodClickArea}>
                        <Image source={ImageTripsList.Basma} style={styles.foodItem} />

                    </TouchableOpacity>
                    <View>

                        <Image source={ImageTripsList.Rectangle3} style={{ right: 30, top: 15 }} />
                    </View>
                    <View>
                        <Text style={{ color: '#FF193B', fontFamily: 'Lato-Black', fontSize: 18, lineHeight: 28, letterSpacing: 0.2, top: 8, right: 15 }}>90 <Text style={{ fontFamily: 'lato-bold', fontSize: 12, letterSpacing: 0.2 }}>EGP</Text></Text>
                        <Text style={{ fontFamily: 'Lato-Bold', top: 8, color: '#100A1F', fontSize: 12, right: 15 }}> Basma Frozen Minced...</Text>
                        <View style={{ flexDirection: 'row', top: 15, right: 15 }}>
                            <Ionicons name='grid' size={15} color='#B9B8BE' />
                            <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: 10, }}>  Frozen Food</Text>
                            <TouchableOpacity style={{ left: 25, bottom: 5 }}>
                                <Card style={styles.titleBox2}>
                                    <Ionicons name='cube-outline' size={15} color='#FEC214' style={{ alignSelf: 'center', left: 4 }} />
                                    <Text style={styles.title2}>Save</Text>
                                </Card>
                            </TouchableOpacity>

                        </View>
                        <View style={{ backgroundColor: '#452C7A', width: 214, height: 38, top: 23, borderTopLeftRadius: 20, borderTopRightRadius: 20, right: 80, justifyContent: 'center' }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }} onPress={() => {navigation.navigate('AddCard') }}>
                                <FontAwesome5 name='cart-plus' size={15} color='#ffffff' />
                                <Text style={{ fontFamily: 'Lato-Medium', fontSize: 10, color: '#FFFFFF', letterSpacing: 0.4 }}>  ADD TO CART</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Card>


            </View >

        </ScrollView>
    )
}

export default TripsList3

const styles = StyleSheet.create({
    foodCon: {
        flexDirection: 'row',
        marginVertical: 10,
        width: 270,
        height: 128,
        borderRadius: 16,
        marginHorizontal: 6
    },
    foodClickArea: {
        alignSelf: 'flex-start',
        margin: 25,
        right: 10
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
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignSelf: 'flex-end',
        borderRadius: 143,
        height: 22,
        width: 54,
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
        left: 7,



    },
    Rectangle: {
        width: 158,
        height: 1,
        borderRadius: 163,

    }
})