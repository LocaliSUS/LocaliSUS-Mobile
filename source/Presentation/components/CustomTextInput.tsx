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
            <Image
                source={source}
                style={styles.image}
            />
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={text => onChangeText && onChangeText(property, text)}
                style={styles.TxtInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
    },
    image: {
        width: 25,
        height: 25,
        marginTop: 10,
    },
    TxtInput: {
        flex: 1,
        borderBottomWidth: 2,
        marginLeft: 15,
    }
});

