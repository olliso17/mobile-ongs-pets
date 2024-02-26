import { Button, Image, StyleSheet, Text, View } from "react-native";
import Page from "../../components/page";
import api from "../../service/api";
import { theme } from "../../theme";
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import useAllOngs, { Ong } from "../../interface/get_all_ongs_interface";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { Link } from "expo-router";
import { fontScale } from "nativewind";
import { type } from '../../../.expo/types/router.d';

export default function Ongs() {

    const [ongs, setOngs] = useState<Ong[]>([])
    useEffect(() => {
        const getOngs = async () => {
            try {
                const response: AxiosResponse<Ong[]> = await api.get('ongs/all');
                setOngs(response.data)
            } catch (erro: any) {
                console.error('Erro ao obter recurso:', erro.message);
                throw erro;
            }
        }
        getOngs()
    }, []);

    if (!ongs.length) {
        // Se a lista ainda não foi carregada, você pode exibir um indicador de carregamento ou outra UI
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        );
    }
    console.log(ongs);
    return (
        <Page>
            <View style={styles.view}>
                <View style={styles.route}>
                    <TextInput type='select'/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Bairro</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cidade</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Estado</Text>
                    </TouchableOpacity> 
                </View>


                <FlatList
                    data={ongs}
                    keyExtractor={(item: Ong) => item.id.toString()}
                    renderItem={({ item }) => (

                        <TouchableOpacity style={styles.card}>
                            <View style={styles.cardImage}>
                                {item.image != '' ? <Image source={{ uri: item.image }} style={styles.image} /> : <View />}
                            </View>
                            <View style={styles.cardText}>

                                <Text style={styles.title}>{item.name} - Cnpj: {item.cnpj}</Text>
                                <Text style={styles.text}>{item.address}, {item.number_address}, Bairro {item.neighborhood}, {item.city}/{item.state}, cep: {item.cep}</Text>
                                <Text style={styles.text}>
                                    {item.telephone !== '' ? 'Telefone para contato: ' + item.telephone : ''}
                                    {item.email_ong !== '' ? 'Email para contato: ' + item.email_ong : ''}
                                </Text>
                            </View>

                        </TouchableOpacity>

                    )}
                />
            </View>

        </Page>

    )
}

const styles = StyleSheet.create({
    route: {
        display: 'flex',
        flexDirection:'row'
    },
    view: {
        width: '95%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.brown[100]
    },
    title: {
        fontSize: 12,
        color: theme.colors.brown[950],
        fontFamily: theme.fontFamily.bold,
    },
    text: {
        fontSize: 12,
        color: theme.colors.brown[950],
        fontWeight: '500'
    },
    button: {
        width: 70,
        height:30,
        padding: '3%',
        backgroundColor: theme.colors.brown[950],
        borderRadius: 10,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 12,
        textAlign: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    cardImage: {
        display: "flex",
        width: 100,
        alignItems: 'center',
    },
    cardText: {
        display: "flex",
        width: 248,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 6
    },
    card: {
        display: "flex",
        margin: 10,
        width: 352,
        height: 170,
        flexDirection: 'row',
        gap: 6,
        backgroundColor: theme.colors.white,
        borderRadius: 10,
    }
})