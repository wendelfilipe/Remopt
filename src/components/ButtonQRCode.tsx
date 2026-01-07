import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"


type ButtonProps = {
    onPress: () =>  void;
}

const ButtonQRCode: React.FC<ButtonProps> = ({onPress}) => {

    return(
        <TouchableOpacity style={styles.container}
            onPress={onPress}
        >
            <Text>Scannear QRCode</Text>
        </TouchableOpacity>
    )
}

export default ButtonQRCode

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 50,
        paddingVertical: 32,
        borderWidth: 6,
        borderRadius: 8,
        elevation: 10
    }
})