import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreenStack from './HomeScreenStack';
import CategoriesScreenStack from './CategoriesScreenStack';
import DealsScreenStack from './DealsScreenStack'
import CartScreenStack from './CartScreenStack';
import MenuScreenStack from './MenuScreenStack';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (

        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: hp('7%'),
                    width: wp('100%'),


                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreenStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}
                    >
                        < Image
                            source={require('../../assets/Home.png')}
                            resizeMode='contain'
                            style={{
                                width: 18,
                                height: 18,


                            }} />
                        <Text style={styles.texttab}>Home</Text>
                    </View>
                ),


            }} />
            <Tab.Screen name="Categories" component={CategoriesScreenStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}
                    >
                        < Image
                            source={require('../../assets/Categories.png')}
                            resizeMode='contain'
                            style={{
                                width: 18,
                                height: 18,


                            }} />
                        <Text style={styles.texttab}>Categories</Text>
                    </View>
                ),


            }} />
            <Tab.Screen name="Deals" component={DealsScreenStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}
                    >
                        < Image
                            source={require('../../assets/Deals.png')}
                            resizeMode='contain'
                            style={{
                                width: 18,
                                height: 18,


                            }} />
                        <Text style={styles.texttab}>Deals</Text>
                    </View>
                ),


            }} />
            <Tab.Screen name="Cart" component={CartScreenStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}
                    >
                        < Image
                            source={require('../../assets/Cart.png')}
                            resizeMode='contain'
                            style={{
                                width: 18,
                                height: 18,


                            }} />
                        <Text style={styles.texttab}>Cart</Text>
                    </View>
                ),


            }} />
            <Tab.Screen name="Menu" component={MenuScreenStack} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}
                    >
                        < Image
                            source={require('../../assets/Menu.png')}
                            resizeMode='contain'
                            style={{
                                width: 18,
                                height: 18,


                            }} />
                        <Text style={styles.texttab}>Menu</Text>
                    </View>
                ),


            }} />
        </Tab.Navigator >

    );
}
export default Tabs;

const styles = StyleSheet.create({
    texttab: {
        fontSize: 10,
        lineHeight: 14,
        letterSpacing: 0.02,
        color: '#100A1F',
        fontFamily: 'Lato-Bold',
        letterSpacing: 0.4
    },
})

