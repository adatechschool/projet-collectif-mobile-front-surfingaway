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
      const records = await getAllSpots();
      let coordsArray = [];

      records.forEach(spot => {
        coordsArray.push({
          latitude: spot.fields.Latitude,
          longitude: spot.fields.Longitude,
          name: spot.fields.Address,
          id: spot.id
        })
      });
      console.log(coordsArray);
      setSpotsCoords(coordsArray);

    } catch (error) {
      setError('Could not fetch weather');
    }
  }

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
            coordinate={{
              latitude: parseFloat(data.latitude),
              longitude: parseFloat(data.longitude),
            }}
            title={data.name}
          >
            <Callout onPress={() => navigation.navigate("Details", { id: data.id })} />
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