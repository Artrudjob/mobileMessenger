import React, { FC, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import ButtonAdd from "../ButtonAdd/ButtonAdd";

const SignIn: FC = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <SafeAreaView style={styles.signIn}>
            <Text style={styles.signIn__title}>Вход</Text>
            <View style={styles.signIn__form}>
                <View style={styles.signIn__inputBox}>
                    <Text style={styles.signIn__text}>Логин</Text>
                    <TextInput style={styles.signIn__input} 
                        placeholder="Ваш логин"
                        onChangeText={userLogin => setLogin(userLogin)}
                        defaultValue={login}    
                    />
                </View>
                <View style={styles.signIn__inputBox}>
                    <Text style={styles.signIn__text}>Пароль</Text>
                    <TextInput style={styles.signIn__input} 
                        placeholder="Ваш пароль"
                        onChangeText={userPassword => setPassword(userPassword)}
                        defaultValue={password}
                    />
                </View>
                <View style={styles.signIn__buttonBox}>
                    <ButtonAdd title="Войти" onPress={() => {}}/>
                </View>
            </View>
            <View style={styles.signIn__footer}>
                <Text style={styles.signIn__footerText}>Еще не зарегистрированы? Нажмите:</Text>
                <TouchableOpacity onPress={() => navigate("/signup")}>
                    <Text style={styles.signIn__buttonSignUp}>Зарегистрироваться</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    signIn: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffcfba",
    },
    signIn__title: {
        fontSize: 42,
        fontWeight: "bold"
    },
    signIn__form: {
        flex: .9,
        width: "100%"
    },
    signIn__inputBox: {
        alignItems: "flex-start",
        width: "90%",
        marginTop: 15,
        marginLeft: 15,
        borderBottomWidth: 1
    },
    signIn__text: {
        fontSize: 32,
        fontWeight: "400",
        textAlign: "left",
    },
    signIn__input: {
        fontSize: 28,
        width: "100%"
    },
    signIn__buttonBox: {
        marginTop: 80
    },
    signIn__footer: {
        flex: .12
    },
    signIn__footerText: {
        fontSize: 18,
        opacity: .6
    },
    signIn__buttonSignUp: {
        fontSize: 20,
        opacity: .8,
        textAlign: "center"
    }
})

export default SignIn