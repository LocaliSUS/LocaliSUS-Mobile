// filtroCategoriasTheme.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    chip: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#e8e8e8',
    },
    chipAtivo: {
        backgroundColor: '#d1f5d3',
    },
    chipTexto: {
        fontSize: 13,
        color: '#555',
        fontWeight: '600',
    },
    chipTextoAtivo: {
        color: '#1a1a1a',
    },
});