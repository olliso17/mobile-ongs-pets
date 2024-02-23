import { ReactElement } from "react"
import { Image, StyleSheet, View } from "react-native"
import { theme } from "../theme"

type Props={
    children:ReactElement
}

export default function Page({children}:Props){
     return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Image style={styles.image} source={require('../../assets/images/logo.png')}/>
                <View style={styles.view}>
                    {children}
                </View>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.colors.brown[950]
    },
    body:{
        width:'95%',
        height:'95%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:theme.colors.brown[50]
    },
    image:{
        width:'30%',
        height:'16%'
    },
    view:{
        width:'95%',
        height:'80%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:theme.colors.brown[100]
    },
    text:{
        fontSize:22,
        color:theme.colors.brown[950],
        fontFamily:theme.fontFamily.bold
    }
})