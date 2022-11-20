import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Card } from 'react-native-shadow-cards';
import StarRating from 'react-native-star-rating';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 1.5
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#FF193B', fontFamily: 'Lato-Black', fontSize: hp('3.5%'), lineHeight: 28, letterSpacing: 0.2, marginTop: 6, left: 12 }}>90 <Text style={{ fontFamily: 'Lato-Bold', fontSize: hp('2%'), letterSpacing: 0.2 }}>EGP</Text> <Text style={{ color: '#B9B8BE', fontFamily: 'lato-medium', fontSize: hp('2%'), textDecorationLine: 'line-through' }}>140 EGP</Text>{"\n"}<Text style={{ fontFamily: 'Lato-Medium', fontSize: hp('1.5%'), color: 'rgba(16, 10, 31, 0.54)' }}>All prices include VAT.</Text></Text>
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <View style={styles.titleBox1}>
                            <Ionicons name='cube-outline' size={19} color='#FEC214' style={{ alignSelf: 'center', }} />
                            <Text style={styles.title1}>  Save for Later</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ alignSelf: 'center', fontFamily: 'Lato-Bold', fontSize: hp('3%'), color: '#100A1F' }}>Koki Fried Chicken 12 Pcs + Fries</Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Ionicons name='grid' size={20} color='#B9B8BE' />
                    <Text style={{ fontFamily: 'Lato-Medium', color: 'rgba(16, 10, 31, 0.54)', fontSize: hp('2%') }}> Frozen Food</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <StarRating
                        disabled={false}
                        emptyStar={'star-o'}
                        fullStar={'star'}
                        iconSet={'FontAwesome'}
                        maxStars={5} 
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        fullStarColor={'#FEC214'}
                        starSize={20}
                        containerStyle={{ width: wp('6.5%'), marginLeft: 12 }}
                        buttonStyle={{ paddingHorizontal: 3 }}
                    />
                    <TouchableOpacity style={styles.titleBox2}>

                        <Text style={styles.title2}>All Reviews (12) </Text>
                        <AntDesign name='arrowright' size={19} color='#100A1F' style={{ alignSelf: 'center', }} />

                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title3}>Descreption :</Text>
                </View>
                <View>
                    <Text style={styles.title4}>
                        Lorem ipsum dolor sit amet, consectetur are for it adipiscing elit.{"\n"}{"\n"}
                        Aliquam et velit a ante dictum volutpat but why.
                        Vestibulum pretium libero at lectus efficitur{"\n"}feugiat.
                    </Text>
                </View>
            </View>
        )
    }
}

export default Body

const styles = StyleSheet.create({
    titleBox1: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 143,
        height: hp('4%'),
        width: wp('30%'),
        right: 12,
        alignSelf: 'center',
        justifyContent: 'center',
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
        backgroundColor: '#ffffff',
        borderRadius: 16,
        height: hp('6%'),
        width: wp('35%'),
        right: 12,
        alignSelf: 'center',
        justifyContent: 'center',
        bottom: 10,
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
        color: '#100A1F',
        fontSize: hp('1.3%'),
        alignSelf: 'center',
    },
    title2: {
        fontFamily: 'Lato-Bold',
        color: '#100A1F',
        fontSize: hp('1.6%'),
        alignSelf: 'center',

    },
    title3: {
        fontFamily: 'Lato-Bold',
        color: '#6541B4',
        fontSize: hp('2.5%'),
        alignSelf: 'flex-start',
        marginLeft: 12

    },
    title4: {
        fontFamily: 'Lato-Bold',
        color: 'rgba(16, 10, 31, 0.54)',
        fontSize: hp('2%'),
        alignSelf: 'flex-start',
        marginLeft: 12,
    

    },
})