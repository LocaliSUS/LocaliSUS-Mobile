import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../theme/AppTheme';
import { Play } from 'lucide-react-native';

const VideoEmbedAjuda = () => {
    return (
        <View style={{ width: '95%', alignSelf: 'center' }}>
            <ImageBackground
                source={require('@/assets/img/placeholder_ajuda.jpg')} // Substitua pelo caminho da sua imagem
                style={styles.bg}
                imageStyle={styles.image}
            >
                <LinearGradient
                    colors={['transparent', COLORS.lightBlue]} // Gradiente do transparente para a cor desejada
                    style={styles.overlay}
                >
                    <Play style={styles.playButton} size={80} color={COLORS.deepPurple} />
                    <Text style={styles.text}>Como Visualizar o Estoque Virtual?</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

export default VideoEmbedAjuda;

const styles = StyleSheet.create({
    bg: {
        height: 220,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        elevation: 5,
    },
    image: {
        borderRadius: 20,
    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 16,
    },
    text: {
        color: COLORS.deepPurple,
        fontWeight: 'bold',
        fontSize: 20,
    },
    playButton: {
        top: '-15%',
        left: '40%',
    }
});