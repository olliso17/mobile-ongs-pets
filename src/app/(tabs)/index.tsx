import { theme } from '@/theme/index'
import { StyleSheet, Text, View } from 'react-native'
import Page from '../../components/page'


export default function Home(){
    return (
        <Page>
           <View style={styles.view}>
            <Text style={styles.title}>Olá como está?</Text>
            <Text style={styles.text}>Aqui você encontrará uma lista de Ongs ativas, cadastradas baseadas no cnpj e verificada sua veracidade pelo sistema do governo federal</Text>
           </View>

        </Page>
      
    )
}

const styles = StyleSheet.create({
    view: {
        width: '95%',
        height: '70%',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: theme.colors.brown[100]
    },
    title:{
        fontSize:22,
        color:theme.colors.brown[950],
        fontFamily:theme.fontFamily.bold
    },
    text:{
        fontSize:16,
        color:theme.colors.brown[950],
        fontFamily:theme.fontFamily.bold
    }
})