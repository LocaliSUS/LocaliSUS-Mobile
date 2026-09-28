import { StyleSheet } from 'react-native'
import { COLORS } from "../../presentation/theme/AppTheme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.darkBlue,
    },

    FundoImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    Cardtop: {
        position: "absolute",
        width: 500,
        height: 300,
        top: -20,
        left: -49,
        resizeMode: "contain",
    },

    cardDow: {
        position: "absolute",
        width: 750,
        height: 610,
        bottom: -200,
        left: -172,
        resizeMode: "contain",
    },
    erroTexto: { color: "#FF6B6B", fontSize: 13, marginTop: -4 },
    header: {
        flex: 1.4,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 240,
    },

    imageLogo: {
        width: 110,
        height: 110,
        resizeMode: "contain",
    },

    textlogo: {
        color: "#FFFFFF",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
    },

    footer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: -10,
        gap: 12,
    },

    title: {
        marginTop: -120,
        height: 45,
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
    },

    cadastroButton: {
        backgroundColor: COLORS.goldenYellow,
        width: 150,
        height: 45,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 20,
    },

    help: {
        color: "#FFFFFF",
        fontSize: 25,
        marginTop: 5,
        marginRight: 8,
    },
    bottomIcons: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        paddingRight: 125,
    },
    voltarLogo: {
        width: 43,
        height: 47,
    },
    voltarButton: {
        marginLeft: 6,
        paddingRight: 70,
    },
});
