import { theme } from '@/theme/index'
import { StyleSheet, Text, View } from 'react-native'
import Page from '../../components/page'
import AddUserForm from '../../components/add_user_component'


export default function AddUser(){
    return (
        <Page>
            <AddUserForm/>
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