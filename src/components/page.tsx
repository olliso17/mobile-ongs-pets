import { ReactElement } from "react"
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native"
import { theme } from "../theme"

type Props = {
    children: ReactElement
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Page({ children }: Props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <View style={styles.body}>
                    <Image source={require('../../assets/images/logo.png')} />

                    {children}
                </View>

            </View>
        </ScrollView>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.brown[950],
        height:windowHeight
    },
    body: {
        width: '95%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.brown[50]
    },

    view: {
        width: '95%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.brown[100]
    },
    text: {
        fontSize: 22,
        color: theme.colors.brown[950],
        fontFamily: theme.fontFamily.bold
    }
})