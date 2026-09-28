import React, { useState } from "react";
import { styles } from "./BarraPesquisaTheme";
import { View, TextInput } from "react-native";

export const BarraPesquisa = () => {
  const [busca, setBusca] = useState("");
  const medicamentos = [
    { id: 1, nome: "Captopril" },
    { id: 2, nome: "Dipirona" },
    { id: 3, nome: "Ibuprofeno" },
  ];
  return (
    <>
      <View style={styles.barrapesquisa}>
        <TextInput
          style={styles.placeholder}
          placeholder="Buscar por alg."
          value={busca}
          onChangeText={setBusca}
        />
      </View>
    </>
  );
};
