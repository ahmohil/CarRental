import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from 'expo-image-picker';
import { TextInput, DefaultTheme } from "react-native-paper";
const CreateAd = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [driverOption, setDriverOption] = useState("AvailableWithDriver");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [city, setCity] = useState("");
  const handleYearChange = (text) => setYear(text);
  const handleDriverOptionChange = (value) => setDriverOption(value);
  const handleCityChange = (value) => setCity(value);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handleSave = () => {
    console.log("Car Saved");
  }

  const years = Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, index) => (new Date().getFullYear() - index).toString());
  const cities = [
    "Karachi",
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Multan",
    "Peshawar",
    "Quetta",
    "Islamabad",
    "Sialkot",
    "Gujranwala",
  ];


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>


          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 40, color: "#17B3A6" }}>Add Car</Text>

            {selectedImage && (
              <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200, marginBottom: 20 }} />
            )}

            <TouchableOpacity onPress={handleImagePicker}>
              <View style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 20, borderColor:"rgba(50, 50, 50, 0.15)" }}>
                <Text style={{ fontSize: 20, color: '#17B3A6' }}>Select Image</Text>
              </View>
            </TouchableOpacity>

            <Text>Make:</Text>
            <TextInput
              style={styles.input}
              mode="outlined"
              value={make}
              onChangeText={setMake}
              outlineColor="rgba(50, 50, 50, 0.15)"
              activeOutlineColor="#17B3A6"
              theme={theme}
            />

            <Text>Model:</Text>
            <TextInput
              style={styles.input}
              mode="outlined"
              value={model}
              onChangeText={setModel}
              outlineColor="rgba(50, 50, 50, 0.15)"
              activeOutlineColor="#17B3A6"
              theme={theme}
            />

            <Text>Description:</Text>
            <TextInput
              style={{...styles.input, height:100}}
              mode="outlined"
              value={description}
              onChangeText={setDescription}
              outlineColor="rgba(50, 50, 50, 0.15)"
              activeOutlineColor="#17B3A6"
              theme={theme}
              multiline
              numberOfLines={20}
            />

            <View style={styles.row}>


              <Text style={styles.rowText}>Year Registered:</Text>
              <Picker
                selectedValue={year}
                onValueChange={handleYearChange}
                style={{ height: 50, width: 200, marginBottom: 10 }}
              >
                {years.map((yearValue) => (
                  <Picker.Item key={yearValue} label={yearValue} value={yearValue} />
                ))}
              </Picker>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Driver Option:</Text>
              <Picker
                selectedValue={driverOption}
                onValueChange={handleDriverOptionChange}
                style={{ height: 50, width: 200, marginBottom: 10 }}
              >
                <Picker.Item label="Available with Driver" value="AvailableWithDriver" />
                <Picker.Item label="Without Driver" value="WithoutDriver" />
                <Picker.Item label="Driver Available on Demand" value="DriverAvailableOnDemand" />
              </Picker>
            </View>

            <View style={styles.row}>
              <Text style={styles.rowText}>Select City:</Text>
              <Picker
                selectedValue={city}
                onValueChange={handleCityChange}
                style={{ height: 50, width: 200, marginBottom: 10 }}
              >
                {cities.map((city) => (
                  <Picker.Item key={city} label={city} value={city} />
                ))}
              </Picker>
            </View>




            <Pressable
              android_ripple={{ color: "#218644" }}
              style={styles.button}
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  input:{
    height:40,
    marginVertical: 10,
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
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rowText:{
     paddingVertical: 10, 
     fontSize: 15 
  },
})

export default CreateAd;