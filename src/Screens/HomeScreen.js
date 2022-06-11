import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import CarouselCards from '../Components/CarouselCards';
import CustomButton from '../Components/CustomButton';


const HomeScreen = ({navigation}) => {
   const handleNavigation = (screenName) =>{
     navigation.navigate(screenName);
   }

  return (
    <View style={styles.homeContainer}>
       <View style = {styles.Carousel}>
       <CarouselCards />
       </View>

       <View style= {styles.botomContainer} >
        <View  style ={styles.text}>
        <Text style = {{fontWeight : "800", color: '#222222', fontSize : 18, lineHeight : 22 ,textAlign : 'center',marginBottom : 15}}>Travel Zingvel</Text>
        <Text style = {{color: '#515151', fontSize : 16, lineHeight : 19, fontWeight : '400',textAlign : 'center'}}>Join and travel Zinga La La</Text>
        </View>
        <View style = {styles.register}>
         <View >
            <CustomButton  text = "Register" onPress={() => handleNavigation("Register")} />
          </View>
          <View >
          <CustomButton  text = "Login" type = 'TERTIARY' onPress={() => handleNavigation("Login")}  />
          </View>
        </View>        
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Carousel :{
    flex :1,
    marginTop : 20,
    borderRadius : 18,
  },
  botomContainer :{
    flex :1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text : {
   flex :1,
   marginVertical :40,
  },
  register :{
    flex :1,
    marginBottom : 140,
  },
 
  
});

export default HomeScreen;
