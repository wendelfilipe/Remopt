import { Image, ImageBackground, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../styles/homescreenstyle"
import ButtonQRCode from "../components/ButtonQRCode"
import { useCameraPermission } from "../hooks/useCameraPermission"

const HomeScreen: React.FC = ({navigation}: any) => {

    const hasPermission = useCameraPermission();

    if (!hasPermission) {
    return <Text>Câmera não autorizada</Text>;
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/PokemonSemButton.png')}
                    style={styles.image}
                >
                   <View style={styles.containerItens}>
                        <Text style={styles.text}>WENDEL MACIEL</Text>
                        <View style={styles.containerButton}>
                            <ButtonQRCode
                                onPress={() => navigation.navigate("ScanScreen")}
                            />
                        </View>
                   </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen