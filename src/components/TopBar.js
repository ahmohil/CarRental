import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useState} from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const TopBar = () => {
    const [city,setCity] = useState('All Cities');
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable style={styles.searchContainer} onPress = {() => navigation.navigate('Search')}>
                <View style = {{flexDirection: 'row', width: '50%'}}>
                <Ionicons name="md-search" size={24} color="rgba(109, 107, 107, 1)" style={styles.icon} />
                <Text style={styles.searchText}>Search for car</Text>
                </View>
                <View style  = {{flexDirection: 'row',justifyContent:'flex-end', width: '50%'}}>
                <Ionicons name="md-funnel" size={20} color="rgba(109, 107, 107, 1)" style={styles.icon} />
                <Text style={styles.searchText}>{city}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#17B3A6',
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: "3%",
        paddingVertical: "5%",
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        width: '100%',
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    icon: {
        marginRight: 8,
    },
    searchText: {
        color: 'rgba(109, 107, 107, 1)',
        fontSize: 16,
    },
})

export default TopBar;
