import React, { FC } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Link, Outlet, useNavigate } from "react-router-native";

const Layout: FC = () => {

    const navigate = useNavigate();

    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.layout__main}>
                <Outlet />
            </View>
            <View style={styles.layout__navigation}>
                <TouchableOpacity style={styles.layout__buttonBox}>
                    <Image style={styles.layout__profile} source={require("../../../assets/contacts.png")} />
                    <Text>Контакты</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.layout__buttonBox} onPress={() => {navigate("/chats")}}>
                    <Image style={styles.layout__profile} source={require("../../../assets/chat.png")} />
                    <Text>Чаты</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.layout__buttonBox} onPress={() => {navigate("/profile")}}>
                    <Image style={styles.layout__profile} source={require("../../../assets/profile.png")} />
                    <Text>Профиль</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffcfba",
    },
    layout__main: {
        flex: .9,
        width: "100%"
    },
    layout__navigation: {
        width: "100%",
        flex: .12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#f07800",
    },
    layout__buttonBox: {
        justifyContent: "center",
        alignItems: "center"
    },
    layout__profile: {
        width: 35,
        height: 35
    }
})

export default Layout