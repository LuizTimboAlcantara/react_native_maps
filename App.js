/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

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
      texto: '',
      markers: [
        {
          image: require('./assets/images/carro_down.png'),
          key: 0,
          coords: {latitude: -3.71855, longitude: -38.5449},
          pinColor: 'green',
        },
        {
          image: require('./assets/images/carro_left.png'),
          key: 1,
          coords: {latitude: -3.71884, longitude: -38.5497},
          pinColor: 'blue',
        },
      ],
    };

    //#region  Binds

    // this.moverCidade = this.moverCidade.bind(this);
    // this.mudouMapa = this.mudouMapa.bind(this);
    // this.clicou = this.clicou.bind(this);
    this.newMarker = this.newMarker.bind(this);

    //#endregion
  }

  //#region Função MoverCidade

  // moverCidade(lat, long) {
  //   let state = this.state;
  //   let region = {
  //     latitude: lat,
  //     longitude: long,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   };
  //   state.region = region;
  //   this.setState(state);
  // }

  //#endregion

  //#region  Função Mudou Mapa

  // mudouMapa(region) {
  //   let state = this.state;
  //   state.texto = region.latitude;
  //   state.region = {
  //     latitude: region.latitude,
  //     longitude: region.longitude,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   };
  //   this.setState(state);
  // }

  //#endregion

  //#region Fução Clicou

  //#region  Função para adicionar um marcador quando clicar no mapa.

  newMarker(event) {
    let state = this.state;
    state.markers.push({
      key: state.markers.length,
      coords: {
        latitude: event.nativeEvent.coordinate.latitude,
        longitude: event.nativeEvent.coordinate.longitude,
      },
      pinColor: 'pink',
    });
    this.setState(state);
  }

  //#endregion

  // clicou(event) {
  //   alert(
  //     'Latitude:' +
  //       event.nativeEvent.coordinate.latitude +
  //       '\nLongitude:' +
  //       event.nativeEvent.coordinate.longitude,
  //   );
  // }

  //#endregion

  render() {
    const {region, texto, markers} = this.state;

    return (
      <View style={styled.container}>
        {/* <View style={{flexDirection: 'row'}}>
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
        </View> */}

        <Text>
          {region.latitude} | {region.longitude}
        </Text>
        <Text>Coordenadas Atual</Text>
        <Text>{texto}</Text>

        <MapView
          // Eventos ---------------------------------------------------------------------------------------------------------------------------
          // Chamado quando carrega totalmente o mapa
          // onMapReady={() => {
          //   alert('Mapa carregado');
          // }}----------------------------------------------------------------------------------------------------------------------------------

          // Evento disparado quando vc arrasta o mapa e solta;
          // onRegionChangeComplete={this.mudouMapa}

          //  Evento para fazer algo quando se clica no mapa;
          // onPress={this.clicou}
          //

          // Tipos de mapas ------------------------------------------------------------------------------------------------------------------
          // Padrão
          //mapType="standard"

          // Visão de satelite
          //mapType="satellite"

          // standard + satelite
          // mapType="hybrid"
          // ------------------------------------------------------------------------------------------------------------------------------------

          // Algumas propriedades-----------------------------------------------------------------------------------------------------------
          // Fixa o mapa. Não é possível mexer no mapa;
          // scrollEnabled={false}

          // Inativar o zoom;
          // zoomEnabled={false}]

          // Rotação;
          //rotateEnabled={false}

          // Tráfico nas vias;
          //showsTraffic={true}
          // ------------------------------------------------------------------------------------------------------------------------------------

          // onPress={this.newMarker}
          style={styled.maps}
          region={region}>
          {/* Marcador fixo
          <Marker-----------------------------------------------------------------------------------------------------------------------------
            coordinate={{latitude: -3.71839, longitude: -38.5434}}
            pinColor={'green'}
            title={'Teste'}
            description={'Teste de descrição'}
          />-------------------------------------------------------------------------------------------------------------------------------- */}

          {markers.map(marker => {
            return (
              <Marker
                image={marker.image}
                key={marker.key}
                coordinate={marker.coords}
                pinColor={marker.pinColor}
              />
            );
          })}
        </MapView>
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
