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
      // texto: '',
    };

    //#region  Binds

    // this.moverCidade = this.moverCidade.bind(this);
    // this.mudouMapa = this.mudouMapa.bind(this);
    // this.clicou = this.clicou.bind(this);

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
    const {region, texto} = this.state;

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

          style={styled.maps}
          region={region}>
          <Marker
            coordinate={{latitude: -3.71839, longitude: -38.5434}}
            pinColor={'green'}
            title={'Teste'}
            description={'Teste de descrição'}
          />
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
