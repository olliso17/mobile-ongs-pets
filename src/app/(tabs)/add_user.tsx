import { theme } from '@/theme/index'
import { StyleSheet, Text, View } from 'react-native'
import Page from '../../components/page'


export default function AddUser(){
    return (
        <Page>
            <Text style={styles.text}>Adicionar Usuário</Text>
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