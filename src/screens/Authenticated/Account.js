import React, {useEffect, useState} from "react";
import { Text, View, ScrollView, StyleSheet , Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Account = () =>{

    const navigation = useNavigation();

    const handleLogout = () =>{
        navigation.navigate("Login");
    }

    const handleEditDetails = () =>{
        navigation.navigate("EditDetails");
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    useEffect (() => {  setName("Abdul Hanan Mohil");
    setEmail("ahmohil78@gmail.com");
    setAddress("House #2, Street# 1, Farooq Town, Sheikhupura");
    setPhone("0300-1234567");},[])
  

    return(
        <SafeAreaView>
            <View style = {styles.container}>
                <Pressable onPress = {handleLogout} style= {{flexDirection:"row" , justifyContent:'flex-end', width: "100%"}}>
                    <Text style = {{fontSize: 20, color:"#17B3A6"}}>Logout</Text>
                </Pressable>
                <View>
                    <Text style = {{fontWeight:'bold', fontSize: 25, color:"#17B3A6", marginVertical:"5%"}}>
                    Account Details
                    </Text>
                </View>
                <Pressable onPress = {handleEditDetails} style= {{flexDirection:"row" , justifyContent:'flex-end', width: "100%"}}>
                    <Text style = {styles.link}>Edit Details</Text>
                </Pressable>
                <View style = {styles.row}>
                    <Text style={styles.title}>Name:</Text>
                    <Text>{name}</Text>
                    
                </View>
                <View style = {styles.row}>
                    <Text style={styles.title}>Email:</Text>
                    <Text>{email}</Text>
                </View>
                <View style = {styles.row}> 
                    <Text style={styles.title}>Phone:</Text>
                    <Text>{phone}</Text>
                </View>
                <View style = {styles.row}>
                    <Text style={styles.title}>
                        Address:
                    </Text>
                    <Text>
                        {address}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container:{
        margin: "3%",
    },
    row:{
        flexDirection: "row",
        flexWrap: "wrap",
    },
    title:{
        fontWeight: "bold",
        marginRight: "5%",
        width: "20%",
        fontSize: 15,
        marginBottom: "5%"
    },
    link:{
        color: "grey",
        fontSize: 15,
        marginBottom: "5%"
    }
})

export default Account;