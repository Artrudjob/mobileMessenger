import React, { FC } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Chat: FC = () => {

    return (
        <TouchableOpacity style={styles.chat} activeOpacity={.7}>
            <Image source={{uri:'https://images.eksmo.ru/upload/iblock/492/terkin_L_min.jpg'}} style={styles.chat__image}/>
            <View style={styles.chat__container}>
                <Text style={styles.chat__title} numberOfLines={1} ellipsizeMode={"tail"}>Василий Тёркин</Text>
                <Text style={styles.chat__text} numberOfLines={1} ellipsizeMode={"tail"}>Привет. Читал мою повесть? Если нет, то прочти обязательно</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    chat: {
        marginTop: 5,
        height: 70,
        flexDirection: "row",
        alignItems: "center"
    },
    chat__image: {
        marginLeft: 5,
        width: 60,
        height: 60,
        borderRadius: 180
    },
    chat__container: {
        marginLeft: 5,
        width: "78%",
        height: 70,
        justifyContent: 'center',
        borderBottomWidth: 1
    },
    chat__title: {
        width: "80%",
        fontSize: 20,
        fontWeight: "400",
    },
    chat__text: {
        width: "100%",
        fontSize: 16,
        opacity: .6,
    }
})

export default Chat