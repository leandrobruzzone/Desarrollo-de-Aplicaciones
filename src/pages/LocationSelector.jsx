import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapPreview from "../components/MapPreview";
import { googleAPI } from "../firebase/googleAPI";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../features/auth/authSlice";
import { usePostUserLocationMutation } from "../services/shopService";
import ConfirmButton from "../components/ConfirmButton";
import TextTitle from "../components/TextTitle";
import TextDescription from "../components/TextDescription";
import TextIsSuccess from "../components/TextIsSuccess";
import Loader from "../components/Loader";

const LocationSelector = ({ navigation }) => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerPostAddress, result] = usePostUserLocationMutation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("El permiso para acceder a la localización fue rechazado");
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;
          const response = await fetch(url_reverse_geocode);
          const data = await response.json();
          setAddress(data.results[0].formatted_address);
        }
      } catch (err) {}
    })();
  }, [location]);

  useEffect(() => {
    if (result.isLoading) {
      setIsLoading(true);
    } else if (result.isSuccess) {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        navigation.goBack();
      }, 2000);
    }
  }, [result.isSuccess, result.isLoading]);

  const onConfirmAddress = async () => {
    setIsLoading(true);
    const locationFormatted = {
      latitude: location.latitude,
      longitude: location.longitude,
      address: address,
    };
    dispatch(setUserLocation(locationFormatted));
    await triggerPostAddress({ localId, location: locationFormatted });
  };

  return (
    <View style={styles.container}>
      <TextTitle title={"Mis direcciones"} />
      {isLoading ? (
        <Loader />
      ) : isSuccess ? (
        <TextIsSuccess description="Dirección confirmada con éxito" />
      ) : (
        <View style={styles.noLocationContainer}>
          <MapPreview location={location} />
          <TextDescription description={address} />
          <ConfirmButton
            title={"Confirmar dirección"}
            onPress={onConfirmAddress}
          />
        </View>
      )}
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    paddingVertical: 30,
  },
  noLocationContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
