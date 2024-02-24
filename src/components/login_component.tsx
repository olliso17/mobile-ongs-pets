import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link } from 'expo-router';
import { theme } from '../theme';


const validationSchema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
});

const LoginForm: React.FC = () => {
    const handleLogin = (values: { email: string; password: string }) => {
        // Lógica de autenticação aqui
        console.log('Login:', values);
    };

    return (

        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleLogin}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={styles.view}>
                    <Text style={styles.title}>Logar</Text>
                    <View style={styles.formInput}>
                        <TextInput
                            placeholder=' Digite aqui seu email'
                            style={styles.input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <Text style={{ color: 'red' }}>{errors.email}</Text>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            placeholder= ' Digite aqui sua Senha'
                            style={styles.input}
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        <Text style={{ color: 'red' }}>{errors.password}</Text>
                    </View>


                    <Link href={{ pathname: '/', params: { name: 'Adicionar Ong' } }} asChild>
                        <TouchableOpacity style={styles.button} onPress={() => handleSubmit}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                    </Link>

                </View>
            )}
        </Formik>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    view: {
        width: '95%',
        height: '70%',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        backgroundColor: theme.colors.brown[100]
    },
    formInput: {
        width: '80%',
        height: '20%',
    },
    title: {
        fontSize: 22,
        color: theme.colors.brown[950],
        fontFamily: theme.fontFamily.bold,
        marginBottom:50
    },
    input: {
        width: '95%',
        height: 50,
        borderRadius: 10,
        backgroundColor: theme.colors.brown[50]
    },
    button: {
        width: '40%',
        padding: '3%',
        backgroundColor: theme.colors.brown[950],
        borderRadius: 10,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 20,
        textAlign: 'center'
    }
})