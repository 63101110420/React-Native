import React, { useState } from 'react';
import { Text } from 'react-native';
import { ImageBackground,StyleSheet } from 'react-native-web';
import Forecast from './Forecast';

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
        
            
    })
    return (
        <ImageBackground source={require('../sky.jpg')} style={styles.backdrop}>           
            <Forecast{...forecastInfo}/>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
        },
       
});