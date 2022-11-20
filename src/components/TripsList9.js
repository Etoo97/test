import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native'
import React from 'react'
import ImageTripsList from '../data/ImageTripsList'
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const  TripsList9 = () => {
    return (
        <ScrollView 
        horizontal
        >
             <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'

                }}>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.Fruit} style={styles.foodItem} />
                        <Text style={styles.foodName}>Fruits & Vegetables</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.chees} style={styles.foodItem} />
                        <Text style={styles.foodName}>Cheese</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.Meat} style={styles.foodItem} />
                        <Text style={styles.foodName}>Meat</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.Chiken} style={styles.foodItem} />
                        <Text style={styles.foodName}>Chicken & Poultry</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.ColdCuts} style={styles.foodItem} />
                        <Text style={styles.foodName}>Cold Cuts</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.FrozienFood} style={styles.foodItem} />
                        <Text style={styles.foodName}>Frozen Food</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.SeaFood} style={styles.foodItem} />
                        <Text style={styles.foodName}>Seafood</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.Bakery} style={styles.foodItem} />
                        <Text style={styles.foodName}>Bakery & Pastry</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.Eggs} style={styles.foodItem} />
                        <Text style={styles.foodName}>Eggs</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.Milk} style={styles.foodItem} />
                        <Text style={styles.foodName}>Milk & Dairy</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.Water} style={styles.foodItem} />
                        <Text style={styles.foodName}>Water & Beverages</Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.foodCon}>
                    <TouchableOpacity
                        style={styles.foodClickArea}
                    >
                        <Image source={ImageTripsList.Coffe} style={styles.foodItem} />
                        <Text style={styles.foodName}>Coffee & Tea</Text>
                    </TouchableOpacity>
                </Card>
            </View >

        </ScrollView>
    )
}

export default TripsList9

const styles = StyleSheet.create({
    foodCon: {
        marginVertical: 10,
        width: 110,
        height: 92,
        borderRadius: 17,
        marginHorizontal: 6
    },
    foodClickArea: {




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
        position: 'absolute',
        backgroundColor: '#ffffff',
        right: 13,
        top: -10,
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