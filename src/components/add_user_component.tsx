// import React from 'react';
// import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
// import { Formik } from 'formik';
// import * as yup from 'yup';
// import { Link } from 'expo-router';
// import { styles } from '../styles/style';


// const validationSchema = yup.object().shape({
//     name: yup.string().required('Campo obrigatório'),
//     email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
//     password: yup.string().required('Campo obrigatório'),
// });

// const AddUserForm: React.FC = () => {
//     const handleAddUser = (values: {name:string, email: string; password: string }) => {
//         // Lógica de autenticação aqui
//         console.log('AddUser:', values);
//     };

//     return (
        
//         <Formik
//             initialValues={{ name:'', email: '', password: '' }}
//             onSubmit={handleAddUser}
//             validationSchema={validationSchema}
//         >
//             {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
//                 <View>
//                     <Text style={{fontSize:30, fontWeight:'bold', textAlign:'center'}}>Adicionar Usuário</Text>
                    

//                     <Text>Nome:</Text>
//                     <TextInput
//                         className={styles.input}
//                         onChangeText={handleChange('name')}
//                         onBlur={handleBlur('name')}
//                         value={values.name}
//                     />
//                     <Text style={{ color: 'red' }}>{errors.name}</Text>

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
//                     <Link href={{ pathname: '/add_ong', params: { name: 'Adicionar Ong' } }} asChild>
//                         <TouchableOpacity className={styles.button} onPress={()=>handleSubmit}>
//                             <Text className={styles.buttonText}>Entrar</Text>
//                         </TouchableOpacity>
//                     </Link>
//                     <Link href={{ pathname: '/', params: { name: 'Fazer Login' } }} asChild className={styles.link}>
//                         <Text className={styles.linkText}>Fazer Login</Text>
//                     </Link>
//                 </View>
//             )}
//         </Formik>
//     );
// };

// export default AddUserForm;