import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const CarDetails = ({ route }) => {
    const item = route.params.item;

    const handleContact = () => {
        console.log("Contact")
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.contianer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../../assets/car.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.details}>
                    <View style={styles.row}>
                        <Text style={styles.heading}>Make : </Text>
                        <Text>
                            {item && item.Make}</Text>
                    </View>
                    <View style={styles.row}>

                        <Text style={styles.heading}>Model : </Text>
                        <Text>{item && item.Model}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.heading}>Rent: </Text>
                        <Text>{item && item.Rent} per day</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.heading}>Description: </Text>
                        <Text>
                            Hamadan Rent a Car.
                        </Text>
                    </View>
                    <View>
                        <Pressable
                            android_ripple={{ color: "#218644" }}
                            style={styles.button}
                            onPress={handleContact}
                        >
                            <Text style={styles.buttonText}>Contact Renter</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contianer: {
        margin: "4%",
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    details: {
        flex: 1,

    },
    row: {
        flexDirection: 'row',
        padding: 10,
    },
    button: {
        marginVertical: 80,
        paddingVertical: '3%',
        backgroundColor: '#17B3A6',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        //opacity: pressed ? 0.8 : 1,
        alignItems: 'center',
        borderRadius: 4,
        width: "60%",
        alignSelf: 'center',
      },
      buttonText: {
        fontSize: 20,
        color: 'white',
      },
})

export default CarDetails;