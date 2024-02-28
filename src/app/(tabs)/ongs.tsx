import { AxiosResponse } from "axios";
import { Suspense, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Page from "../../components/page";
import { Ong } from "../../interface/get_all_ongs_interface";
import api, { baseUrl } from "../../service/api";
import { theme } from "../../theme";
import { states } from "../../utils/states_brasil";
import DropDownPicker from "react-native-dropdown-picker";
import {mutate as mutateGlobal}from "swr";
import getOngs from "../../service/api";
import { useFetchSwr } from "../../hooks/useFetchSwr";


export default function Ongs() {

    const [currentValue, setCurrentValue] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const { data, mutate } = useFetchSwr<Ong[]>('ongs/all')

    if (!data) {

        return (
            <View style={{height:800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{
                    fontSize: 20,
                    fontFamily: theme.fontFamily.bold,
                    color:theme.colors.brown['950']
                }}>Carregando...</Text>
            </View>
        );
    }
    mutateGlobal('ongs/all',data)
    // console.log(currentValue)
    return (

        <Page>
            <View style={styles.view}>
                <View style={styles.route}>
                    <DropDownPicker
                        items={states}
                        open={isOpen}
                        setOpen={() => setIsOpen(!isOpen)}
                        value={currentValue}
                        setValue={(val: any) => setCurrentValue(val)}
                        maxHeight={200}
                        autoScroll
                        placeholder="Estado"
                        placeholderStyle={{
                            fontFamily: theme.fontFamily.bold,
                            fontSize: 16
                        }}
                        multiple={true}
                        min={1}
                        max={1}
                        mode="BADGE"
                        badgeColors={[theme.colors.brown['950']]}
                        badgeDotColors={[theme.colors.brown['50']]}
                        badgeTextStyle={{ color: theme.colors.brown['50'] }}
                        showTickIcon={true}
                        containerStyle={{ width: 150 }}
                    />

                    {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Bairro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cidade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Estado</Text>
                    </TouchableOpacity> */}
                </View>

                <Suspense>
                    <FlatList
                        data={data}
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
                </Suspense>

            </View>
        </Page >

    )
}

const styles = StyleSheet.create({
    route: {
        display: 'flex',
        flexDirection: 'row'
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
        height: 30,
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