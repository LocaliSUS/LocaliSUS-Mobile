import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { COLORS } from "../../theme/AppTheme";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export const MapaSus = () => {
  //const [region, setRegion] = useState({
    //latitude: -23.55052,
    //longitude: -46.633308,
    //latitudeDelta: 0.05,
    //longitudeDelta: 0.05,
  //});

  //useEffect(() => {
  //(async () => {
    //const { status } =
      //await Location.requestForegroundPermissionsAsync();

    //console.log("STATUS:", status);

    //if (status !== "granted") {
      //console.log("Permissão negada");
      //return;
    //
    //const location =
      //await Location.getCurrentPositionAsync({});

    //console.log("LOCATION:", location);

    //setRegion({
      //latitude: location.coords.latitude,
      //longitude: location.coords.longitude,
      //latitudeDelta: 0.05,
      //longitudeDelta: 0.05,
    //});
  //})();
//}, []);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerTop}>

          <TouchableOpacity style={styles.circleButton}>
            <Text style={styles.icon}>☰</Text>
          </TouchableOpacity>

          <Text style={styles.title}>
            Pesquisar por Unidades
          </Text>

          <TouchableOpacity style={styles.circleButton}>
  <Image
    source={require("../../../../assets/img/icon-voltar.png")}
    style={styles.backIcon}
  />
</TouchableOpacity>

        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="UBS Vila Romana"
            placeholderTextColor="#4B4B6A"
            style={styles.searchInput}
          />
          <Text style={styles.searchIcon}>⌕</Text>
        </View>
      </View>

      {/* MAP AREA */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
            latitude: -23.55052,
            longitude: -46.633308,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}
        >
        <Marker
            coordinate={{
            latitude: -23.55052,
            longitude: -46.633308,
            }}
            title="São Paulo"
        />
        </MapView>

      {/* FOOTER */}
      <View style={styles.footer}>

        <View style={styles.row}>
          <TouchableOpacity style={styles.remediosButton}>
            <Text style={styles.buttonText}>💊 Remédios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.localizacaoButton}>
            <Text style={styles.buttonText}>🗺 Localização</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.lembretesButton}>
            <Text style={styles.buttonText}>⏰ Lembretes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ajudaButton}>
            <View style={styles.buttonContent}>
              <Image
                source={require("../../../../assets/img/icone-ajuda.png")}
                style={styles.helpIcon}
              />
              <Text style={styles.buttonText}>Ajuda</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlue,
  },

  header: {
    backgroundColor: COLORS.darkBlue,
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  map: {
  flex: 1,
},

  circleButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  searchContainer: {
    marginTop: 15,
    backgroundColor: "#DCE7EC",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  searchInput: {
    flex: 1,
    height: 45,
    color: COLORS.darkBlue,
    fontSize: 18,
    fontWeight: "600",
  },

  searchIcon: {
    fontSize: 24,
    color: "#4B4B6A",
  },

  backIcon: {
  width: 50,
  height: 50,
  resizeMode: "contain",
},

  mapArea: {
    flex: 1,
    backgroundColor: "#bdbdbdff",
    justifyContent: "center",
    alignItems: "center",
  },

  mapText: {
    color: "#666",
    fontSize: 18,
  },

  footer: {
    backgroundColor: COLORS.darkBlue,
    padding: 15,
    gap: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  remediosButton: {
    width: "48%",
    backgroundColor: COLORS.coralRed,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  localizacaoButton: {
    width: "48%",
    backgroundColor: COLORS.mintGreen,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  lembretesButton: {
    width: "48%",
    backgroundColor: COLORS.goldenYellow,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  ajudaButton: {
    width: "48%",
    backgroundColor: "#E8F0FF",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.darkBlue,
  },

  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  helpIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 8,
  },
});