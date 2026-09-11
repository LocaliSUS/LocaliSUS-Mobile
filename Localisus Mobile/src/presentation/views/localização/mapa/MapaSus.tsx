import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import iconevoltar from "../../../assets/img/icon-voltar.png";
import iconeajuda from "../../../assets/img/icon-ajuda.png";
import { COLORS } from "../../../theme/AppTheme";
import { RodapeHome } from "../../../../assets/componentestelas/elementoshome/rodape/RodapeHome";
import { BotoesRodape } from "../../../../assets/componentestelas/elementoshome/botoesRodape/botoesRodapeHome";

export const MapaSus = () => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          {/*}>
          <TouchableOpacity style={styles.circleButton}>
            <Text style={styles.icon}>☰</Text>
          </TouchableOpacity> */}
{/* 
          <Text style={styles.title}>Pesquisar por Unidades</Text> */}

          <TouchableOpacity style={styles.circleButton}>
            <Image source={iconevoltar} style={styles.backIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Buscar por uma unidade hospitalar"
            placeholderTextColor="#4B4B6A"
            style={styles.searchInput}
          />
          <Text style={styles.searchIcon}>⌕</Text>
        </View>
      </View>

      {/* MAP AREA
      <View style={styles.mapArea}>
        <Text style={styles.mapText}>Mapa será exibido aqui</Text>
      </View>
      <View style={{zIndex: 1000}}> */}
    <RodapeHome>
      <BotoesRodape />
    </RodapeHome>
    </View>
  );

};

{/* FOOTER
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
              <Image source={iconeajuda}
               style={styles.helpIcon} />
              <Text style={styles.buttonText}>Ajuda</Text>
            </View>
          </TouchableOpacity>
        </View> */}
