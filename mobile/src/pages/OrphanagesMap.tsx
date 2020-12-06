import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import mapMarker from '../images/map-marker.png';

const OrphanegesMap = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleNavToOrphanageDetails() {
    navigation.navigate('OrphanageDetails');
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -27.6094303,
          longitude: -48.4687409,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}>
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -27.6094303,
            longitude: -48.4687409,
          }}
          calloutAnchor={{
            x: 2.6,
            y: 0.5,
          }}>
          <Callout tooltip onPress={handleNavToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Dois orfganatos encontrados</Text>
        <TouchableOpacity style={styles.createOrphanageButton}>
          <Feather name="plus" size={20} color="#FFF" onPress={() => {}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OrphanegesMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 168,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255, .8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
  },
  footer: {
    position: 'absolute',
    right: 24,
    left: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 10,
  },
  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold',
  },
  createOrphanageButton: {
    backgroundColor: '#15c3d6',
    width: 56,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
