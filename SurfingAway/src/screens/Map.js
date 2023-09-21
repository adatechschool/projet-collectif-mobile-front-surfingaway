import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Callout } from 'react-native-maps';
import getAllSpots from "../services/getAllSpots";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const Map = () => {
  const [mapLat, setMapLat] = useState(0);
  const [mapLong, setMapLong] = useState(0);
  const [spotsCoords, setSpotsCoords] = useState([]);
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  const getAllCoords = async () => {
    try {
      const dataSpots = await getAllSpots();
      let coordsArray = [];

      dataSpots.forEach(spot => {
        coordsArray.push({
          latitude: spot.latitude,
          longitude: spot.longitude,
          name: spot.address,
          spot: spot
        })
      });
      console.log(coordsArray);
      setSpotsCoords(coordsArray);

    } catch (error) {
      setError('Could not fetch weather');
    }
  }

  // Localisation de l'user
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({});
      setMapLat(location.coords.latitude);
      setMapLong(location.coords.longitude);
      await getAllCoords();
    })()
  }, [])

  return (
    <View style={styles.container} >
      <MapView
        style={styles.map}
        region={{
          latitude: mapLat,
          longitude: mapLong,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {spotsCoords.map((data, index) => (
          <Marker
            key={index}
            pinColor={"deeppink"}
            coordinate={{
              latitude: parseFloat(data.latitude),
              longitude: parseFloat(data.longitude),
            }}
            title={data.name}
          >
            <Callout onPress={() => navigation.navigate("Details", { spot: data.spot })} />
          </Marker>
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%',
  }
})

export default Map;