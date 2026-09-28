// cardMedicamentoTheme.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#EBF9FF',
        borderRadius: 20,
        padding: '6.5%',
        marginBottom: 14,
        borderColor: '#86868699',
        borderWidth: 1,
        boxShadow: '1.25px 3.5px 10px 2px #83838355',
    },
    linhaSuperior: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    imagem: {
        width: '35%',
        height: 100,
    },
    descricao: {
        flex: 1,
        fontSize: 12,
        color: '#333',
        textAlign: 'justify',
    },
    linhaInferior: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    nome: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },


});