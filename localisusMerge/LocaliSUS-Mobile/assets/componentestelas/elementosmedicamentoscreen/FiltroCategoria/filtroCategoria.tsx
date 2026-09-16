import { useState } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import { styles } from "./filtroCategoriaTheme";

const CATEGORIAS = ['Analgésicos', 'Antibioticos', 'Diuréticos', 'Estatinas'] as const;

type FiltroCategoriasProps = {
    categoriaSelecionada?: string;
    onSelecionar: (categoria: string) => void;
};

export const FiltroCategorias = ({ categoriaSelecionada, onSelecionar }: FiltroCategoriasProps) => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
            {CATEGORIAS.map((categoria) => {
                const ativo = categoria === categoriaSelecionada;
                return (
                    <TouchableOpacity
                        key={categoria}
                        style={[styles.chip, ativo && styles.chipAtivo]}
                        onPress={() => onSelecionar(categoria)}
                    >
                        <Text style={[styles.chipTexto, ativo && styles.chipTextoAtivo]}>
                            {categoria}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};