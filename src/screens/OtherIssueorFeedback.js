import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from "react";
import MainHeader9 from '../components/MainHeader9'
import Header8 from '../components/Header8'
import { Card } from 'react-native-shadow-cards';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    label: 'Rider displayed inappropriate behaviour'
  },
  {
    label: 'Rider was missing equipment or uniform'
  },
  {
    label: 'My order was not delivered to my doorstep'
  },
  {
    label: 'There was a amoney collection issue'
  },
  {
    label: 'My delivery instructions were not followed'
  },
  {
    label: 'Other issue'
  }
];



const OtherIssueorFeedback = () => {

  return (
    <View style={styles.container}>
      <MainHeader9 />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header8 />
        <Card style={{
          backgroundColor: '#ffffff', borderTopRightRadius: 16, borderTopLeftRadius: 16, width: wp('100%'), height: hp('100%'), top: 10, padding: 15
        }}>
          <View>
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: hp('2.5%'), lineHeight: 24, letterSpacing: 0.4, color: '#1E1E1E' }}>We are sorry to hear that you had a bad experience with us.</Text>
            <Text style={{ fontFamily: 'Lato-Medium', fontSize: hp('1.5%'), lineHeight: 16, letterSpacing: 0.4, color: '#B9B8BE', marginTop: 10 }}>After you click the submit button, our team will work on solving your problem and will get back to you within next 2 hours via phone call.</Text>
          </View>
          <View>
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: hp('2.5%'), lineHeight: 2, letterSpacing: 0.4, color: '#1E1E1E', marginTop: 10 }}>Tell us what happened?</Text>
          </View>
          <View>
            <RadioButtonRN
              data={data}
              selectedBtn={(e) => console.log(e)}
              icon={
                <Icon
                  name="check-circle-o"
                  size={25}
                  color="#6541B4"
                />
              }
            />
          

          </View>
          <TextInput
              style={{ fontWeight: 'bold', flex: 1, color: '#100A1F',width:wp('10%') }}
              placeholder="Someone@Example.com"
              keyboardType='email-address'
            />
        </Card>


      </ScrollView>
    </View>
  )
}

export default OtherIssueorFeedback

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

  },
})

