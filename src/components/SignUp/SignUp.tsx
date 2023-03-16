import React, { FC, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import ButtonAdd from './ButtonAdd/ButtonAdd';

const SignUp: FC = () => {
    const [login, setLogin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    return (
        <SafeAreaView style={styles.signUp}>
            <Text style={styles.signUp__title}>Регистрация</Text>
            <View style={styles.signUp__form}>
                <View style={styles.signUp__inputBox}>
                    <Text style={styles.signUp__text}>Логин</Text>
                    <TextInput style={styles.signUp__input}
                        placeholder='Придумайте логин' 
                        onChangeText={newLogin => setLogin(newLogin)}
                        defaultValue={login}    
                    />
                </View>
                <View style={styles.signUp__inputBox}>
                    <Text style={styles.signUp__text}>Почта</Text>
                    <TextInput style={styles.signUp__input}
                        placeholder='Ваша почта'
                        onChangeText={newEmail => setEmail(newEmail)}
                        defaultValue={email} 
                    />
                </View>
                <View style={styles.signUp__inputBox}>
                    <Text style={styles.signUp__text}>Пароль</Text>
                    <TextInput style={styles.signUp__input}
                        placeholder='Придумайте пароль' 
                        onChangeText={newPassword => setPassword(newPassword)}
                        defaultValue={password}
                    />
                </View>
                <View style={styles.signUp__inputBox}>
                    <Text style={styles.signUp__text}>Повторите пароль</Text>
                    <TextInput style={styles.signUp__input}
                        placeholder='Повторите пароль' 
                        onChangeText={newPassword => setPassword(newPassword)}
                        defaultValue={password}
                    />
                </View>
                <View style={styles.signUp__buttonBox}>
                    <ButtonAdd
                        title='Зарегистрироваться' 
                        onPress={() => {}}
                    />
                </View>
            </View>
            <View style={styles.signUp__footer}>
                <Text style={styles.signUp__footerText}>Уже зарегистрированы? Нажмите:</Text>
                <TouchableOpacity>
                    <Text style={styles.signUp__buttonSignIn}>Войти</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    signUp: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffcfba",
    },
    signUp__title: {
        fontSize: 42,
        fontWeight: "bold"
    },
    signUp__form: {
        flex: .9,
        width: "100%"
    },
    signUp__inputBox: {
        alignItems: "flex-start",
        width: "90%",
        marginTop: 15,
        marginLeft: 15,
        borderBottomWidth: 1
    },
    signUp__text: {
        fontSize: 32,
        fontWeight: "400",
        textAlign: "left",
    },
    signUp__input: {
        fontSize: 28,
        width: "100%"
    },
    signUp__footer: {
        flex: .12
    }, 
    signUp__buttonBox: {
        marginTop: 80
    },
    signUp__footerText: {
        fontSize: 18,
        opacity: .6
    },
    signUp__buttonSignIn: {
        fontSize: 20,
        opacity: .8,
        textAlign: "center"
    }
})

export default SignUp