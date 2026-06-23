import { Image, ImageSourcePropType, View, TextInput, TextInputProps, StyleSheet } from "react-native";


interface Props {

    image: ImageSourcePropType | string;
    placeholder?: string;
    value?: string;
    keyboardType?: TextInputProps['keyboardType'];
    secureTextEntry?: boolean;
    property?: string;
    onChangeText?: (property: string | undefined, value: any) => void
}

export const CustomTextInput = ({ image,
    placeholder, value,
    keyboardType, property, secureTextEntry,
    onChangeText }: Props) => {

    const source = typeof image === 'string' ? { uri: image } : image;

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                    source={source}
                    style={styles.image}
                />
            </View>
            <View style={styles.inputContainer} >
                <TextInput
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    onChangeText={text => onChangeText && onChangeText(property, text)}
                    style={styles.TxtInput}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
        height: 45,
        marginBottom: 5,
    },

    iconContainer: {
        width: 35,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 24,
        marginLeft: -60
    },

    image: {
        width: 200,
        height: 45,
        resizeMode: 'contain',
    },

    inputContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 22,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },

    TxtInput: {
        fontSize: 16,
        color: '#333',
    },

});
