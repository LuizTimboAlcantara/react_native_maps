/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -3.71839,
        longitude: -38.5434,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };

    this.moverCidade = this.moverCidade.bind(this);
  }

  moverCidade(lat, long) {
    let state = this.state;
    let region = {
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    state.region = region;
    this.setState(state);
  }

  render() {
    const {region} = this.state;

    return (
      <View style={styled.container}>
        <View style={{flexDirection: 'row'}}>
          <Button
            title="Fortaleza"
            onPress={() => {
              this.moverCidade(-3.71839, -38.5434);
            }}
          />
          <Button
            title="Brasilia"
            onPress={() => {
              this.moverCidade(-15.8080374, -47.8750231);
            }}
          />
        </View>

        <Text>
          {region.latitude} | {region.longitude}
        </Text>

        <MapView style={styled.maps} region={region} />
      </View>
    );
  }
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
  },
  maps: {
    width: '100%',
    height: '90%',
  },
});
