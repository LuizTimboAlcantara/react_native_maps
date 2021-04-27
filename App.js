import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default function app() {
  return (
    <View style={styled.container}>
      <Text>Mapas</Text>

      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: -3.71839,
          longitude: -38.5434,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
