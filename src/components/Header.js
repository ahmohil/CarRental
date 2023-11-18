import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import GreenLogo from './GreenLogo';
import CarImage from './CarImage';

const Header  = () => {
    return (
        <View style = {styles.header}>
            <View style={styles.name_logo}>
                <GreenLogo />
                <Text style = {styles.name}>
                    RentaCar
                </Text>
            </View>
            <View>
                <CarImage style= {styles.car}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignContent: 'center',
        alignItems: 'center',
    },
    name_logo : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo:{
        width: 50,
        height: 50,
        color: 'green',
        resizeMode: 'contain',
    },
    name:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#17B3A6',
        marginLeft: 10,
        fontSize: 30,
    },

});

export default Header;