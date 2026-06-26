import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
} from "react-native";
import { COLORS } from "../../theme/AppTheme";

export const MapaSus = () => {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity style={styles.circleButton}>
                        <Text style={styles.icon}>☰</Text>
                    </TouchableOpacity>

                    <Text style={styles.title}>Pesquisar por Unidades</Text>

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
            <View style={styles.mapArea}>
                <Image
                    source={require("../../../../assets/img/MapaSUS.png")}
                    style={styles.mapImage}
                    resizeMode="cover"
                />
            </View>

            {/* FOOTER */}
            <View style={styles.footer}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.remediosButton}>
                        <Image
                            source={require("../../../../assets/img/Remedio-logo.png")}
                            style={{ width: 30, height: 30 }}
                        />
                        <Text style={styles.buttonText}>   Remédios</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.localizacaoButton}>
                        <Image
                            source={require("../../../../assets/img/Mapa.png")}
                            style={{ width: 35, height: 30 }}
                        />
                        <Text style={styles.buttonText}>   Localização</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.lembretesButton}>
                        <Image
                            source={require("../../../../assets/img/Relogio.png")}
                            style={{ width: 30, height: 35 }}
                        />
                        <Text style={styles.buttonText}>   Lembretes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ajudaButton}>
                        <View style={styles.buttonContent}>
                            <Image
                                source={require("../../../../assets/img/Ajuda.png")}
                                style={{ width: 35, height: 35 }}
                            />
                            <Text style={styles.buttonText}>   Ajuda</Text>
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

    circleButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#FFFFFF",
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
        backgroundColor: "#BDBDBD",
    },

    mapImage: {
        width: "100%",
        height: "100%",
    },

    footer: {
        backgroundColor: COLORS.darkBlue,
        padding: 30,
        gap: 10,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    remediosButton: {
        width: "48%",
        height: 48,
        backgroundColor: COLORS.coralRedLight,
        borderRadius: 30,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center'
    },

    localizacaoButton: {
        width: "48%",
        height: 48,
        backgroundColor: COLORS.mintGreenLight,
        borderRadius: 30,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center'
    },

    lembretesButton: {
        width: "48%",
        height: 50,
        backgroundColor: COLORS.goldenYellowLight,
        borderRadius: 30,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center'
    },

    ajudaButton: {
        width: "48%",
        height: 50,
        backgroundColor: "#E8F0FF",
        borderRadius: 30,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'center'
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