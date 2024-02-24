import {View, StyleSheet, Text, Image} from 'react-native'
import { theme } from '@/theme/index'
import Page from '../../components/page'
import LoginForm from '../../components/login_component'


export default function Login(){
     return (
        <Page>
            <LoginForm/>
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