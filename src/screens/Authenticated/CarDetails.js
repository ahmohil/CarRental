import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const CarDetails = ({route}) => {
    const item = route.params.item;

    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Car</Text>
                    {console.log(route)}
                    <Text>{item && item.Make}</Text>
                    <Text>{item && item.Model}</Text>
                    <Text>{item && item.Rent}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default CarDetails;