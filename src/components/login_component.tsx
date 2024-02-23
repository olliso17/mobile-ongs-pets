// import React from 'react';
// import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import { Link } from 'expo-router';


// const validationSchema = yup.object().shape({
//     email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
//     password: yup.string().required('Campo obrigatório'),
// });

// const LoginForm: React.FC = () => {
//     const handleLogin = (values: { email: string; password: string }) => {
//         // Lógica de autenticação aqui
//         console.log('Login:', values);
//     };

//     return (
        
//         <Formik
//             initialValues={{ email: '', password: '' }}
//             onSubmit={handleLogin}
//             validationSchema={validationSchema}
//         >
//             {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
//                 <View>
//                     <Text style={{fontSize:30, fontWeight:'bold', textAlign:'center'}}>Logar</Text>
                    
//                     <Text>Email:</Text>
//                     <TextInput
//                         className={styles.input}
//                         onChangeText={handleChange('email')}
//                         onBlur={handleBlur('email')}
//                         value={values.email}
//                     />
//                     <Text style={{ color: 'red' }}>{errors.email}</Text>

//                     <Text>Password:</Text>
//                     <TextInput
//                         className={styles.input}
//                         secureTextEntry
//                         onChangeText={handleChange('password')}
//                         onBlur={handleBlur('password')}
//                         value={values.password}
//                     />
//                     <Text style={{ color: 'red' }}>{errors.password}</Text>
//                     <Link href={{ pathname: '/add_ong', params: { name: 'Adicionar Ong'}}} asChild>
//                         <TouchableOpacity className={styles.button} onPress={()=>handleSubmit}>
//                             <Text className={styles.buttonText}>Entrar</Text>
//                         </TouchableOpacity>
//                     </Link>
//                     <Link href={{ pathname: '/add_user', params: { name: 'Adicionar usuário' } }} asChild className={styles.link}>
//                         <Text className={styles.linkText}>Adicionar Usuário</Text>
//                     </Link>
//                 </View>
//             )}
//         </Formik>
//     );
// };

// export default LoginForm;