import React,{useState} from 'react';
import { View, Text,ScrollView , StyleSheet, Pressable} from 'react-native';
import CarImage from '../../components/CarImage';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput, DefaultTheme } from "react-native-paper";

const Search = () => {

    const [make, setMake] = React.useState('');
    const [model,setModel] = React.useState('');
    const [year, setYear] = React.useState('');
    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "rgb(248, 248, 248)",
        },
      };

      const handleSearch = () => {
        console.log('Search button pressed');
        Keyboard.dismiss();
        navigation.navigate('Search');
      }

    return (
        <ScrollView >  
        <View style={styles.container}>

        
            <View style={{ marginTop: "30%", marginBottom: "20%" }}>
                <CarImage />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="car" size={20} color="gray" style={{ marginRight: 10 }} />
                
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="Car Make"
                    value={make}
                    onChangeText={setMake}
                    outlineColor="rgba(50, 50, 50, 0.15)"
                    activeOutlineColor="#17B3A6"
                    theme={theme}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="car" size={20} color="gray" style={{ marginRight: 10 }} />
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="Car Model"
                    value={model}
                    onChangeText={setModel}
                    outlineColor="rgba(50, 50, 50, 0.15)"
                    activeOutlineColor="#17B3A6"
                    theme={theme}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="map-marker" size={20} color="gray" style={{ marginRight: 10 }} />
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="Year"
                    value={year}
                    onChangeText={setYear}
                    outlineColor="rgba(50, 50, 50, 0.15)"
                    activeOutlineColor="#17B3A6"
                    theme={theme}
                />
            </View>
            <Pressable
            android_ripple={{ color: "#218644" }}
            style={styles.button}
            onPress={handleSearch}
            >
            <Text style={styles.buttonText}>Search</Text>
          </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
 container:{
    flex:1,
    alignItems: 'center',
    marginHorizontal: "10%"
 },
    input: {
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: "90%",  
    },
    
    button: {
      marginVertical: 20,
      paddingVertical: '4%',
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
      width: "100%",
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
      },
  
  });

export default Search;
