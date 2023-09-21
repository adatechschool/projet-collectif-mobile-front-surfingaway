import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker, Callout } from 'react-native-maps';
import getAllSpots from "../services/getAllSpots";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const Map = () => {
  const [mapLat, setMapLat] = useState(0);
  const [mapLong, setMapLong] = useState(0);
  const [spotsCoords, setSpotsCoords] = useState([]);
  const [loading, setLoading] = useState(true); // Ajout d'un état de chargement
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
          name: spot.spotName,
          spot: spot
        })
      });

      setSpotsCoords(coordsArray);
      setLoading(false); // Mettre à jour l'état de chargement une fois les données récupérées

    } catch (error) {
      setError('Could not fetch weather');
      setLoading(false); // Mettre à jour l'état de chargement en cas d'erreur
    }
  }

  // Localisation de l'utilisateur
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
      {loading ? (
        // Afficher un indicateur de chargement en attendant que les données soient récupérées
        <ActivityIndicator size="large" color="deeppink" style={styles.loadingIndicator} />
      ) : (
        // Une fois les données récupérées, afficher la carte avec les marqueurs
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
      )}
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
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Map;