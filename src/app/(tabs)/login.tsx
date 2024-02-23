import {View, StyleSheet, Text, Image} from 'react-native'
import { theme } from '@/theme/index'
import Page from '../../components/page'


export default function Login(){
     return (
        <Page>
            <Text style={styles.text}>Login</Text>
        </Page>
     
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:22,
        color:theme.colors.brown[950],
        fontFamily:theme.fontFamily.bold
    }
})