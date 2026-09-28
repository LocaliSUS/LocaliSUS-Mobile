import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    lembreteScreenBackground: {
        backgroundColor: '#1F285D',
        height: '100%',
        flex: 1,
        alignItems: 'center'
    },

    lembreteScreenTheme: {
        flex: 1,
        display: 'flex',
        marginTop: '10%',
        height: '65%',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    containers: {
        borderRadius: 15,
        width: 320,
        height: 150,
        backgroundColor: '#EBF9FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%'
    },
    txtContainersTitulo: {
        fontWeight: 600,
        fontSize: 18,
        marginTop: '-5%'
    },
    botaoAdicionar: {
        width: '32%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        marginTop: '1.75%',
        borderRadius: 15,
        backgroundColor: '#eeeeee88'
    },
    txtBotaoAdicionarLembrete: {
        fontWeight: 500
    },
    placeholderLembretes: {
        backgroundColor: '#dbdbdbff',
        marginTop: 35,
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 400,
        color: '#9999',
        width: 200,
        alignItems: 'center',
        display: 'flex',
        textAlign: 'center'
    },
    tituloTelaAdicionarLembretes: {
        fontSize: 30,
        marginTop: '15%',
        fontWeight: 500,
        color: "#ffff"
    }
})