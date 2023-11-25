import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RenderItem = ({ item }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('CarDetails', { item: item });
    };
    return (

        <Pressable style={styles.container} onPress={handlePress} >
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/car.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View >
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{item.Make}</Text>
                <Text>{item.Model}</Text>
                <Text style={{ color: "rgba(0,0,0,0.60)" }}>{item.Location}</Text>
                <Text style={{ textAlign: 'right' }}>Rent: {item.Rent}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '46%',
        padding: '2%',
        margin: '2%',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    imageContainer: {
        height: 150,
        marginBottom: 10, 
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

});

export default RenderItem;
