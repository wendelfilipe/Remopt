import { Image, ImageBackground, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../styles/exibitionScreen"
import { RouteProp, useRoute } from "@react-navigation/native"
import LoadingComponent from "../components/LoadComponet"
import { capitalize } from "../hooks/useCapitalize"
import { useEffect, useState } from "react"

type ExibitionProps = {
    data: any
}

const ExibitionScreen: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const route = useRoute<RouteProp<{params: ExibitionProps}, 'params'>>();
    const { data } = route.params

    const image = data.sprites.other['official-artwork'].front_default;
    const id = data.id
    const name = capitalize(data.name)
    const types = data.types.map((item: any) => capitalize(item.type.name)).join(', ')

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
            <ImageBackground
                source={require("../../assets/segundatela.png")}
                style={styles.imageContainer}
            >
                <View style={styles.containerTop}>
                    <Text style={styles.text}>ID: {id}</Text>
                    <Image
                        source={{uri: image}}
                        style={{width: 200, height: 200}}
                        resizeMode="contain"
                    ></Image>
                </View>
                <View style={styles.containerBottom}>
                    <Text style={styles.text}>Name: {name}</Text>
                    <Text style={styles.text}>Type: {types}</Text>
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default ExibitionScreen;